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
    <section className="py-20 px-4 gradient-hero">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Lo que te ayuda a <span className="text-gradient-gold">liberar</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-8" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            El Ho'oponopono actúa en las capas más profundas de tu ser, transmutando 
            memorias dolorosas en energía de amor y luz.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {releases.map((item, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-5 border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-destructive/20 flex items-center justify-center">
                  <X className="w-4 h-4 text-destructive" />
                </div>
                <span className="text-muted-foreground flex-1">{item.release}</span>
                <ArrowRight className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-primary font-medium flex-1">{item.transform}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-xl text-foreground font-serif italic">
            "Cada memoria limpiada es un paso hacia la versión más libre y luminosa de ti."
          </p>
        </div>
      </div>
    </section>
  );
};
