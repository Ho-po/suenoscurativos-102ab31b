import { Gift, Sparkles, Heart, BookOpen, Home, Shuffle, Calendar, Headphones } from "lucide-react";

export const BonusList = () => {
  const bonuses = [
    {
      icon: Sparkles,
      title: "Manual de Conexión con los Arcángeles",
      description: "Aprende a invocar la protección y guía de los arcángeles durante tu práctica de limpieza.",
      value: "$19"
    },
    {
      icon: Heart,
      title: "Guía de Amor Propio con Ho'oponopono",
      description: "Ejercicios específicos para sanar tu relación contigo mismo/a y cultivar el amor incondicional.",
      value: "$15"
    },
    {
      icon: BookOpen,
      title: "Decodificador Emocional con Palabras Gatillo",
      description: "Identifica las palabras que activan tus memorias dolorosas y aprende a limpiarlas.",
      value: "$27"
    },
    {
      icon: Gift,
      title: "Cuaderno de Sanación del Linaje Familiar",
      description: "Ejercicios para limpiar el karma ancestral y liberar a las generaciones pasadas y futuras.",
      value: "$23"
    },
    {
      icon: Home,
      title: "Mapa de Limpieza Energética del Hogar",
      description: "Guía para aplicar el Ho'oponopono en cada rincón de tu casa y crear un espacio de paz.",
      value: "$17"
    },
    {
      icon: Shuffle,
      title: "Caja de Oráculos - Palabras que Sanan",
      description: "50 cartas virtuales con mensajes de sanación para guiar tu práctica diaria.",
      value: "$19"
    },
    {
      icon: Calendar,
      title: "Diario de 21 Días de Limpieza y Autocuidado",
      description: "Planificador con rituales diarios para establecer el hábito de la limpieza consciente.",
      value: "$29"
    },
    {
      icon: Headphones,
      title: "Meditaciones Guiadas Ho'oponopono (Audio)",
      description: "3 meditaciones en audio para diferentes momentos: mañana, noche y limpieza de emergencia.",
      value: "$35"
    }
  ];

  const totalValue = bonuses.reduce((acc, bonus) => {
    return acc + parseInt(bonus.value.replace("$", ""));
  }, 0);

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 gradient-hero">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/20 border border-primary/30 mb-4 sm:mb-6">
            <Gift className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
            <span className="text-sm sm:text-base text-primary font-medium">8 Bonus Exclusivos</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-foreground mb-3 sm:mb-4">
            Lo que <span className="text-gradient-gold">recibes hoy</span>
          </h2>
          <div className="w-16 sm:w-20 md:w-24 h-1 bg-primary mx-auto rounded-full mb-6 sm:mb-8" />
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
            Además del Cuaderno de Sanación, hoy te llevas estos 8 regalos especiales 
            para potenciar tu transformación.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 mb-8 sm:mb-10 md:mb-12">
          {bonuses.map((bonus, index) => {
            const Icon = bonus.icon;
            return (
              <div
                key={index}
                className="bg-card rounded-xl p-4 sm:p-5 border border-border hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-2 mb-1 sm:mb-2">
                      <h3 className="text-base sm:text-lg font-bold text-foreground">{bonus.title}</h3>
                      <span className="text-primary font-bold text-xs sm:text-sm whitespace-nowrap">
                        Valor: {bonus.value}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-muted-foreground">{bonus.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Total Value */}
        <div className="text-center bg-secondary rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-primary/30">
          <p className="text-sm sm:text-base text-muted-foreground mb-2">Valor total de todos los bonus:</p>
          <p className="text-3xl sm:text-4xl font-bold text-primary">${totalValue} USD</p>
          <p className="text-base sm:text-lg text-foreground mt-3 sm:mt-4">
            ¡Todos <span className="text-primary font-semibold">GRATIS</span> al adquirir el Cuaderno de Sanación hoy!
          </p>
        </div>
      </div>
    </section>
  );
};
