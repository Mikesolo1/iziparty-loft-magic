import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Анна О.",
    text: "Праздновали день рождения ребенка. Остались очень довольны! Нам была предложена замечательная развлекательная программа для деток. Весело было всем! Даже взрослые не остались без внимания. Особенно хочется отметить чистоту, порядок и безопасность игровой зоны.",
    rating: 5,
    avatar: "https://api.dicebear.com/7.x/initials/svg?seed=Анна О",
  },
  {
    name: "Виктория Борисовская",
    text: "Невероятно приятное впечатление осталось не только у нас, но и у всех гостей. Девушка-аниматор провела все три часа в контакте с детками, удивила разнообразная программа с конкурсами. Дринк-пати понравилась всем от 3-х лет до взрослых. У вас продумано все до мелочей!",
    rating: 5,
    avatar: "https://api.dicebear.com/7.x/initials/svg?seed=Виктория Б",
  },
  {
    name: "Виктория Теплякова",
    text: "Прекрасная локация для детского праздника, большой выбор программ и аниматоров, цены в сравнении с другими заведениями заметно радуют. Посуду всю предоставили, помогли накрыть на стол, напоили вкусным кофе. Отзывчивый персонал. В восторге и дети и взрослые.",
    rating: 5,
    avatar: "https://api.dicebear.com/7.x/initials/svg?seed=Виктория Т",
  },
  {
    name: "Анна Купавская",
    text: "Хочу выразить огромную благодарность за организацию нашего праздника. Все прошло просто великолепно! Красиво сервировали стол, отличное музыкальное сопровождение, оформление шарами - восторг! Чисто, уютно, куча разных игрушек, большое помещение и очень заботливые люди работают.",
    rating: 5,
    avatar: "https://api.dicebear.com/7.x/initials/svg?seed=Анна К",
  },
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-muted to-background">
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
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 p-1"
                />
                <div>
                  <p className="font-bold text-lg text-primary">{testimonial.name}</p>
                  <div className="flex items-center mt-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {testimonial.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
