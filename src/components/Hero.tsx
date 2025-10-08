import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import heroImage from "@/assets/hero-party.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-secondary/80 to-accent/90" />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 animate-fade-in">
          Уникальный праздник для
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-300">
            Вашего ребенка
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
          Современный лофт для детских праздников от 1 до 18 лет
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button 
            size="lg" 
            className="text-lg px-8 py-6 bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Узнать стоимость
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="text-lg px-8 py-6 bg-white/20 backdrop-blur-sm text-white border-2 border-white hover:bg-white hover:text-primary rounded-full font-bold transition-all duration-300"
          >
            <Phone className="mr-2 h-5 w-5" />
            +7 928 960 69 29
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
            <div className="text-4xl font-bold text-yellow-300 mb-2">1-18</div>
            <div className="text-sm text-white">лет</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
            <div className="text-4xl font-bold text-pink-300 mb-2">100</div>
            <div className="text-sm text-white">кв.м</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
            <div className="text-4xl font-bold text-purple-300 mb-2">40</div>
            <div className="text-sm text-white">человек</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
            <div className="text-4xl font-bold text-orange-300 mb-2">15</div>
            <div className="text-sm text-white">лет опыта</div>
          </div>
        </div>
      </div>
    </section>
  );
};
