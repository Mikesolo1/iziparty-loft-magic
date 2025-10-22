import interior1 from "@/assets/interior-1.jpg";
import interior2 from "@/assets/interior-2.jpg";
import interior3 from "@/assets/interior-3.jpg";
import interior4 from "@/assets/interior-4.jpg";
import interior5 from "@/assets/interior-5.jpg";
import interior6 from "@/assets/interior-6.jpg";
import interior7 from "@/assets/interior-7.jpg";
import interior8 from "@/assets/interior-8.jpg";
import interior9 from "@/assets/interior-9.jpg";
import interior10 from "@/assets/interior-10.jpg";

const interiorImages = [
  { src: interior1, alt: "Яркое шоу в лофте Изи Пати", span: "col-span-2 row-span-2" },
  { src: interior2, alt: "Профессиональные аниматоры в костюмах", span: "col-span-1 row-span-1" },
  { src: interior3, alt: "Дизайнерское освещение зала", span: "col-span-1 row-span-1" },
  { src: interior4, alt: "Театральное представление для детей", span: "col-span-2 row-span-1" },
  { src: interior5, alt: "Детская игровая зона", span: "col-span-1 row-span-1" },
  { src: interior6, alt: "Праздничный декор и сервировка", span: "col-span-1 row-span-2" },
  { src: interior7, alt: "Фотозона с шарами", span: "col-span-1 row-span-1" },
  { src: interior8, alt: "Готовый зал для праздника", span: "col-span-2 row-span-1" },
  { src: interior9, alt: "Просторное помещение лофта", span: "col-span-1 row-span-1" },
  { src: interior10, alt: "Атмосфера праздника с подсветкой", span: "col-span-1 row-span-1" },
];

export const Interior = () => {
  return (
    <section id="interior" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Интерьер
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Современное лофт-пространство с яркой атмосферой для незабываемых праздников
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] gap-4">
          {interiorImages.map((image, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 ${image.span}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white text-sm font-medium">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
