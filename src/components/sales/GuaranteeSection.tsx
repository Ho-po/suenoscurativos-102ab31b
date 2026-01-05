import { Shield, Check } from "lucide-react";

export const GuaranteeSection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 bg-secondary">
      <div className="max-w-3xl mx-auto">
        <div className="bg-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 border-2 border-primary/30 shadow-spiritual">
          <div className="text-center">
            {/* Shield icon */}
            <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <Shield className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-primary" />
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-foreground mb-3 sm:mb-4">
              Garantía Incondicional de <span className="text-gradient-gold">7 Días</span>
            </h2>

            <div className="w-16 sm:w-20 md:w-24 h-1 bg-primary mx-auto rounded-full mb-6 sm:mb-8" />

            <p className="text-base sm:text-lg text-foreground leading-relaxed mb-4 sm:mb-6 px-2">
              Estamos tan seguros de que el Cuaderno de Sanación con Ho'oponopono 
              transformará tu vida, que te ofrecemos una garantía sin preguntas.
            </p>

            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6 sm:mb-8 px-2">
              Si dentro de los <span className="text-primary font-semibold">primeros 7 días</span> sientes 
              que este material no es para ti, simplemente escríbenos y te devolvemos 
              el 100% de tu inversión. Sin cuestionamientos, sin complicaciones.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-left">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-primary flex items-center justify-center">
                  <Check className="w-3 h-3 sm:w-4 sm:h-4 text-primary-foreground" />
                </div>
                <span className="text-sm sm:text-base text-foreground">100% de devolución</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-primary flex items-center justify-center">
                  <Check className="w-3 h-3 sm:w-4 sm:h-4 text-primary-foreground" />
                </div>
                <span className="text-sm sm:text-base text-foreground">Sin preguntas</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-primary flex items-center justify-center">
                  <Check className="w-3 h-3 sm:w-4 sm:h-4 text-primary-foreground" />
                </div>
                <span className="text-sm sm:text-base text-foreground">Proceso inmediato</span>
              </div>
            </div>

            <p className="text-primary font-medium mt-6 sm:mt-8 text-base sm:text-lg">
              El único riesgo es quedarte con el dolor que ya conoces.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
