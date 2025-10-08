import { Clock, Users, Sparkles, PartyPopper } from "lucide-react";

export const ProgramIncludes = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-muted to-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Что будет входить в Вашу программу
        </h2>
        <p className="text-center text-xl text-muted-foreground mb-12">
          Сценарий праздника выстраивается под интересы ребенка или подростка
        </p>
        <p className="text-center text-lg mb-16 max-w-3xl mx-auto">
          Вы можете сконструировать свой праздник сами, заполнить его любимыми программами и артистами!
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          <div className="bg-card rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-border">
            <Clock className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-2xl font-bold mb-4">Аренда лофта</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>Аренда лофта от 3-х часов и более</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>Каждый последующий час со скидкой</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>В аренду входит: звуковое и световое оборудование, фотозона, игровая площадка с лабиринтом, посуда, приборы, скатерти, кофе/чай, уборка</span>
              </li>
            </ul>
          </div>

          <div className="bg-card rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-border">
            <Users className="h-12 w-12 text-secondary mb-4" />
            <h3 className="text-2xl font-bold mb-4">Сопровождающие ведущие</h3>
            <p className="text-muted-foreground mb-4">
              Сопровождающие ведущие на все мероприятие, минимально 2 часа
            </p>
            <p className="text-muted-foreground">
              Сопровождают детей в играх, подбирают программу под их интересы и настроение
            </p>
          </div>

          <div className="bg-card rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-border">
            <Sparkles className="h-12 w-12 text-accent mb-4" />
            <h3 className="text-2xl font-bold mb-4">Конкурсная тематическая программа</h3>
            <p className="text-muted-foreground mb-4 font-bold">Всегда разная!</p>
            <p className="text-muted-foreground mb-4">
              У нас более ста тематических программ, персонажей и концепций!
            </p>
            <p className="text-muted-foreground mb-4">
              Если Вы были в лофт-пространстве Изи Пати на дне рождения друзей, заказали такую же тему для себя или своего ребенка - у Вас будет совсем другое мероприятие! Мы не работаем по шаблону, мы создаем уникальные праздники для каждого!
            </p>
            <p className="text-muted-foreground">
              Тематическая программа всегда насыщенная, запас конкурсов, челленджей и реквизита очень разнообразный.
            </p>
          </div>

          <div className="bg-card rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-border">
            <PartyPopper className="h-12 w-12 text-pink-500 mb-4" />
            <h3 className="text-2xl font-bold mb-4">Шоу и челленджи на выбор</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start">
                <span className="text-primary mr-2">★</span>
                <span>Научное шоу</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">★</span>
                <span>Крио мороженое</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">★</span>
                <span>Артисты оригинального жанра</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">★</span>
                <span>Профессиональный фотограф</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">★</span>
                <span>Трендовые челленджи</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">★</span>
                <span>Гирлянда из шаров</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">★</span>
                <span>Тематическое оформление</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">★</span>
                <span>Серебряное шоу</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">★</span>
                <span>Неоновое шоу</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">★</span>
                <span>Шоу надувных подушек</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">★</span>
                <span>Шоу мыльные пузыри</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-primary to-accent rounded-3xl p-8 text-center text-primary-foreground max-w-3xl mx-auto">
          <p className="text-xl font-bold mb-4">
            Выступление артистов оригинального жанра
          </p>
          <p className="text-lg mb-2">- аренда помещения и пакетные праздничные предложения</p>
          <p className="text-lg mb-2">- проводим подростковые вечеринки и выпускные</p>
          <p className="text-lg mb-6">- организуем корпоративы, семинары, бранчи и клубные встречи</p>
          <p className="text-sm bg-yellow-300/20 p-4 rounded-lg font-bold">
            Бронирование праздников минимум за 5 дней до мероприятия
          </p>
        </div>
      </div>
    </section>
  );
};
