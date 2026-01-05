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
    <section className="py-20 px-4 gradient-hero">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Historias de <span className="text-gradient-gold">Transformación</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-8" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Personas como tú que decidieron dar el paso y hoy viven una vida más ligera y plena.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-6 border border-border hover:border-primary/50 transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Quote icon */}
              <Quote className="w-8 h-8 text-primary/30 mb-3" />

              {/* Testimonial text */}
              <p className="text-foreground leading-relaxed mb-4">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-bold">{testimonial.name.charAt(0)}</span>
                </div>
                <div>
                  <p className="font-medium text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
