import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Phone, User } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Link } from "react-router-dom";

interface PriceDialogProps {
  children: React.ReactNode;
}

export const PriceDialog = ({ children }: PriceDialogProps) => {
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [personalDataAccepted, setPersonalDataAccepted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!privacyAccepted || !personalDataAccepted) {
      toast({
        title: "Ошибка",
        description: "Необходимо принять условия обработки персональных данных",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke('send-telegram', {
        body: { 
          phone, 
          date: "Запрос стоимости",
          name,
          type: "price"
        }
      });

      if (error) throw error;

      toast({
        title: "Заявка отправлена!",
        description: "Мы свяжемся с вами в ближайшее время.",
      });
      
      setName("");
      setPhone("");
      setPrivacyAccepted(false);
      setPersonalDataAccepted(false);
      setOpen(false);
    } catch (error) {
      console.error('Error sending form:', error);
      toast({
        title: "Ошибка",
        description: "Не удалось отправить заявку. Попробуйте позже или позвоните нам.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Узнать стоимость</DialogTitle>
          <DialogDescription>
            Оставьте свои контактные данные, и мы рассчитаем стоимость вашего праздника
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name" className="text-base font-semibold">
              Ваше имя
            </Label>
            <div className="relative mt-2">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                id="name"
                type="text"
                placeholder="Введите ваше имя"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="pl-10"
                required
              />
            </div>
          </div>

          <div>
            <Label htmlFor="dialog-phone" className="text-base font-semibold">
              Ваш телефон
            </Label>
            <div className="relative mt-2">
              <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                id="dialog-phone"
                type="tel"
                placeholder="+7 (___) ___-__-__"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="pl-10"
                required
              />
            </div>
          </div>

          <div className="space-y-3 pt-2">
            <div className="flex items-start gap-2">
              <Checkbox 
                id="dialog-privacy" 
                checked={privacyAccepted}
                onCheckedChange={(checked) => setPrivacyAccepted(checked as boolean)}
                required
              />
              <Label htmlFor="dialog-privacy" className="text-xs leading-relaxed cursor-pointer">
                Я ознакомлен(а) и согласен(на) с{" "}
                <Link to="/privacy-policy" className="text-primary hover:underline">
                  Политикой конфиденциальности
                </Link>{" "}
                и{" "}
                <Link to="/cookie-notice" className="text-primary hover:underline">
                  использованием файлов cookie
                </Link>
              </Label>
            </div>

            <div className="flex items-start gap-2">
              <Checkbox 
                id="dialog-personal-data" 
                checked={personalDataAccepted}
                onCheckedChange={(checked) => setPersonalDataAccepted(checked as boolean)}
                required
              />
              <Label htmlFor="dialog-personal-data" className="text-xs leading-relaxed cursor-pointer">
                Я даю{" "}
                <Link to="/personal-data-consent" className="text-primary hover:underline">
                  согласие на обработку персональных данных
                </Link>{" "}
                в соответствии с ФЗ-152
              </Label>
            </div>
          </div>

          <Button 
            type="submit"
            disabled={isSubmitting || !privacyAccepted || !personalDataAccepted}
            className="w-full"
          >
            {isSubmitting ? "Отправка..." : "Отправить заявку"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
