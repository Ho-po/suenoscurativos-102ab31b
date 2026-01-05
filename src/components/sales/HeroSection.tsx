import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

interface HeroSectionProps {
  onCTAClick: () => void;
}

export const HeroSection = ({ onCTAClick }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center hero-bg-meditation overflow-hidden px-4 py-12 sm:py-16 md:py-20">
      {/* Decorative glow elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-40 sm:w-60 md:w-80 h-40 sm:h-60 md:h-80 bg-accent/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto text-center px-2 sm:px-4">
        {/* Badge */}
        <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-secondary/60 border border-primary/40 mb-6 sm:mb-8 backdrop-blur-sm">
          <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
          <span className="text-xs sm:text-sm text-primary font-medium tracking-wide">Sistema Único de Limpieza en Capas</span>
        </div>

        {/* Main Headline - Bebas Neue - Mobile First */}
        <h1 className="font-bebas leading-none mb-4">
          <span className="block text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl text-foreground tracking-wide">
            CUADERNO DE SANACIÓN
          </span>
          <span className="block text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl text-gradient-gold tracking-wider mt-1 sm:mt-2">
            CON HO'OPONOPONO
          </span>
        </h1>

        {/* Emotional Question */}
        <p className="text-base sm:text-lg md:text-2xl lg:text-3xl text-primary font-medium mt-6 sm:mt-8 mb-3 sm:mb-4 px-2">
          ¿Hay algo dentro de ti que pide ser liberado?
        </p>

        {/* Short context line */}
        <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-8 sm:mb-10 md:mb-12 px-4">
          No estás roto/a. Solo hay memorias que piden ser sanadas.
        </p>

        {/* Product Mockup Placeholder */}
        <div className="mb-8 sm:mb-10 md:mb-12">
          <div className="w-56 h-72 sm:w-64 sm:h-80 md:w-72 md:h-96 lg:w-80 lg:h-[28rem] mx-auto bg-secondary/40 border-2 border-primary/30 rounded-xl flex items-center justify-center shadow-gold backdrop-blur-sm">
            <div className="text-center p-4 sm:p-6 md:p-8">
              <Sparkles className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 text-primary mx-auto mb-4 sm:mb-6 lotus-glow" />
              <p className="text-foreground font-medium text-sm sm:text-base md:text-lg">Cuaderno de Sanación</p>
              <p className="text-primary text-xs sm:text-sm mt-1 sm:mt-2">con Ho'oponopono</p>
              <p className="text-muted-foreground text-xs mt-3 sm:mt-4">[Imagen del Ebook]</p>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <Button
          onClick={onCTAClick}
          size="lg"
          className="text-sm sm:text-base md:text-lg lg:text-xl px-6 sm:px-8 md:px-10 lg:px-14 py-5 sm:py-6 md:py-7 lg:py-8 gradient-gold text-primary-foreground font-bold shadow-gold hover:opacity-90 transition-all duration-300 hover:scale-105 w-full sm:w-auto max-w-sm sm:max-w-none"
        >
          QUIERO SANAR Y LIBERAR MI CORAZÓN
        </Button>

        <p className="text-muted-foreground text-xs sm:text-sm mt-4 sm:mt-6">
          ⚡ Acceso inmediato después del pago
        </p>
      </div>
    </section>
  );
};
