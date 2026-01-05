import { Heart, Sparkles, Flower2 } from "lucide-react";

export const HoooponoponoExplainer = () => {
  const phrases = [
    { phrase: "Lo siento", meaning: "Reconozco que hay algo en mí que necesita sanar" },
    { phrase: "Perdóname", meaning: "Me libero y libero a los demás de la carga" },
    { phrase: "Gracias", meaning: "Agradezco la oportunidad de limpiar esta memoria" },
    { phrase: "Te amo", meaning: "Transmuto todo con la energía más poderosa: el amor" }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 gradient-hero">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <Flower2 className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-primary mx-auto mb-4 sm:mb-6 lotus-glow animate-float" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-foreground mb-3 sm:mb-4">
            ¿Qué es el Ho'oponopono?
          </h2>
          <div className="w-16 sm:w-20 md:w-24 h-1 bg-primary mx-auto rounded-full mb-6 sm:mb-8" />
        </div>

        <div className="bg-card rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12 border border-border shadow-spiritual mb-8 sm:mb-10 md:mb-12">
          <p className="text-base sm:text-lg text-foreground leading-relaxed mb-4 sm:mb-6">
            El <span className="text-primary font-semibold">Ho'oponopono</span> es una antigua práctica hawaiana 
            de reconciliación y perdón. Su nombre significa <em>"corregir un error"</em> o 
            <em>"hacer lo correcto"</em>.
          </p>
          <p className="text-base sm:text-lg text-foreground leading-relaxed mb-4 sm:mb-6">
            A diferencia de otras técnicas, el Ho'oponopono trabaja directamente con las 
            <span className="text-primary font-semibold"> memorias inconscientes</span> que guardamos 
            en nuestro interior — memorias que pueden ser propias, heredadas de nuestros ancestros, 
            o incluso de vidas pasadas.
          </p>
          <p className="text-base sm:text-lg text-foreground leading-relaxed">
            A través de <span className="text-primary font-semibold">4 frases sagradas</span>, 
            limpiamos estas memorias y permitimos que la energía del amor fluya libremente, 
            sanando todo a su paso.
          </p>
        </div>

        {/* The 4 Sacred Phrases */}
        <h3 className="text-xl sm:text-2xl font-serif font-bold text-center text-foreground mb-6 sm:mb-8">
          Las 4 Frases Sagradas
        </h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {phrases.map((item, index) => (
            <div
              key={index}
              className="bg-secondary rounded-xl p-5 sm:p-6 border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-gold"
            >
              <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                <span className="text-xl sm:text-2xl font-serif font-bold text-primary">{item.phrase}</span>
              </div>
              <p className="text-sm sm:text-base text-muted-foreground">{item.meaning}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-10 md:mt-12 p-6 sm:p-8 bg-secondary/50 rounded-xl sm:rounded-2xl border border-primary/20">
          <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-primary mx-auto mb-3 sm:mb-4" />
          <p className="text-base sm:text-lg text-foreground px-2">
            Al repetir estas frases con intención y amor, <span className="text-primary font-semibold">activas 
            un proceso de limpieza profunda</span> que libera las memorias dolorosas y abre espacio 
            para milagros, abundancia y paz.
          </p>
        </div>
      </div>
    </section>
  );
};
