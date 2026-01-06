import { Gift, Sparkles, Heart, BookOpen, Home, Shuffle, Calendar, Headphones } from "lucide-react";

// Importar imagens dos bônus
import bonusArcangeles from "@/assets/bonus/bonus-arcangeles.png";
import bonusColorear from "@/assets/bonus/bonus-colorear.png";
import bonusDecodificador from "@/assets/bonus/bonus-decodificador.jpg";
import bonusLinaje from "@/assets/bonus/bonus-linaje.jpg";
import bonusHogar from "@/assets/bonus/bonus-hogar.png";
import bonusOraculos from "@/assets/bonus/bonus-oraculos.png";
import bonusDiario from "@/assets/bonus/bonus-diario.png";
import bonusMeditaciones from "@/assets/bonus/bonus-meditaciones.png";

export const BonusList = () => {
  const bonuses = [
    {
      icon: Sparkles,
      image: bonusArcangeles,
      title: "Manual de Conexión con los Arcángeles",
      description: "Aprende a invocar la protección y guía de los arcángeles durante tu práctica de limpieza.",
      value: "$19"
    },
    {
      icon: Heart,
      image: bonusColorear,
      title: "Dibujos Terapéuticos para Colorear",
      description: "Páginas de mandalas y diseños relajantes para meditar mientras coloreas y liberas tensiones.",
      value: "$15"
    },
    {
      icon: BookOpen,
      image: bonusDecodificador,
      title: "Biodescodificador Emocional con Palabras-Gatillo",
      description: "Identifica las palabras que activan tus memorias dolorosas y aprende a limpiarlas.",
      value: "$27"
    },
    {
      icon: Gift,
      image: bonusLinaje,
      title: "Cuaderno de Sanación del Linaje Familiar",
      description: "Ejercicios para limpiar el karma ancestral y liberar a las generaciones pasadas y futuras.",
      value: "$23"
    },
    {
      icon: Home,
      image: bonusHogar,
      title: "Mapa de Limpieza Energética del Hogar",
      description: "Guía para aplicar el Ho'oponopono en cada rincón de tu casa y crear un espacio de paz.",
      value: "$17"
    },
    {
      icon: Shuffle,
      image: bonusOraculos,
      title: "Oráculos - Palabras que Curan",
      description: "50 cartas virtuales con mensajes de sanación para guiar tu práctica diaria.",
      value: "$19"
    },
    {
      icon: Calendar,
      image: bonusDiario,
      title: "Diario de 21 Días de Limpieza y Autosanación",
      description: "Planificador con rituales diarios para establecer el hábito de la limpieza consciente.",
      value: "$29"
    },
    {
      icon: Headphones,
      image: bonusMeditaciones,
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

        <div className="grid grid-cols-1 gap-4 sm:gap-5 mb-8 sm:mb-10 md:mb-12 max-w-2xl mx-auto">
          {bonuses.map((bonus, index) => {
            return (
              <div
                key={index}
                className="bg-card rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 group flex flex-col"
              >
                {/* Imagem do produto no topo */}
                <div className="bg-secondary/30 flex items-center justify-center p-4 sm:p-6">
                  <img
                    src={bonus.image}
                    alt={bonus.title}
                    className="w-full h-48 sm:h-56 md:h-64 object-contain rounded-lg shadow-md group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                {/* Conteúdo abaixo */}
                <div className="p-3 sm:p-4 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-muted-foreground line-through text-xs sm:text-sm">
                      Valor: {bonus.value}
                    </span>
                    <span className="text-green-500 font-bold text-xs sm:text-sm">
                      ¡Incluido GRATIS!
                    </span>
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-foreground leading-tight mb-2">{bonus.title}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{bonus.description}</p>
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
