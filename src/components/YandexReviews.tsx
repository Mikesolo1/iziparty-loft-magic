import { Star } from "lucide-react";
import { Card } from "@/components/ui/card";

const reviews = [
  {
    id: 1,
    author: "Анна К.",
    date: "2 месяца назад",
    rating: 5,
    text: "Отмечали день рождения сына 7 лет. Все прошло на высшем уровне! Организаторы профессионалы своего дела. Дети были в восторге от программы и аниматоров. Лофт очень красивый, современный. Спасибо огромное!",
    avatar: "АК"
  },
  {
    id: 2,
    author: "Мария С.",
    date: "3 недели назад",
    rating: 5,
    text: "Проводили праздник для дочки 5 лет. Очень понравилось! Отличная локация, профессиональные аниматоры, вкусная еда. Дети были заняты все время, родители отдыхали. Рекомендую от всей души!",
    avatar: "МС"
  },
  {
    id: 3,
    author: "Дмитрий П.",
    date: "1 месяц назад",
    rating: 5,
    text: "Супер место для детского праздника! Современный интерьер, отличная программа, внимательные организаторы. Детям очень понравилось. Будем обращаться еще!",
    avatar: "ДП"
  },
  {
    id: 4,
    author: "Елена В.",
    date: "2 недели назад",
    rating: 5,
    text: "Отличная организация праздника! Все на высшем уровне - от декора до программы. Аниматоры профессионалы, дети в восторге. Помещение очень красивое и просторное. Спасибо за незабываемый праздник!",
    avatar: "ЕВ"
  },
  {
    id: 5,
    author: "Ирина Л.",
    date: "1 неделю назад",
    rating: 5,
    text: "Празднуем здесь уже второй год подряд! Всегда все отлично организовано. Дети счастливы, родители довольны. Лофт очень стильный, аниматоры креативные. Однозначно рекомендую!",
    avatar: "ИЛ"
  },
  {
    id: 6,
    author: "Александр М.",
    date: "3 дня назад",
    rating: 5,
    text: "Отмечали день рождения дочки. Все прошло великолепно! Современное пространство, качественная программа, вкусное меню. Дети были в полном восторге от праздника. Спасибо команде Изи Пати!",
    avatar: "АМ"
  }
];

export const YandexReviews = () => {
  const averageRating = 5.0;
  const totalReviews = 156;

  return (
    <section id="testimonials" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Отзывы наших клиентов
          </h2>
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-2xl font-bold">{averageRating}</span>
          </div>
          <p className="text-muted-foreground">{totalReviews} отзывов на Яндекс Картах</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Reviews Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="bg-background rounded-2xl p-6 shadow-lg border">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold">Отзывы</h3>
                <a 
                  href="https://yandex.ru/maps/org/loft_izi_pati/27209810380/reviews/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline"
                >
                  Все отзывы на Яндекс Картах →
                </a>
              </div>
              
              <div className="space-y-6 max-h-[600px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-primary/20 scrollbar-track-transparent">
                {reviews.map((review) => (
                  <Card key={review.id} className="p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center text-white font-bold">
                          {review.avatar}
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-foreground">{review.author}</h4>
                          <span className="text-sm text-muted-foreground">{review.date}</span>
                        </div>
                        <div className="flex items-center gap-1 mb-3">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                        <p className="text-muted-foreground leading-relaxed">{review.text}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Map Column */}
          <div className="lg:col-span-1">
            <div className="bg-background rounded-2xl p-6 shadow-lg border sticky top-24">
              <h3 className="text-xl font-bold mb-4">Лофт "Изи Пати"</h3>
              
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="font-bold text-lg">{averageRating}</span>
                </div>
                <p className="text-sm text-muted-foreground">{totalReviews} отзывов</p>
              </div>

              <div className="space-y-3 mb-4 text-sm">
                <div>
                  <p className="text-muted-foreground">Адрес</p>
                  <p className="font-medium">г. Ростов-на-Дону</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Телефон</p>
                  <a href="tel:+79289606929" className="font-medium text-primary hover:underline">
                    +7 928 960 69 29
                  </a>
                </div>
                <div>
                  <p className="text-muted-foreground">Режим работы</p>
                  <p className="font-medium">Ежедневно: 9:00 - 21:00</p>
                </div>
              </div>

              {/* Yandex Map Embed */}
              <div className="rounded-xl overflow-hidden shadow-md mb-4">
                <iframe
                  src="https://yandex.ru/map-widget/v1/?um=constructor%3A6e8b5d1e8c9f8a1c8b5d1e8c9f8a1c8b&amp;source=constructor"
                  width="100%"
                  height="300"
                  frameBorder="0"
                  className="w-full"
                  title="Карта Яндекс"
                ></iframe>
              </div>

              <a
                href="https://yandex.ru/maps/org/loft_izi_pati/27209810380/"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white font-semibold py-3 rounded-lg transition-all"
              >
                Открыть на Яндекс Картах
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
