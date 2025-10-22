import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Gallery } from "@/components/Gallery";
import { Pricing } from "@/components/Pricing";
import { Interior } from "@/components/Interior";
import { ProgramIncludes } from "@/components/ProgramIncludes";
import { Testimonials } from "@/components/Testimonials";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Features />
      <Gallery />
      <Pricing />
      <Interior />
      <ProgramIncludes />
      <Testimonials />
      <ContactForm />
      <Footer />
    </main>
  );
};

export default Index;
