import { Check, Headphones, Calendar } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";

export const OrderBumps = () => {
  const [bump1Selected, setBump1Selected] = useState(false);
  const [bump2Selected, setBump2Selected] = useState(false);

  return (
    <section className="py-16 px-4 bg-secondary">
      <div className="max-w-3xl mx-auto space-y-6">
        <div className="text-center mb-8">
          <p className="text-primary font-medium text-lg">¡Espera! Ofertas exclusivas solo en este momento</p>
        </div>

        {/* Order Bump 1 - Audios */}
        <div
          className={`bg-card rounded-2xl border-2 transition-all duration-300 overflow-hidden ${
            bump1Selected ? "border-primary shadow-gold" : "border-primary/30"
          }`}
        >
          <div className="gradient-gold px-6 py-3">
            <p className="text-primary-foreground font-bold text-sm uppercase tracking-wide">
              ⚡ Oferta Única - Agrega esto a tu pedido
            </p>
          </div>
          <div className="p-6">
            <div className="flex items-start gap-4">
              <Checkbox
                id="bump1"
                checked={bump1Selected}
                onCheckedChange={(checked) => setBump1Selected(checked as boolean)}
                className="mt-1 h-6 w-6 border-2 border-primary data-[state=checked]:bg-primary"
              />
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <Headphones className="w-8 h-8 text-primary" />
                  <div>
                    <h3 className="text-lg font-bold text-foreground">
                      Audios Exclusivos de Limpieza Ho'oponopono
                    </h3>
                    <p className="text-primary font-bold">Solo $4.90 USD</p>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm mb-4">
                  7 audios guiados de alta vibración para potenciar tu limpieza emocional. 
                  Incluye meditaciones para: abundancia, relaciones, perdón ancestral, 
                  sanación del niño interior, liberación de miedos, conexión con la fuente 
                  y limpieza nocturna profunda.
                </p>
                <div className="flex flex-wrap gap-3 text-sm">
                  <span className="flex items-center gap-1 text-muted-foreground">
                    <Check className="w-4 h-4 text-primary" /> Más de 2 horas de audio
                  </span>
                  <span className="flex items-center gap-1 text-muted-foreground">
                    <Check className="w-4 h-4 text-primary" /> Descarga inmediata
                  </span>
                  <span className="flex items-center gap-1 text-muted-foreground">
                    <Check className="w-4 h-4 text-primary" /> Acceso de por vida
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Order Bump 2 - Ritual 7 Días */}
        <div
          className={`bg-card rounded-2xl border-2 transition-all duration-300 overflow-hidden ${
            bump2Selected ? "border-primary shadow-gold" : "border-primary/30"
          }`}
        >
          <div className="gradient-gold px-6 py-3">
            <p className="text-primary-foreground font-bold text-sm uppercase tracking-wide">
              🌟 Recomendado - Completa tu transformación
            </p>
          </div>
          <div className="p-6">
            <div className="flex items-start gap-4">
              <Checkbox
                id="bump2"
                checked={bump2Selected}
                onCheckedChange={(checked) => setBump2Selected(checked as boolean)}
                className="mt-1 h-6 w-6 border-2 border-primary data-[state=checked]:bg-primary"
              />
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <Calendar className="w-8 h-8 text-primary" />
                  <div>
                    <h3 className="text-lg font-bold text-foreground">
                      Ritual Guiado de 7 Días Ho'oponopono
                    </h3>
                    <p className="text-primary font-bold">Solo $3.90 USD</p>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm mb-4">
                  La guía perfecta para tu primera semana de práctica. Cada día tiene un tema específico, 
                  un ejercicio de limpieza y una reflexión profunda. Día 1: Intención sagrada. Día 2: 
                  Limpieza del cuerpo. Día 3: Limpieza emocional. Día 4: Perdón. Día 5: Gratitud. 
                  Día 6: Abundancia. Día 7: Integración y renacimiento.
                </p>
                <div className="flex flex-wrap gap-3 text-sm">
                  <span className="flex items-center gap-1 text-muted-foreground">
                    <Check className="w-4 h-4 text-primary" /> Guía paso a paso
                  </span>
                  <span className="flex items-center gap-1 text-muted-foreground">
                    <Check className="w-4 h-4 text-primary" /> Ejercicios diarios
                  </span>
                  <span className="flex items-center gap-1 text-muted-foreground">
                    <Check className="w-4 h-4 text-primary" /> Afirmaciones incluidas
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
