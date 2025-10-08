import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar, Phone, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const ContactForm = () => {
  const { toast } = useToast();
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    setPhone("");
    setDate("");
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary via-secondary to-accent">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
              Забронируйте дату мероприятия
            </h2>
            <p className="text-center text-muted-foreground mb-8 text-lg">
              Оставьте свои контактные данные, и мы свяжемся с вами
            </p>

            <form onSubmit={handleSubmit} className="space-y-6 mb-12">
              <div>
                <Label htmlFor="phone" className="text-lg font-semibold mb-2 block">
                  Ваш телефон
                </Label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="pl-12 py-6 text-lg rounded-2xl"
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="date" className="text-lg font-semibold mb-2 block">
                  Дата мероприятия
                </Label>
                <div className="relative">
                  <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    id="date"
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="pl-12 py-6 text-lg rounded-2xl"
                    required
                  />
                </div>
              </div>

              <Button 
                type="submit"
                size="lg"
                className="w-full py-6 text-xl font-bold bg-gradient-to-r from-primary to-secondary hover:from-primary-glow hover:to-secondary rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Отправить заявку
              </Button>

              <p className="text-sm text-muted-foreground text-center">
                Нажимая на кнопку, вы даете согласие на обработку персональных данных
              </p>
            </form>

            <div className="border-t pt-8 space-y-6">
              <div className="flex items-start gap-4">
                <Phone className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-xl mb-1">Телефон</h3>
                  <a href="tel:+79289606929" className="text-lg text-primary hover:underline">
                    +7 928 960 69 29
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-xl mb-1">Адрес</h3>
                  <p className="text-lg text-muted-foreground">
                    Ростов-на-Дону, центр города
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-6 mt-8">
                <p className="text-center text-lg font-semibold">
                  ⏰ Бронирование праздников минимум за 5 дней до мероприятия
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
