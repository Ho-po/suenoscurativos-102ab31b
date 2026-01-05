import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

interface HeroSectionProps {
  onCTAClick: () => void;
}

export const HeroSection = ({ onCTAClick }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center gradient-hero overflow-hidden px-4 py-16">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-32 right-10 w-48 h-48 bg-accent/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-primary/30 mb-8">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm text-primary font-medium">Sistema Único de Limpieza Emocional</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 leading-tight">
          <span className="text-gradient-gold">CUADERNO DE SANACIÓN</span>
          <br />
          <span className="text-foreground">CON HO'OPONOPONO</span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-primary mb-8 font-medium">
          ¿Hay algo dentro de ti que pide ser liberado?
        </p>

        {/* Emotional Story */}
        <div className="max-w-2xl mx-auto mb-10">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Tal vez no lo dices en voz alta... pero lo sientes. Ese peso que cargas en el pecho.
            Las noches en que el silencio duele. Los recuerdos que vuelven sin permiso.
            Las relaciones que te drenan. La sensación de que algo está bloqueando tu camino.
          </p>
          <p className="text-lg text-foreground mt-4 font-medium">
            No estás roto/a. Solo hay memorias que piden ser sanadas.
          </p>
        </div>

        {/* Product Placeholder */}
        <div className="mb-10">
          <div className="w-64 h-80 mx-auto bg-secondary/50 border-2 border-primary/30 rounded-lg flex items-center justify-center shadow-spiritual">
            <div className="text-center p-6">
              <Sparkles className="w-12 h-12 text-primary mx-auto mb-4 lotus-glow" />
              <p className="text-muted-foreground text-sm">Imagen del Ebook</p>
              <p className="text-primary text-xs mt-1">Cuaderno de Sanación</p>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <Button
          onClick={onCTAClick}
          size="lg"
          className="text-lg px-10 py-7 gradient-gold text-primary-foreground font-bold shadow-gold hover:opacity-90 transition-all duration-300 hover:scale-105"
        >
          QUIERO SANAR Y LIBERAR MI CORAZÓN
        </Button>

        <p className="text-muted-foreground text-sm mt-4">
          ⚡ Acceso inmediato después del pago
        </p>
      </div>
    </section>
  );
};
