import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

interface HeroSectionProps {
  onCTAClick: () => void;
}

export const HeroSection = ({ onCTAClick }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center hero-bg-meditation overflow-hidden px-4 py-20">
      {/* Decorative glow elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/60 border border-primary/40 mb-8 backdrop-blur-sm">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm text-primary font-medium tracking-wide">Sistema Único de Limpieza en Capas</span>
        </div>

        {/* Main Headline - Bebas Neue */}
        <h1 className="font-bebas leading-none mb-4">
          <span className="block text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-foreground tracking-wide">
            CUADERNO DE SANACIÓN
          </span>
          <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-gradient-gold tracking-wider mt-2">
            CON HO'OPONOPONO
          </span>
        </h1>

        {/* Emotional Question */}
        <p className="text-xl md:text-2xl lg:text-3xl text-primary font-medium mt-8 mb-4">
          ¿Hay algo dentro de ti que pide ser liberado?
        </p>

        {/* Short context line */}
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
          No estás roto/a. Solo hay memorias que piden ser sanadas.
        </p>

        {/* Product Mockup Placeholder */}
        <div className="mb-12">
          <div className="w-72 h-96 md:w-80 md:h-[28rem] mx-auto bg-secondary/40 border-2 border-primary/30 rounded-xl flex items-center justify-center shadow-gold backdrop-blur-sm">
            <div className="text-center p-8">
              <Sparkles className="w-16 h-16 text-primary mx-auto mb-6 lotus-glow" />
              <p className="text-foreground font-medium text-lg">Cuaderno de Sanación</p>
              <p className="text-primary text-sm mt-2">con Ho'oponopono</p>
              <p className="text-muted-foreground text-xs mt-4">[Imagen del Ebook]</p>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <Button
          onClick={onCTAClick}
          size="lg"
          className="text-lg md:text-xl px-10 md:px-14 py-7 md:py-8 gradient-gold text-primary-foreground font-bold shadow-gold hover:opacity-90 transition-all duration-300 hover:scale-105"
        >
          QUIERO SANAR Y LIBERAR MI CORAZÓN
        </Button>

        <p className="text-muted-foreground text-sm mt-6">
          ⚡ Acceso inmediato después del pago
        </p>
      </div>
    </section>
  );
};
