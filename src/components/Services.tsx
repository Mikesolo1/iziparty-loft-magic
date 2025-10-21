import { Music, Utensils, Sparkles, Camera, Mic, Palette } from "lucide-react";
import soundLight from "@/assets/sound-light.jpg";
import tableService from "@/assets/table-service.jpg";
import fridge from "@/assets/fridge.jpg";
import tablecloths from "@/assets/tablecloths.jpg";
import readyTable from "@/assets/ready-table.jpg";
import heroBackground from "@/assets/hero-background.png";

const services = [
  {
    icon: Music,
    title: "Профессиональный звук и свет",
    description: "Проектор, световое и звуковое оборудование"
  },
  {
    icon: Utensils,
    title: "Сервировка стола",
    description: "Посуда, приборы, скатерти, кофе и чай. Кухня со всем необходимым, холодильник, кофемашина, чайник, микроволновая печь"
  },
  {
    icon: Sparkles,
    title: "Фотозона и Игровая зона",
    description: "2-ух этажный лабиринт с горкой, сухим бассейном и горкой. Красивое оформление для ярких фотографий: серебрянные паетки и неоновая надпись «С Днем Рождения»"
  },
  {
    icon: Camera,
    title: "Профессиональный фотограф *дополнительно",
    description: "Запечатлим каждый момент праздника"
  },
  {
    icon: Mic,
    title: "Аниматоры *дополнительно",
    description: "Опытные ведущие на всё мероприятие"
  },
  {
    icon: Palette,
    title: "100+ программ *дополнительно",
    description: "Тематические программы на любой вкус"
  }
];

export const Services = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Что входит в аренду лофта
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="grid sm:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-6 hover:shadow-xl transition-all duration-300"
              >
                <service.icon className="h-10 w-10 text-primary mb-3" />
                <h3 className="font-bold text-lg mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="space-y-6">
            <img 
              src={soundLight} 
              alt="Профессиональный звук и свет" 
              className="rounded-3xl shadow-2xl w-full h-64 object-cover"
            />
            <div className="grid grid-cols-2 gap-6">
              <img 
                src={tableService} 
                alt="Сервировка стола для праздника" 
                className="rounded-2xl shadow-lg w-full h-48 object-cover"
              />
              <img 
                src={readyTable} 
                alt="Готовый сервированный стол" 
                className="rounded-2xl shadow-lg w-full h-48 object-cover"
              />
            </div>
          </div>
        </div>

        <div 
          className="relative rounded-3xl p-12 overflow-hidden"
          style={{
            backgroundImage: `url(${heroBackground})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-secondary/80" />
          <div className="relative z-10 text-primary-foreground">
          <h3 className="text-3xl font-bold mb-6 text-center">Дополнительные услуги в аренде лофта</h3>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-4">
              <img 
                src={fridge} 
                alt="Холодильник для торта" 
                className="rounded-2xl shadow-lg w-full h-48 object-cover"
              />
              <p className="text-lg">Торт можно поставить в холодильник, есть лёд</p>
            </div>
            <div className="space-y-4">
              <img 
                src={tablecloths} 
                alt="Скатерти и салфетки" 
                className="rounded-2xl shadow-lg w-full h-48 object-cover"
              />
              <p className="text-lg">Скатерти белые или оранжевые, салфетки и специи</p>
            </div>
          </div>
          <div className="space-y-4 max-w-3xl mx-auto">
            <p className="text-lg">
              <span className="font-bold">Чай в ассортименте и кофе</span> - для всех гостей
            </p>
            <p className="text-lg">
              <span className="font-bold">Посуда:</span> тарелки для гостей керамические, блюда под фрукты, приборы, бокалы для вина, рюмки, салатники, стаканы под сок, для детей одноразовые тарелки, стаканчики и вилки
            </p>
            <p className="text-lg font-bold bg-yellow-300/20 p-4 rounded-lg">
              Можете прийти за 15 минут до мероприятия, столы уже будут сервированы - поможем накрыть
            </p>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};
