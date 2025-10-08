import { Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-lg mb-2">
            © {new Date().getFullYear()} Изи Пати - Лофт детских праздников
          </p>
          <p className="flex items-center justify-center gap-2 text-sm opacity-80">
            Сделано с <Heart className="h-4 w-4 text-red-500 fill-red-500" /> для детей и родителей
          </p>
        </div>
      </div>
    </footer>
  );
};
