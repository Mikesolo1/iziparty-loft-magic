import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Gallery } from "@/components/Gallery";
import { Services } from "@/components/Services";
import { ProgramIncludes } from "@/components/ProgramIncludes";
import { Testimonials } from "@/components/Testimonials";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <Gallery />
      <Services />
      <ProgramIncludes />
      <Testimonials />
      <ContactForm />
      <Footer />
    </main>
  );
};

export default Index;
