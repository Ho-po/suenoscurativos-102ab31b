import { BookOpen, Sparkles, ChevronDown } from "lucide-react";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const phases = [
  {
    number: 1,
    title: "DESPERTAR DE LA CONSCIENCIA",
    subtitle: "Entende lo que te bloquea y prepara el terreno de la sanación",
    chapters: [
      "1. Bienvenida al proceso de sanación",
      "2. ¿Qué es Ho'oponopono y cómo funciona?",
      "3. El poder de las memorias inconscientes",
      "4. Identificando tus patrones limitantes",
      "5. El papel de la responsabilidad total",
      "6. Preparando tu mente para la transformación",
      "7. Creando tu espacio sagrado de práctica",
      "8. Las 4 frases sanadoras y su significado profundo",
    ],
  },
  {
    number: 2,
    title: "LIMPIEZA SUPERFICIAL",
    subtitle: "Aliviando las heridas del presente y las tensiones cotidianas",
    chapters: [
      "9. Liberando el estrés y la ansiedad del día a día",
      "10. Sanando conflictos recientes",
      "11. Limpiando memorias de conversaciones difíciles",
      "12. Transformando la irritación en paz",
      "13. Ejercicios de perdón instantáneo",
      "14. Rituales de limpieza matutina",
      "15. Práctica del espejo: amándote sin condiciones",
    ],
  },
  {
    number: 3,
    title: "LIMPIEZA RECURRENTE",
    subtitle: "Desactivando patrones que se repiten en tu vida",
    chapters: [
      "16. Identificando ciclos repetitivos",
      "17. Limpiando memorias de relaciones pasadas",
      "18. Sanando patrones de escasez financiera",
      "19. Liberando el miedo al rechazo",
      "20. Transformando la necesidad de aprobación",
      "21. Rompiendo el ciclo de la autosabotaje",
      "22. Ejercicios de escritura sanadora",
    ],
  },
  {
    number: 4,
    title: "LIMPIEZA PROFUNDA",
    subtitle: "Accediendo a las raíces de tus memorias más antiguas",
    chapters: [
      "23. Sanando memorias de la infancia",
      "24. Liberando herencias emocionales familiares",
      "25. Limpiando memorias ancestrales",
      "26. El trabajo con el niño interior",
      "27. Perdonando a tus padres (y a ti mismo)",
      "28. Transformando traumas profundos",
      "29. Rituales de liberación intensiva",
      "30. Meditaciones guiadas de sanación profunda",
    ],
  },
  {
    number: 5,
    title: "INTEGRACIÓN Y RENACIMIENTO",
    subtitle: "Consolidando tu nueva identidad libre y en paz",
    chapters: [
      "31. Integrando las lecciones aprendidas",
      "32. Creando nuevos patrones de pensamiento",
      "33. Manteniendo tu práctica diaria",
      "34. Viviendo desde el estado de paz",
      "35. Compartiendo la luz con otros",
      "36. Tu plan de mantenimiento espiritual",
      "37. Recursos adicionales y próximos pasos",
      "38. Carta de cierre: tu nuevo comienzo",
    ],
  },
];

export const ContentCurriculum = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <BookOpen className="w-4 h-4" />
            <span>Más de 153 páginas de contenido transformador</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Contenido Programático
          </h2>
          
          <p className="text-base sm:text-lg text-muted-foreground mb-4">
            Con el Método <span className="text-primary font-semibold">SLC – Sistema de Limpieza en Capas</span>
          </p>
          
          <div className="inline-flex items-center gap-2 text-primary">
            <Sparkles className="w-5 h-5" />
            <span className="font-medium">5 fases de transformación emocional</span>
            <Sparkles className="w-5 h-5" />
          </div>
        </div>

        {/* Phases Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {phases.map((phase) => (
            <AccordionItem
              key={phase.number}
              value={`phase-${phase.number}`}
              className="bg-card border border-primary/20 rounded-xl overflow-hidden"
            >
              <AccordionTrigger className="px-5 sm:px-6 py-4 sm:py-5 hover:no-underline hover:bg-primary/5 transition-colors">
                <div className="flex items-start gap-3 sm:gap-4 text-left">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg sm:text-xl">
                    {phase.number}
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-foreground leading-tight">
                      FASE {phase.number} — {phase.title}
                    </h3>
                    <p className="text-sm text-primary italic mt-1">
                      {phase.subtitle}
                    </p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-5 sm:px-6 pb-5 sm:pb-6">
                <ul className="space-y-2 sm:space-y-3 ml-14 sm:ml-16">
                  {phase.chapters.map((chapter, index) => (
                    <li
                      key={index}
                      className="text-sm sm:text-base text-muted-foreground flex items-start gap-2"
                    >
                      <span className="text-primary mt-1">•</span>
                      <span>{chapter}</span>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Total chapters indicator */}
        <div className="text-center mt-8 sm:mt-10">
          <p className="text-muted-foreground">
            <span className="text-primary font-bold text-xl sm:text-2xl">38</span>{" "}
            <span className="text-sm sm:text-base">capítulos de transformación profunda</span>
          </p>
        </div>
      </div>
    </section>
  );
};
