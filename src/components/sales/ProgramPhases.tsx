import { Sparkles, Sunrise, RefreshCw, Layers, Sun } from "lucide-react";

export const ProgramPhases = () => {
  const phases = [
    {
      icon: Sunrise,
      number: "01",
      title: "Despertar de la Consciencia",
      description: "Comprende el poder del Ho'oponopono y prepara tu mente y corazón para el viaje de sanación. Establecerás tu intención sagrada."
    },
    {
      icon: Sparkles,
      number: "02",
      title: "Limpieza Superficial",
      description: "Comienza a limpiar las memorias más recientes y accesibles. Trabaja con las situaciones cotidianas que generan malestar."
    },
    {
      icon: RefreshCw,
      number: "03",
      title: "Limpieza Recurrente",
      description: "Aborda los patrones que se repiten en tu vida: relaciones, dinero, salud. Identifica y libera los ciclos inconscientes."
    },
    {
      icon: Layers,
      number: "04",
      title: "Limpieza Profunda",
      description: "Accede a las memorias ancestrales y kármicas. Trabaja con el linaje familiar y las heridas más antiguas del alma."
    },
    {
      icon: Sun,
      number: "05",
      title: "Integración y Renacimiento",
      description: "Celebra tu transformación y establece rituales para mantener tu campo energético limpio. Renace como tu versión más luminosa."
    }
  ];

  return (
    <section className="py-20 px-4 bg-secondary">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Las 5 Fases de <span className="text-gradient-gold">Transformación</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-8" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Un viaje estructurado que te guía desde el despertar inicial hasta la 
            liberación profunda y el renacimiento de tu ser.
          </p>
        </div>

        <div className="space-y-6">
          {phases.map((phase, index) => {
            const Icon = phase.icon;
            return (
              <div
                key={index}
                className="relative bg-card rounded-2xl p-6 md:p-8 border border-border hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="flex flex-col md:flex-row items-start gap-6">
                  {/* Phase number */}
                  <div className="flex-shrink-0 flex items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <span className="text-5xl font-serif font-bold text-primary/30">{phase.number}</span>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-serif font-bold text-foreground mb-3">
                      {phase.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {phase.description}
                    </p>
                  </div>
                </div>

                {/* Connector line */}
                {index < phases.length - 1 && (
                  <div className="hidden md:block absolute left-12 -bottom-3 w-0.5 h-6 bg-primary/30" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
