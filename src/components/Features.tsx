import { Sparkles, Heart, Shield, Cake, Clock, PartyPopper } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Праздник без забот",
    description: "От Вас только желание - остальное мы организуем!",
    color: "text-yellow-500"
  },
  {
    icon: Heart,
    title: "Уникальность",
    description: "Индивидуальные сценарии - такой праздник будет только у Вас!",
    color: "text-pink-500"
  },
  {
    icon: PartyPopper,
    title: "Новые костюмы",
    description: "Яркие костюмы аниматоров на любой вкус",
    color: "text-purple-500"
  },
  {
    icon: Shield,
    title: "Безопасность",
    description: "Просторное, светлое и безопасное помещение в центре города",
    color: "text-blue-500"
  },
  {
    icon: Cake,
    title: "Банкет и кэнди-бар",
    description: "Красивая сервировка стола входит во все пакеты",
    color: "text-orange-500"
  },
  {
    icon: Clock,
    title: "Продуманный тайминг",
    description: "Активности распределены так, чтобы дети не уставали",
    color: "text-green-500"
  }
];

export const Features = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Почему стоит организовать праздник
        </h2>
        <p className="text-center text-2xl mb-16 text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent font-bold">
          в Изи Пати
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-card rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-border"
            >
              <feature.icon className={`h-12 w-12 ${feature.color} mb-4 group-hover:scale-110 transition-transform duration-300`} />
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
