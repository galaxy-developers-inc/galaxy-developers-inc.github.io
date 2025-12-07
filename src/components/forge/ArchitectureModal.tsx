import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Database, MessageSquare, Mail, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import {
  DialogModal,
  DialogModalContent,
  DialogModalDescription,
  DialogModalHeader,
  DialogModalTitle,
} from "@/components/ui/dialog-modal";

interface ArchitectureModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ArchitectureModal = ({ open, onOpenChange }: ArchitectureModalProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    channel: "telegram"
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const botToken = "6939425873:AAF9EbHWh0idzf1yv4qvubDcf_kpWLsZtP8";
    const chatId = "912956869";
    
    const channelEmoji = {
      telegram: "📱 Telegram",
      whatsapp: "💬 WhatsApp",
      email: "📧 Email",
      phone: "📞 Телефон"
    };

    const message = `🏗️ ЗАПРОС АРХИТЕКТУРЫ ПРОЕКТОВ

👤 Имя: ${formData.name}
📞 Контакт: ${formData.contact}
💬 Канал связи: ${channelEmoji[formData.channel as keyof typeof channelEmoji]}

🎁 Запрошена база знаний с методологией`;

    try {
      const response = await fetch(
        `https://api.telegram.org/bot${botToken}/sendMessage`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chat_id: chatId,
            text: message,
            parse_mode: "HTML",
          }),
        }
      );

      if (response.ok) {
        toast({
          title: "Заявка отправлена!",
          description: "Мы свяжемся с вами в течение 24 часов и отправим архитектуру + базу знаний",
        });
        setFormData({ name: "", contact: "", channel: "telegram" });
        onOpenChange(false);
      } else {
        throw new Error("Failed to send");
      }
    } catch (error) {
      toast({
        title: "Ошибка",
        description: "Не удалось отправить заявку. Попробуйте позже.",
        variant: "destructive",
      });
    }
  };

  return (
    <DialogModal open={open} onOpenChange={onOpenChange}>
      <DialogModalContent className="max-w-3xl">
        <DialogModalHeader>
          <DialogModalTitle className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-primary/10 text-accent">
              <Database className="w-6 h-6" />
            </div>
            Архитектура проектов + База знаний
          </DialogModalTitle>
          <DialogModalDescription className="text-base mt-4">
            Получите детальную техническую документацию всех наших систем и разработанную методологию для вашего бизнеса
          </DialogModalDescription>
        </DialogModalHeader>

        {/* Architecture Preview */}
        <div className="my-6 p-6 bg-card border border-border rounded-2xl">
          <h4 className="font-semibold mb-4 text-accent">Что входит в пакет:</h4>
          <ul className="space-y-3">
            {[
              "Детальная архитектура всех 6 систем",
              "Диаграммы баз данных и API endpoints",
              "Технологический стек с обоснованием выбора",
              "База знаний с методологией разработки",
              "Best practices и паттерны проектирования",
              "Чек-листы для запуска собственных проектов"
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                <span className="text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="arch-name">Ваше имя</Label>
            <Input
              id="arch-name"
              placeholder="Как к вам обращаться?"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="bg-background border-border focus:border-accent"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="arch-contact">Контакт для связи</Label>
            <Input
              id="arch-contact"
              placeholder="Telegram, WhatsApp, Email или номер телефона"
              value={formData.contact}
              onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
              className="bg-background border-border focus:border-accent"
              required
            />
          </div>

          <div className="space-y-3">
            <Label>Предпочитаемый канал связи</Label>
            <RadioGroup
              value={formData.channel}
              onValueChange={(value) => setFormData({ ...formData, channel: value })}
              className="grid grid-cols-2 gap-3"
            >
              {[
                { value: "telegram", label: "Telegram", icon: MessageSquare },
                { value: "whatsapp", label: "WhatsApp", icon: MessageSquare },
                { value: "email", label: "Email", icon: Mail },
                { value: "phone", label: "Телефон", icon: Phone }
              ].map((option) => (
                <Label
                  key={option.value}
                  htmlFor={option.value}
                  className="flex items-center gap-3 p-4 rounded-xl border border-border bg-card cursor-pointer hover:border-accent transition-all duration-300 has-[:checked]:border-accent has-[:checked]:bg-accent/5"
                >
                  <RadioGroupItem value={option.value} id={option.value} />
                  <option.icon className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm font-medium">{option.label}</span>
                </Label>
              ))}
            </RadioGroup>
          </div>

          <Button 
            type="submit"
            size="lg" 
            className="w-full bg-primary hover:bg-primary-glow text-primary-foreground shadow-glow transition-all duration-300 hover:scale-105"
          >
            <Database className="mr-2 w-5 h-5" />
            Получить архитектуру и базу знаний
          </Button>
        </form>
      </DialogModalContent>
    </DialogModal>
  );
};

export default ArchitectureModal;
