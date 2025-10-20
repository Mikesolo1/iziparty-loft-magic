import { Heart, Phone, MapPin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Контакты</h3>
            <div className="space-y-3">
              <a href="tel:+79289606929" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone className="h-4 w-4" />
                +7 928 960 69 29
              </a>
              <a href="mailto:iziparty@yandex.ru" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail className="h-4 w-4" />
                iziparty@yandex.ru
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <span>Ростов-на-Дону, Лермонтовская, 111 этаж 2</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Документы</h3>
            <div className="space-y-2">
              <Link to="/privacy-policy" className="block hover:text-primary transition-colors">
                Политика конфиденциальности
              </Link>
              <Link to="/personal-data-consent" className="block hover:text-primary transition-colors">
                Согласие на обработку данных
              </Link>
              <Link to="/cookie-notice" className="block hover:text-primary transition-colors">
                Использование Cookie
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">О нас</h3>
            <p className="text-sm opacity-90 leading-relaxed">
              Изи Пати - современный лофт для детских праздников в Ростове-на-Дону. 
              Более 15 лет опыта в организации незабываемых праздников для детей от 1 до 18 лет.
            </p>
          </div>
        </div>

        <div className="border-t border-background/20 pt-6 text-center">
          <p className="text-lg mb-2">
            © {new Date().getFullYear()} Изи Пати - Лофт детских праздников
          </p>
          <p className="flex items-center justify-center gap-2 text-sm opacity-80">
            Сделано с <Heart className="h-4 w-4 text-red-500 fill-red-500" /> для детей и родителей
          </p>
        </div>
      </div>
    </footer>
  );
};
