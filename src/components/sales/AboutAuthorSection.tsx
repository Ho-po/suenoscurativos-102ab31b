import { Sparkles, Heart, Award, BookOpen, Users } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const authorCredentials = [
  {
    icon: BookOpen,
    text: "Más de 10 años estudiando y practicando Ho'oponopono"
  },
  {
    icon: Users,
    text: "Más de 2,000 mujeres transformadas con este método"
  },
  {
    icon: Award,
    text: "Certificada en técnicas de sanación ancestral hawaiana"
  },
  {
    icon: Heart,
    text: "Especialista en liberación emocional y perdón consciente"
  }
];

export const AboutAuthorSection = () => {
  return (
    <section className="py-16 sm:py-20 gradient-hero">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-primary/20 px-4 py-2 rounded-full mb-4">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Tu guía en este viaje</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-foreground">
              Conoce a la Autora
            </h2>
          </div>

          {/* Author Card */}
          <div className="bg-card rounded-2xl border border-border shadow-spiritual p-6 sm:p-8 md:p-10">
            <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
              {/* Author Photo */}
              <div className="flex-shrink-0">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-primary/10 rounded-full blur-xl scale-110"></div>
                  <Avatar className="w-32 h-32 sm:w-40 sm:h-40 border-4 border-primary/30 shadow-gold relative">
                    <AvatarImage src="/placeholder.svg" alt="Foto de la autora" />
                    <AvatarFallback className="bg-gradient-to-br from-primary to-primary/70 text-primary-foreground text-3xl font-serif">
                      MA
                    </AvatarFallback>
                  </Avatar>
                </div>
              </div>

              {/* Author Info */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-foreground mb-2">
                  María Alejandra
                </h3>
                <p className="text-primary font-medium mb-4">
                  Facilitadora de Ho'oponopono y Sanación Interior
                </p>

                {/* Personal Story */}
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    <span className="text-foreground font-medium">Mi historia con el Ho'oponopono comenzó en el momento más oscuro de mi vida.</span> Después de años cargando el peso del resentimiento, la culpa y relaciones rotas, descubrí esta antigua práctica hawaiana que transformó completamente mi existencia.
                  </p>
                  <p>
                    Lo que encontré no fue solo una técnica de sanación, sino un camino completo hacia la paz interior. Aprendí a liberar el dolor del pasado, a perdonar lo imperdonable y a reconectar con mi esencia más pura.
                  </p>
                  <p>
                    <span className="text-foreground font-medium">Hoy, mi misión es guiarte en este mismo viaje de transformación.</span> Cada ejercicio, cada meditación y cada página de este cuaderno contiene la sabiduría que he cultivado durante más de una década de práctica dedicada.
                  </p>
                </div>
              </div>
            </div>

            {/* Credentials */}
            <div className="mt-8 pt-8 border-t border-border">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {authorCredentials.map((credential, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                      <credential.icon className="w-4 h-4 text-primary" />
                    </div>
                    <p className="text-sm text-muted-foreground">{credential.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Signature Quote */}
            <div className="mt-8 pt-8 border-t border-border text-center">
              <div className="relative">
                <Sparkles className="w-6 h-6 text-primary/40 mx-auto mb-3" />
                <blockquote className="text-lg sm:text-xl font-serif italic text-foreground max-w-2xl mx-auto">
                  "El perdón no es un regalo para los demás, es el regalo más grande que puedes darte a ti misma."
                </blockquote>
                <p className="text-primary font-medium mt-3">— María Alejandra</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
