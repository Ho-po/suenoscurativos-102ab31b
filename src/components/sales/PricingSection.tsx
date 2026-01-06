import { Button } from "@/components/ui/button";
import { Check, Sparkles, Shield, Zap } from "lucide-react";

interface PricingSectionProps {
  onCTAClick: () => void;
}

export const PricingSection = ({ onCTAClick }: PricingSectionProps) => {
  const included = [
    "Cuaderno de Sanación con Ho'oponopono (80+ páginas)",
    "Manual de Conexión con los Arcángeles",
    "Guía de Amor Propio con Ho'oponopono",
    "Decodificador Emocional con Palabras Gatillo",
    "Cuaderno de Sanación del Linaje Familiar",
    "Mapa de Limpieza Energética del Hogar",
    "Caja de Oráculos - Palabras que Sanan",
    "Diario de 21 Días de Limpieza y Autocuidado",
    "Meditaciones Guiadas Ho'oponopono (Audio)"
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 bg-secondary" id="pricing">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-foreground mb-3 sm:mb-4">
            Oferta Especial por <span className="text-gradient-gold">Tiempo Limitado</span>
          </h2>
          <div className="w-16 sm:w-20 md:w-24 h-1 bg-primary mx-auto rounded-full" />
        </div>

        {/* Pricing Card */}
        <div className="bg-card rounded-2xl sm:rounded-3xl border-2 border-primary shadow-spiritual overflow-hidden">
          {/* Header */}
          <div className="gradient-gold p-4 sm:p-6 text-center">
            <Sparkles className="w-8 h-8 sm:w-10 sm:h-10 text-primary-foreground mx-auto mb-2 sm:mb-3" />
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-primary-foreground">
              Cuaderno de Sanación + 8 Bonus
            </h3>
          </div>

          {/* Content */}
          <div className="p-5 sm:p-6 md:p-8">
            {/* Price */}
            <div className="text-center mb-6 sm:mb-8">
              <p className="text-sm sm:text-base text-muted-foreground mb-2">De <span className="line-through">$49.90 USD</span></p>
              <div className="flex items-center justify-center gap-2 sm:gap-3">
                <span className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary">$9.90</span>
                <span className="text-base sm:text-lg text-foreground">USD</span>
              </div>
              <p className="text-xs sm:text-sm text-primary mt-2">¡Ahorra más del 80%!</p>
            </div>

            {/* What's included */}
            <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
              {included.map((item, index) => (
                <div key={index} className="flex items-start gap-2 sm:gap-3">
                  <div className="flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-primary flex items-center justify-center mt-0.5">
                    <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-primary-foreground" />
                  </div>
                  <span className="text-sm sm:text-base text-foreground">{item}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <Button
              onClick={onCTAClick}
              size="lg"
              className="w-full text-sm sm:text-base md:text-lg py-5 sm:py-6 md:py-7 bg-green-600 hover:bg-green-700 text-white font-bold shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse-cta"
            >
              SÍ, QUIERO COMENZAR MI SANACIÓN
            </Button>

            {/* Trust badges */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mt-5 sm:mt-6 text-xs sm:text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Shield className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" />
                <span>Pago 100% Seguro</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" />
                <span>Acceso Inmediato</span>
              </div>
            </div>
          </div>
        </div>

        {/* Urgency */}
        <div className="text-center mt-6 sm:mt-8">
          <p className="text-sm sm:text-base text-muted-foreground px-2">
            ⚠️ Este precio especial está disponible solo por tiempo limitado.
            <br />
            <span className="text-primary font-medium">No sabemos hasta cuándo podremos mantenerlo.</span>
          </p>
        </div>
      </div>
    </section>
  );
};
