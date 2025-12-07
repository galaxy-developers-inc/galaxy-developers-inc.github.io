import { ProjectStructure, ProjectNode } from '../types/project';

export class ProjectLoader {
  /**
   * Load and validate a project from JSON data
   */
  loadProject(jsonData: string): ProjectStructure {
    try {
      const parsed = JSON.parse(jsonData);
      const validated = this.validateProjectStructure(parsed);
      return validated;
    } catch (error) {
      if (error instanceof SyntaxError) {
        throw new Error(`Invalid JSON format: ${error.message}`);
      }
      throw error;
    }
  }

  /**
   * Validate project structure according to specification
   */
  private validateProjectStructure(data: any): ProjectStructure {
    if (!data || typeof data !== 'object') {
      throw new Error('Project data must be an object');
    }

    if (!data.project) {
      throw new Error('Missing required "project" field');
    }

    const project = data.project;

    // Validate required fields
    if (!project.name || typeof project.name !== 'string' || project.name.trim().length === 0) {
      throw new Error('Project must have a valid name');
    }

    if (project.type !== 'directory') {
      throw new Error('Project type must be "directory"');
    }

    if (!project.created_at || typeof project.created_at !== 'string') {
      throw new Error('Project must have a valid created_at timestamp');
    }

    if (!Array.isArray(project.children)) {
      throw new Error('Project must have children array');
    }

    // Validate children recursively
    const validatedChildren = project.children.map((child: any, index: number) => 
      this.validateProjectNode(child, `project.children[${index}]`)
    );

    return {
      project: {
        name: project.name,
        type: 'directory',
        description: project.description,
        created_at: project.created_at,
        children: validatedChildren
      }
    };
  }

  /**
   * Validate individual project node
   */
  private validateProjectNode(node: any, path: string): ProjectNode {
    if (!node || typeof node !== 'object') {
      throw new Error(`Invalid node at ${path}: must be an object`);
    }

    if (!node.name || typeof node.name !== 'string') {
      throw new Error(`Invalid node at ${path}: must have a valid name`);
    }

    if (node.type !== 'file' && node.type !== 'directory') {
      throw new Error(`Invalid node at ${path}: type must be "file" or "directory"`);
    }

    const validatedNode: ProjectNode = {
      name: node.name,
      type: node.type
    };

    // Validate base64 content for files
    if (node.content_base64) {
      if (typeof node.content_base64 !== 'string') {
        throw new Error(`Invalid node at ${path}: content_base64 must be a string`);
      }
      
      // Basic base64 validation
      if (!this.isValidBase64(node.content_base64)) {
        throw new Error(`Invalid node at ${path}: content_base64 is not valid base64`);
      }
      
      validatedNode.content_base64 = node.content_base64;
    }

    // Validate children for directories
    if (node.children) {
      if (!Array.isArray(node.children)) {
        throw new Error(`Invalid node at ${path}: children must be an array`);
      }
      
      validatedNode.children = node.children.map((child: any, index: number) =>
        this.validateProjectNode(child, `${path}.children[${index}]`)
      );
    }

    return validatedNode;
  }

  /**
   * Basic base64 validation
   */
  private isValidBase64(str: string): boolean {
    try {
      // Check if string matches base64 pattern
      const base64Pattern = /^[A-Za-z0-9+/]*={0,2}$/;
      if (!base64Pattern.test(str)) {
        return false;
      }
      
      // Try to decode to verify it's valid
      atob(str);
      return true;
    } catch {
      return false;
    }
  }

  /**
   * Extract metadata from project structure
   */
  extractMetadata(project: ProjectStructure) {
    return {
      name: project.project.name,
      type: project.project.type,
      description: project.project.description,
      createdAt: new Date(project.project.created_at),
      totalNodes: this.countNodes(project.project.children)
    };
  }

  /**
   * Count total nodes in project tree
   */
  private countNodes(nodes: ProjectNode[]): number {
    let count = nodes.length;
    for (const node of nodes) {
      if (node.children) {
        count += this.countNodes(node.children);
      }
    }
    return count;
  }

  /**
   * Build file tree index for quick lookups
   */
  buildFileIndex(project: ProjectStructure): Map<string, ProjectNode> {
    const index = new Map<string, ProjectNode>();
    
    const traverse = (nodes: ProjectNode[], currentPath: string = '') => {
      for (const node of nodes) {
        const nodePath = currentPath ? `${currentPath}/${node.name}` : node.name;
        index.set(nodePath, node);
        
        if (node.children) {
          traverse(node.children, nodePath);
        }
      }
    };
    
    traverse(project.project.children);
    return index;
  }
}