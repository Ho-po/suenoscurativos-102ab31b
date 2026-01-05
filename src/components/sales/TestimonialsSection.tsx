import { Star, Quote } from "lucide-react";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "María Elena",
      location: "México",
      text: "Llevaba años cargando un dolor que no podía explicar. Con el cuaderno, pude por fin soltar esas memorias que me ataban. Hoy me siento más ligera y en paz que nunca.",
      highlight: "me siento más ligera y en paz"
    },
    {
      name: "Carlos Alberto",
      location: "Colombia",
      text: "Era escéptico, pero decidí intentarlo. Las primeras semanas noté cambios sutiles. Ahora, 2 meses después, mi relación con el dinero y mi familia ha mejorado increíblemente.",
      highlight: "mi relación con el dinero y mi familia ha mejorado"
    },
    {
      name: "Ana Lucía",
      location: "Perú",
      text: "El Ho'oponopono cambió mi vida, pero este cuaderno lo llevó a otro nivel. La estructura me ayudó a ser constante y los ejercicios son profundos pero accesibles.",
      highlight: "lo llevó a otro nivel"
    },
    {
      name: "Roberto",
      location: "Chile",
      text: "Después de un divorcio difícil, encontré este cuaderno. Me ayudó a perdonar, a soltar el resentimiento y a abrirme a una nueva etapa. Gracias infinitas.",
      highlight: "Me ayudó a perdonar"
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 gradient-hero">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-foreground mb-3 sm:mb-4">
            Historias de <span className="text-gradient-gold">Transformación</span>
          </h2>
          <div className="w-16 sm:w-20 md:w-24 h-1 bg-primary mx-auto rounded-full mb-6 sm:mb-8" />
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
            Personas como tú que decidieron dar el paso y hoy viven una vida más ligera y plena.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-xl sm:rounded-2xl p-5 sm:p-6 border border-border hover:border-primary/50 transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-3 sm:mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Quote icon */}
              <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-primary/30 mb-2 sm:mb-3" />

              {/* Testimonial text */}
              <p className="text-sm sm:text-base text-foreground leading-relaxed mb-3 sm:mb-4">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-sm sm:text-base text-primary font-bold">{testimonial.name.charAt(0)}</span>
                </div>
                <div>
                  <p className="text-sm sm:text-base font-medium text-foreground">{testimonial.name}</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
