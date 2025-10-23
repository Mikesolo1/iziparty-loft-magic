import feature1 from "@/assets/feature-1.png";
import feature2 from "@/assets/feature-2.png";
import feature3 from "@/assets/feature-3.png";
import feature4 from "@/assets/feature-4.png";
import feature5 from "@/assets/feature-5.png";
import feature6 from "@/assets/feature-6.png";
import patternBg from "@/assets/pattern-background.png";

const features = [
  {
    image: feature1,
    title: "Праздник без забот",
    description: "От Вас только желание - остальное мы организуем!",
  },
  {
    image: feature2,
    title: "Уникальность",
    description: "Индивидуальные сценарии - такой праздник будет только у Вас!",
  },
  {
    image: feature3,
    title: "Новые костюмы",
    description: "Яркие костюмы аниматоров на любой вкус",
  },
  {
    image: feature4,
    title: "Безопасность",
    description: "Просторное, светлое и безопасное помещение в центре города",
  },
  {
    image: feature5,
    title: "Банкет и кэнди-бар",
    description: "Красивая сервировка стола входит во все пакеты",
  },
  {
    image: feature6,
    title: "Продуманный тайминг",
    description: "Активности распределены так, чтобы дети не уставали",
  }
];

export const Features = () => {
  return (
    <section id="features" className="py-20 bg-gradient-to-b from-background to-muted relative" style={{ backgroundImage: `url(${patternBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          7 причин чтобы устроить праздник 
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
              <img 
                src={feature.image} 
                alt={feature.title}
                className="h-32 w-32 mb-4 group-hover:scale-110 transition-transform duration-300 object-contain"
              />
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
