import { Music, Utensils, Sparkles, Camera, Mic, Palette } from "lucide-react";
import partySpace from "@/assets/party-space.jpg";
import animation from "@/assets/animation.jpg";
import tableSetup from "@/assets/table-setup.jpg";

const services = [
  {
    icon: Music,
    title: "Профессиональный звук и свет",
    description: "Проектор, световое и звуковое оборудование"
  },
  {
    icon: Utensils,
    title: "Сервировка стола",
    description: "Посуда, приборы, скатерти, кофе и чай"
  },
  {
    icon: Sparkles,
    title: "Фотозона и декор",
    description: "Красивое оформление для ярких фотографий"
  },
  {
    icon: Camera,
    title: "Профессиональный фотограф",
    description: "Запечатлим каждый момент праздника"
  },
  {
    icon: Mic,
    title: "Аниматоры",
    description: "Опытные ведущие на всё мероприятие"
  },
  {
    icon: Palette,
    title: "100+ программ",
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
              src={partySpace} 
              alt="Лофт пространство Изи Пати" 
              className="rounded-3xl shadow-2xl w-full h-64 object-cover"
            />
            <div className="grid grid-cols-2 gap-6">
              <img 
                src={animation} 
                alt="Аниматоры на празднике" 
                className="rounded-2xl shadow-lg w-full h-48 object-cover"
              />
              <img 
                src={tableSetup} 
                alt="Сервировка стола" 
                className="rounded-2xl shadow-lg w-full h-48 object-cover"
              />
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-primary to-secondary rounded-3xl p-12 text-center text-primary-foreground">
          <h3 className="text-3xl font-bold mb-4">Сценарий под интересы ребенка</h3>
          <p className="text-xl mb-6">
            Вы можете сконструировать свой праздник сами, заполнить его любимыми программами и артистами!
          </p>
          <ul className="text-left max-w-2xl mx-auto space-y-3">
            <li className="flex items-start">
              <span className="text-yellow-300 mr-2">✓</span>
              <span>Аренда лофта от 3-х часов и более</span>
            </li>
            <li className="flex items-start">
              <span className="text-yellow-300 mr-2">✓</span>
              <span>Сопровождающие ведущие на все мероприятие (минимум 2 часа)</span>
            </li>
            <li className="flex items-start">
              <span className="text-yellow-300 mr-2">✓</span>
              <span>Конкурсная тематическая программа - всегда разная!</span>
            </li>
            <li className="flex items-start">
              <span className="text-yellow-300 mr-2">✓</span>
              <span>Шоу и челленджи на выбор: научное шоу, крио-мороженое, серебряное шоу и многое другое</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
