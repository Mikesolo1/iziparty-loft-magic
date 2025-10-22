import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import interior1 from "@/assets/interior-1.jpg";
import interior2 from "@/assets/interior-2.jpg";
import interior3 from "@/assets/interior-3.jpg";
import interior4 from "@/assets/interior-4.jpg";
import interior5 from "@/assets/interior-5.jpg";
import interior6 from "@/assets/interior-6.jpg";
import interior7 from "@/assets/interior-7.jpg";
import interior8 from "@/assets/interior-8.jpg";
import interior9 from "@/assets/interior-9.jpg";

const interiorImages = [
  { src: interior1, alt: "Праздничная фотозона с воздушными шарами" },
  { src: interior2, alt: "Дизайнерское освещение лофта" },
  { src: interior3, alt: "Яркое оформление с неоновой надписью" },
  { src: interior4, alt: "Детская игровая зона с лабиринтом" },
  { src: interior5, alt: "Зал с праздничным декором" },
  { src: interior6, alt: "Готовый зал для праздника" },
  { src: interior7, alt: "Сервированный стол для праздника" },
  { src: interior8, alt: "Просторное помещение лофта с игровой зоной" },
  { src: interior9, alt: "Атмосфера праздника с подсветкой" },
];

export const Interior = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openGallery = (index: number) => {
    setSelectedImage(index);
  };

  const closeGallery = () => {
    setSelectedImage(null);
  };

  const goToPrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + interiorImages.length) % interiorImages.length);
    }
  };

  const goToNext = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % interiorImages.length);
    }
  };

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

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {interiorImages.map((image, index) => (
            <div
              key={index}
              onClick={() => openGallery(index)}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer aspect-square"
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

      {/* Gallery Dialog */}
      <Dialog open={selectedImage !== null} onOpenChange={closeGallery}>
        <DialogContent className="max-w-7xl w-full h-[90vh] p-0 bg-black/95">
          <button
            onClick={closeGallery}
            className="absolute top-4 right-4 z-50 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
          >
            <X className="h-6 w-6 text-white" />
          </button>

          {selectedImage !== null && (
            <div className="relative w-full h-full flex items-center justify-center p-4">
              <button
                onClick={goToPrevious}
                className="absolute left-4 z-50 p-3 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
              >
                <ChevronLeft className="h-8 w-8 text-white" />
              </button>

              <img
                src={interiorImages[selectedImage].src}
                alt={interiorImages[selectedImage].alt}
                className="max-w-full max-h-full object-contain"
              />

              <button
                onClick={goToNext}
                className="absolute right-4 z-50 p-3 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
              >
                <ChevronRight className="h-8 w-8 text-white" />
              </button>

              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-black/70 px-6 py-3 rounded-full">
                <p className="text-white text-sm font-medium">
                  {selectedImage + 1} / {interiorImages.length}
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};
