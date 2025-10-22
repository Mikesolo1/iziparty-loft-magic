import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { User, Phone } from "lucide-react";
import { Link } from "react-router-dom";

interface CallbackDialogProps {
  children: React.ReactNode;
}

export const CallbackDialog = ({ children }: CallbackDialogProps) => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [dataAccepted, setDataAccepted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!privacyAccepted || !dataAccepted) {
      toast({
        title: "Ошибка",
        description: "Пожалуйста, примите условия обработки данных",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
const { error } = await supabase.functions.invoke("send-telegram", {
  body: {
    name,
    phone,
    date: new Date().toISOString(), // добавляем текущую дату
    type: "callback",
  },
});

      if (error) throw error;

      toast({
        title: "Заявка отправлена!",
        description: "Мы свяжемся с вами в ближайшее время",
      });

      setName("");
      setPhone("");
      setPrivacyAccepted(false);
      setDataAccepted(false);
      setOpen(false);
    } catch (error) {
      console.error("Error submitting callback request:", error);
      toast({
        title: "Ошибка",
        description: "Не удалось отправить заявку. Попробуйте позже.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl">Заказать обратный звонок</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="text"
                placeholder="Ваше имя"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="pl-10"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="tel"
                placeholder="Ваш телефон"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="pl-10"
                required
              />
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-start space-x-2">
              <Checkbox
                id="privacy"
                checked={privacyAccepted}
                onCheckedChange={(checked) => setPrivacyAccepted(checked as boolean)}
              />
              <label htmlFor="privacy" className="text-sm text-muted-foreground leading-tight">
                Я согласен с{" "}
                <Link to="/privacy-policy" className="text-primary hover:underline" target="_blank">
                  политикой конфиденциальности
                </Link>{" "}
                и{" "}
                <Link to="/cookie-notice" className="text-primary hover:underline" target="_blank">
                  использованием cookies
                </Link>
              </label>
            </div>

            <div className="flex items-start space-x-2">
              <Checkbox
                id="personal-data"
                checked={dataAccepted}
                onCheckedChange={(checked) => setDataAccepted(checked as boolean)}
              />
              <label htmlFor="personal-data" className="text-sm text-muted-foreground leading-tight">
                Я согласен на{" "}
                <Link to="/personal-data-consent" className="text-primary hover:underline" target="_blank">
                  обработку персональных данных
                </Link>
              </label>
            </div>
          </div>

          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600"
            disabled={!privacyAccepted || !dataAccepted || isSubmitting}
          >
            {isSubmitting ? "Отправка..." : "Заказать звонок"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
