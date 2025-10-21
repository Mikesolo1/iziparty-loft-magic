import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import gallery7 from "@/assets/gallery-7.jpg";

const galleryImages = [
  { src: gallery1, alt: "Счастливые дети на празднике в Изи Пати" },
  { src: gallery2, alt: "Детский праздник в лофте Изи Пати" },
  { src: gallery3, alt: "Аниматоры и дети на празднике" },
  { src: gallery4, alt: "Веселые конкурсы для детей" },
  { src: gallery5, alt: "Игровая зона в лофте" },
  { src: gallery6, alt: "Праздничное оформление" },
  { src: gallery7, alt: "Дети на мероприятии" },
];

export const Gallery = () => {
  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Изи Пати - Лофт- пространство детских праздников
        </h2>
        <p className="text-center text-xl text-muted-foreground mb-16">
          и мероприятий
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 aspect-square"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
