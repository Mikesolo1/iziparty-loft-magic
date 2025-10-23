import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { PriceDialog } from "./PriceDialog";
import patternBg from "@/assets/pattern-background.png";

export const Pricing = () => {
  const mainPackages = [
    {
      name: "ОптиМакс",
      duration: "2,5 часа + 30 минут на сбор гостей",
      features: [
        "Один ведущий/аниматор (сопровождение всего мероприятия)",
        "Помощник аниматора (встречает гостей, помогает с реквизитом)",
        "Тематическая программа 60 минут",
        "Блеск тату каждому ребенку",
        "WOW поздравление именинника с выносом торта",
        "Серебряное шоу",
        "Фотозона с серебряными пайетками",
        "Гирлянда из шаров на круглой стойке",
        "Электронный пригласительный",
      ],
    },
    {
      name: "Суперкласс",
      duration: "3 часа + 30 минут на сбор гостей",
      features: [
        "Два ведущих/аниматора (сопровождение всего мероприятия)",
        "Тематическая программа 70 минут",
        "Помощник/официант на всё мероприятие",
        "WOW поздравление именинника",
        "Селфи пати с ведущими",
        "Челлендж Дринк пати (угадай напиток)",
        "Блеск тату каждому ребенку",
        "Серебряное или неоновое шоу",
        "Фотозона с серебряными пайетками",
        "Гирлянда из шаров",
        "Электронный пригласительный",
      ],
      popular: true,
    },
    {
      name: "Грандиозный",
      duration: "4 часа + 30 минут на сбор гостей",
      features: [
        "Два ведущих/аниматора (сопровождение всего мероприятия)",
        "Тематическая программа 1 час 30 минут",
        "Помощник/официант на всё мероприятие",
        "Шоу на выбор: мыльные пузыри / крио мороженое / научное шоу",
        "WOW поздравление именинника",
        "Селфи пати с ведущими",
        "Челлендж Дринк пати",
        "Блеск тату каждому ребенку",
        "Серебряное или неоновое шоу",
        "Фотозона с серебряными пайетками",
        "Гирлянда из шаров",
        "Электронный пригласительный",
      ],
    },
  ];

  const weekdayPackages = [
    {
      name: "Пакет творческий",
      emoji: "🤠",
      duration: "2 часа + 30 минут",
      features: [
        "Один ведущий",
        "Мастер-класс на выбор (роспись магнитов, шипучие бомбочки, декор рамок, роспись копилок/шопперов, картины из песка, домашние опыты)",
        "Или игры: Мафия Пати / Игра Бункер (14+)",
        "WOW поздравление именинника",
        "Электронный пригласительный",
      ],
    },
    {
      name: "Пакет Лайт Плюс",
      emoji: "😍",
      duration: "3 часа + 30 минут",
      features: [
        "Один сопровождающий аниматор",
        "Тематическая программа 1 час",
        "WOW поздравление именинника",
        "На выбор: дискотека с мыльными пузырями или блеск тату",
        "Электронный пригласительный",
      ],
    },
    {
      name: "Пакет кулинарный Лайт",
      emoji: "🤪",
      duration: "2,5 часа + 30 минут",
      features: [
        "Один ведущий",
        "Кулинарное шоу (Адская кухня, Битва шефов)",
        "Темы: Ролл шоу / МилкШейкПати / Торт с фруктами",
        "WOW поздравление именинника",
        "Электронный пригласительный",
      ],
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-background to-muted/20 relative" style={{ backgroundImage: `url(${patternBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
            Выбирайте готовую программу
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Мы собрали для вас готовые решения для проведения детских дней рождения и мероприятий
          </p>
        </div>

        {/* Main Packages */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {mainPackages.map((pkg, index) => (
            <Card
              key={index}
              className={`relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${
                pkg.popular ? "border-primary shadow-lg scale-105" : ""
              }`}
            >
              {pkg.popular && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-1 text-sm font-bold rounded-bl-lg">
                  Популярный
                </div>
              )}
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold mb-2">{pkg.name}</CardTitle>
                <CardDescription className="text-base">{pkg.duration}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <PriceDialog>
                  <Button className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600">
                    Узнать цену
                  </Button>
                </PriceDialog>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Weekday Packages */}
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold mb-4">Пакеты буднего дня</h3>
          <p className="text-lg text-muted-foreground">До 7 детей</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {weekdayPackages.map((pkg, index) => (
            <Card
              key={index}
              className="overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              <CardHeader className="text-center pb-4">
                <div className="text-5xl mb-4">{pkg.emoji}</div>
                <CardTitle className="text-2xl font-bold mb-2">{pkg.name}</CardTitle>
                <CardDescription className="text-base">{pkg.duration}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <PriceDialog>
                  <Button className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600">
                    Узнать цену
                  </Button>
                </PriceDialog>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
