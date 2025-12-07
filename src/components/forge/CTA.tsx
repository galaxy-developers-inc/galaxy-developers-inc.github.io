import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, MessageSquare } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const CTA = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const botToken = "6939425873:AAF9EbHWh0idzf1yv4qvubDcf_kpWLsZtP8";
    const chatId = "912956869";

    const message = `🚀 НОВАЯ ЗАЯВКА С САЙТА

👤 Имя: ${formData.name}
📞 Контакт: ${formData.contact}
💬 Сообщение:
${formData.message}`;

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
          description: "Мы свяжемся с вами в ближайшее время.",
        });
        setFormData({ name: "", contact: "", message: "" });
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
    <section id="contact-form" className="py-24 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-hero opacity-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/20 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="bg-gradient-card rounded-3xl border border-border shadow-card p-8 md:p-12 animate-fade-in">
          {/* Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-primary/20 shadow-glow mb-6">
              <MessageSquare className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-muted-foreground">
                Готовы начать?
              </span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Давайте создадим что-то <span className="bg-gradient-accent bg-clip-text text-transparent">невероятное</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Расскажите о вашей задаче, и мы покажем, как решить её за 10 часов
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-foreground">
                  Ваше имя
                </label>
                <Input
                  id="name"
                  placeholder="Альберт"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-background border-border focus:border-accent transition-colors"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="contact" className="text-sm font-medium text-foreground">
                  Telegram или Email
                </label>
                <Input
                  id="contact"
                  placeholder="@username или email@example.com"
                  value={formData.contact}
                  onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                  className="bg-background border-border focus:border-accent transition-colors"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-foreground">
                Опишите вашу задачу
              </label>
              <Textarea
                id="message"
                placeholder="Например: Нужен e-commerce с CRM для продажи электросамокатов..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="bg-background border-border focus:border-accent transition-colors min-h-[120px] resize-none"
                required
              />
            </div>

            <Button 
              type="submit"
              size="lg" 
              className="w-full bg-primary hover:bg-primary-glow text-primary-foreground shadow-glow transition-all duration-300 hover:scale-105"
            >
              <Send className="mr-2 w-5 h-5" />
              Отправить заявку
            </Button>
          </form>

          {/* Additional Info */}
          <div className="mt-8 pt-8 border-t border-border">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-accent mb-1">{"<24h"}</div>
                <div className="text-sm text-muted-foreground">Ответим на заявку</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-accent mb-1">10 часов</div>
                <div className="text-sm text-muted-foreground">До первой версии</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-accent mb-1">100%</div>
                <div className="text-sm text-muted-foreground">Качество кода</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
