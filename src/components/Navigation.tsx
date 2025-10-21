import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";
import { CallbackDialog } from "./CallbackDialog";
import { PriceDialog } from "./PriceDialog";

export const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: "Преимущества", id: "features" },
    { label: "Галерея", id: "gallery" },
    { label: "Тарифы", id: "pricing" },
    { label: "Программа", id: "program" },
    { label: "Отзывы", id: "testimonials" },
    { label: "Контакты", id: "contacts" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center hover-scale"
          >
            <img src={logo} alt="ИЗИ ПАТИ" className="h-16 w-16 object-contain" />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-foreground/80 hover:text-primary transition-colors font-medium"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:+79289606929" className="flex items-center gap-2 text-foreground/80 hover:text-primary transition-colors">
              <Phone className="h-4 w-4" />
              <span className="font-medium">+7 928 960 69 29</span>
            </a>
            <CallbackDialog>
              <Button variant="outline">Обратный звонок</Button>
            </CallbackDialog>
            <PriceDialog>
              <Button className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600">
                Узнать стоимость
              </Button>
            </PriceDialog>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-foreground"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left text-foreground/80 hover:text-primary transition-colors font-medium py-2"
                >
                  {item.label}
                </button>
              ))}
              <a 
                href="tel:+79289606929" 
                className="flex items-center gap-2 text-foreground/80 hover:text-primary transition-colors py-2"
              >
                <Phone className="h-4 w-4" />
                <span className="font-medium">+7 928 960 69 29</span>
              </a>
              <CallbackDialog>
                <Button variant="outline" className="w-full">Обратный звонок</Button>
              </CallbackDialog>
              <PriceDialog>
                <Button className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600">
                  Узнать стоимость
                </Button>
              </PriceDialog>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
