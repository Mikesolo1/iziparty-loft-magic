import { Button as UiButton } from "@/components/ui/button";
import { Phone, ExternalLink } from "lucide-react";
import heroImage from "@/assets/hero-background.png";
import qrCode from "@/assets/qr-code.png";
import { PriceDialog } from "./PriceDialog";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Фон */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/70 via-secondary/60 to-accent/70" />
      </div>

      <div className="relative z-10 container mx-auto px-4 pt-32 pb-20 text-center">
        {/* Заголовок */}
        <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 animate-fade-in">
          Уникальный праздник для
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-300">
            вашего ребенка
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto">
          Современный лофт для детских праздников от 1 до 18 лет
        </p>

        {/* Кнопки */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <PriceDialog>
            <UiButton
              size="lg"
              className="text-lg px-8 py-6 bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Узнать стоимость
            </UiButton>
          </PriceDialog>

          <a href="tel:+79289606929">
            <UiButton
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 bg-white/20 backdrop-blur-sm text-white border-2 border-white hover:bg-white hover:text-primary rounded-full font-bold transition-all duration-300"
            >
              <Phone className="mr-2 h-5 w-5" />
              +7 928 960 69 29
            </UiButton>
          </a>
        </div>

        {/* Факты */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
          {[
            { value: "1–18", label: "лет", color: "text-yellow-300" },
            { value: "100", label: "кв.м", color: "text-pink-300" },
            { value: "до 40", label: "человек", color: "text-purple-300" },
            { value: "15", label: "лет опыта", color: "text-orange-300" },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20"
            >
              <div className={`text-4xl font-bold mb-2 ${item.color}`}>
                {item.value}
              </div>
              <div className="text-sm text-white">{item.label}</div>
            </div>
          ))}
        </div>

        {/* QR-код внизу */}
        <div className="flex justify-center mt-10">
          <a
            href="https://iziparty.taplink.ws/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex flex-col items-center"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-3xl blur-xl opacity-40 group-hover:opacity-60 transition-opacity" />
            <div className="relative bg-white/90 backdrop-blur-sm p-4 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <img
                src={qrCode}
                alt="QR-код TapLink"
                loading="lazy"
                className="w-28 h-28 md:w-32 md:h-32 object-contain mb-2"
              />
              <div className="flex items-center justify-center gap-2 text-sm font-semibold text-gray-800">
                <span>Наш TapLink</span>
                <ExternalLink className="h-4 w-4" />
              </div>
              <p className="text-xs text-gray-600 mt-1">
                Все наши контакты и соцсети
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};
