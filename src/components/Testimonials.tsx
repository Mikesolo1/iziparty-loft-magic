import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Анна О.",
    text: "Праздновали день рождения ребенка. Остались очень довольны! Замечательная развлекательная программа для деток. Весело было всем! Особенно хочется отметить чистоту, порядок и безопасность игровой зоны. Очень рекомендую Изи Пати!",
    rating: 5
  },
  {
    name: "Виктория Борисовская",
    text: "Невероятно приятное впечатление осталось не только у нас, но и у всех гостей. Девушка-аниматор провела все три часа в контакте с детками, удивила разнообразная программа с конкурсами. Кофе, чай, сервировка стола - у вас продумано все до мелочей! К вам хочется вернуться!!!",
    rating: 5
  },
  {
    name: "Виктория Теплякова",
    text: "Прекрасная локация для детского праздника, большой выбор программ и аниматоров, цены в сравнении с другими заведениями заметно радуют. Отзывчивый персонал. Прекрасно провели время, в восторге и дети и взрослые.",
    rating: 5
  },
  {
    name: "Анна Купавская",
    text: "Хочу выразить огромную благодарность за организацию нашего праздника! Все прошло просто великолепно, красиво сервировали стол, отличное музыкальное сопровождение, оформление шарами просто восторг! Если вы не знаете, где организовать праздник вашему ребёнку, однозначно иди в Изи Пати!",
    rating: 5
  }
];

export const Testimonials = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-muted to-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Вы еще думаете?
        </h2>
        <p className="text-center text-xl text-muted-foreground mb-16">
          Читайте отзывы счастливых родителей
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-border"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {testimonial.text}
              </p>
              <p className="font-bold text-lg text-primary">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
