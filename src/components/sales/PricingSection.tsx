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
    <section className="py-20 px-4 bg-secondary" id="pricing">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Oferta Especial por <span className="text-gradient-gold">Tiempo Limitado</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </div>

        {/* Pricing Card */}
        <div className="bg-card rounded-3xl border-2 border-primary shadow-spiritual overflow-hidden">
          {/* Header */}
          <div className="gradient-gold p-6 text-center">
            <Sparkles className="w-10 h-10 text-primary-foreground mx-auto mb-3" />
            <h3 className="text-2xl font-serif font-bold text-primary-foreground">
              Cuaderno de Sanación + 8 Bonus
            </h3>
          </div>

          {/* Content */}
          <div className="p-8">
            {/* Price */}
            <div className="text-center mb-8">
              <p className="text-muted-foreground mb-2">De <span className="line-through">$49.90 USD</span></p>
              <div className="flex items-center justify-center gap-3">
                <span className="text-6xl font-bold text-primary">$9.90</span>
                <span className="text-foreground text-lg">USD</span>
              </div>
              <p className="text-sm text-primary mt-2">¡Ahorra más del 80%!</p>
            </div>

            {/* What's included */}
            <div className="space-y-3 mb-8">
              {included.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary flex items-center justify-center mt-0.5">
                    <Check className="w-3 h-3 text-primary-foreground" />
                  </div>
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <Button
              onClick={onCTAClick}
              size="lg"
              className="w-full text-lg py-7 gradient-gold text-primary-foreground font-bold shadow-gold hover:opacity-90 transition-all duration-300"
            >
              SÍ, QUIERO COMENZAR MI SANACIÓN
            </Button>

            {/* Trust badges */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6 text-muted-foreground text-sm">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-primary" />
                <span>Pago 100% Seguro</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-primary" />
                <span>Acceso Inmediato</span>
              </div>
            </div>
          </div>
        </div>

        {/* Urgency */}
        <div className="text-center mt-8">
          <p className="text-muted-foreground">
            ⚠️ Este precio especial está disponible solo por tiempo limitado.
            <br />
            <span className="text-primary font-medium">No sabemos hasta cuándo podremos mantenerlo.</span>
          </p>
        </div>
      </div>
    </section>
  );
};
