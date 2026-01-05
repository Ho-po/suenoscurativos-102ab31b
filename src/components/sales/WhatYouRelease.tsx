import { X, ArrowRight } from "lucide-react";

export const WhatYouRelease = () => {
  const releases = [
    {
      release: "Culpa heredada y karma familiar",
      transform: "Paz y libertad ancestral"
    },
    {
      release: "Relaciones tóxicas y patrones repetitivos",
      transform: "Vínculos sanos y amor consciente"
    },
    {
      release: "Miedos inconscientes y autosabotaje",
      transform: "Confianza y acción alineada"
    },
    {
      release: "Bloqueos con el dinero y la abundancia",
      transform: "Flujo próspero y merecimiento"
    },
    {
      release: "Dolor emocional acumulado",
      transform: "Ligereza y alegría renovada"
    },
    {
      release: "Resentimientos y falta de perdón",
      transform: "Corazón abierto y libre"
    },
    {
      release: "Ansiedad y pensamientos obsesivos",
      transform: "Mente clara y presente"
    },
    {
      release: "Baja autoestima y crítica interna",
      transform: "Amor propio y aceptación"
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 gradient-hero">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-foreground mb-3 sm:mb-4">
            Lo que te ayuda a <span className="text-gradient-gold">liberar</span>
          </h2>
          <div className="w-16 sm:w-20 md:w-24 h-1 bg-primary mx-auto rounded-full mb-6 sm:mb-8" />
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
            El Ho'oponopono actúa en las capas más profundas de tu ser, transmutando 
            memorias dolorosas en energía de amor y luz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
          {releases.map((item, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-4 sm:p-5 border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3">
                <div className="flex items-center gap-2 sm:gap-3 w-full sm:flex-1">
                  <div className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-destructive/20 flex items-center justify-center">
                    <X className="w-3 h-3 sm:w-4 sm:h-4 text-destructive" />
                  </div>
                  <span className="text-sm sm:text-base text-muted-foreground flex-1">{item.release}</span>
                </div>
                <ArrowRight className="hidden sm:block w-5 h-5 text-primary flex-shrink-0" />
                <div className="flex items-center gap-2 sm:gap-0 w-full sm:flex-1 pl-8 sm:pl-0">
                  <ArrowRight className="sm:hidden w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-sm sm:text-base text-primary font-medium">{item.transform}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 sm:mt-10 md:mt-12 text-center px-2">
          <p className="text-lg sm:text-xl text-foreground font-serif italic">
            "Cada memoria limpiada es un paso hacia la versión más libre y luminosa de ti."
          </p>
        </div>
      </div>
    </section>
  );
};
