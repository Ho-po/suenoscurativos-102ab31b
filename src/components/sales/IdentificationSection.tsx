import { Check } from "lucide-react";

export const IdentificationSection = () => {
  const identifications = [
    "Estás cansado/a de repetir los mismos patrones dolorosos",
    "Sientes ansiedad, tristeza o un vacío que no puedes explicar",
    "Deseas mejorar tu energía en relaciones, dinero y bienestar",
    "Ya conoces el Ho'oponopono y quieres profundizar tu práctica",
    "O quieres comenzar desde cero con una herramienta práctica y amorosa",
    "Sientes que cargas peso emocional que no te pertenece",
    "Quieres liberarte de memorias que te hacen sufrir",
    "Buscas reconectarte con tu paz interior y amor propio"
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 bg-secondary">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-foreground mb-3 sm:mb-4">
            Este cuaderno es para ti si...
          </h2>
          <div className="w-16 sm:w-20 md:w-24 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
          {identifications.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors"
            >
              <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-primary flex items-center justify-center">
                <Check className="w-3 h-3 sm:w-4 sm:h-4 text-primary-foreground" />
              </div>
              <p className="text-sm sm:text-base text-foreground">{item}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-primary text-base sm:text-lg mt-8 sm:mt-10 font-medium px-2">
          Si te identificas con al menos una de estas frases, el Ho'oponopono puede transformar tu vida.
        </p>
      </div>
    </section>
  );
};
