import { Button } from "@/components/ui/button";
import { Check, Sparkles, Clock, BookOpen, Headphones, Calendar, ArrowRight, X } from "lucide-react";

const Upsell = () => {
  const handleAccept = () => {
    // Link to external checkout
    window.open("https://tu-plataforma-de-pago.com/upsell", "_blank");
  };

  const handleDecline = () => {
    // Link to thank you page or download page
    window.location.href = "/gracias";
  };

  const features = [
    "Ebook completo del Programa 21 Días (150+ páginas)",
    "21 audios de limpieza profunda (uno por día)",
    "Guía de meditación matutina y nocturna",
    "Diario de seguimiento de transformación",
    "Acceso a comunidad privada de practicantes",
    "Soporte por email durante los 21 días"
  ];

  const days = [
    { week: "Semana 1", focus: "Limpieza Personal", description: "Trabaja con tus memorias individuales, emociones recientes y patrones cotidianos." },
    { week: "Semana 2", focus: "Limpieza Relacional", description: "Sana vínculos con familia, pareja, amigos y compañeros de trabajo." },
    { week: "Semana 3", focus: "Limpieza Ancestral", description: "Libera karma familiar, memorias heredadas y abre el camino para la abundancia." }
  ];

  return (
    <div className="min-h-screen gradient-hero">
      {/* Header */}
      <div className="text-center py-12 px-4 border-b border-border">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 mb-6">
          <Clock className="w-4 h-4 text-primary" />
          <span className="text-primary font-medium text-sm">Oferta Exclusiva - Solo Para Ti</span>
        </div>
        <h1 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-4">
          ¡Espera! Tu pedido aún no está completo...
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Tienes una oportunidad única de llevar tu sanación al siguiente nivel.
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Product Presentation */}
        <div className="text-center mb-12">
          <Sparkles className="w-16 h-16 text-primary mx-auto mb-6 lotus-glow animate-float" />
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            <span className="text-gradient-gold">Programa 21 Días</span>
            <br />
            Ho'oponopono
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            El sistema completo para establecer una práctica diaria de limpieza emocional 
            y transformar profundamente cada área de tu vida en solo 3 semanas.
          </p>
        </div>

        {/* Why 21 Days */}
        <div className="bg-card rounded-2xl p-8 border border-border mb-12">
          <h3 className="text-2xl font-serif font-bold text-foreground mb-4 text-center">
            ¿Por qué 21 días?
          </h3>
          <p className="text-muted-foreground text-center leading-relaxed">
            La ciencia ha demostrado que se necesitan <span className="text-primary font-semibold">21 días</span> para 
            formar un nuevo hábito. Este programa está diseñado para que al final de las 3 semanas, 
            la práctica del Ho'oponopono sea parte natural de tu vida, y los cambios que experimentes 
            sean permanentes.
          </p>
        </div>

        {/* 3 Weeks Breakdown */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {days.map((week, index) => (
            <div key={index} className="bg-secondary rounded-xl p-6 border border-border">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-bold">{index + 1}</span>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{week.week}</p>
                  <p className="font-bold text-foreground">{week.focus}</p>
                </div>
              </div>
              <p className="text-muted-foreground text-sm">{week.description}</p>
            </div>
          ))}
        </div>

        {/* What You Get */}
        <div className="bg-card rounded-2xl p-8 border border-primary/30 mb-12">
          <h3 className="text-2xl font-serif font-bold text-foreground mb-6 text-center">
            Lo que incluye el Programa 21 Días
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center mt-0.5">
                  <Check className="w-4 h-4 text-primary-foreground" />
                </div>
                <span className="text-foreground">{feature}</span>
              </div>
            ))}
          </div>

          {/* Visual representation */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <div className="flex items-center gap-2 bg-secondary rounded-lg px-4 py-3">
              <BookOpen className="w-6 h-6 text-primary" />
              <span className="text-foreground text-sm">Ebook 150+ pág</span>
            </div>
            <div className="flex items-center gap-2 bg-secondary rounded-lg px-4 py-3">
              <Headphones className="w-6 h-6 text-primary" />
              <span className="text-foreground text-sm">21 Audios</span>
            </div>
            <div className="flex items-center gap-2 bg-secondary rounded-lg px-4 py-3">
              <Calendar className="w-6 h-6 text-primary" />
              <span className="text-foreground text-sm">Diario Guiado</span>
            </div>
          </div>
        </div>

        {/* Pricing */}
        <div className="bg-card rounded-3xl border-2 border-primary shadow-spiritual overflow-hidden mb-8">
          <div className="gradient-gold p-6 text-center">
            <p className="text-primary-foreground font-bold text-lg">
              Oferta Especial Solo Por Hoy
            </p>
          </div>
          <div className="p-8 text-center">
            <p className="text-muted-foreground mb-2">
              Valor regular: <span className="line-through">$97 USD</span>
            </p>
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="text-6xl font-bold text-primary">$27</span>
              <span className="text-foreground text-lg">USD</span>
            </div>
            <p className="text-sm text-muted-foreground mb-8">
              ¡Ahorra más de $70 solo por agregar esto a tu pedido ahora!
            </p>

            {/* Accept Button */}
            <Button
              onClick={handleAccept}
              size="lg"
              className="w-full text-lg py-7 gradient-gold text-primary-foreground font-bold shadow-gold hover:opacity-90 transition-all duration-300 mb-4"
            >
              SÍ, QUIERO EL PROGRAMA COMPLETO
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>

            {/* Decline Button */}
            <button
              onClick={handleDecline}
              className="text-muted-foreground text-sm hover:text-foreground transition-colors flex items-center justify-center gap-2 mx-auto"
            >
              <X className="w-4 h-4" />
              No gracias, solo quiero el cuaderno básico
            </button>
          </div>
        </div>

        {/* Urgency */}
        <div className="text-center">
          <p className="text-muted-foreground text-sm">
            ⚠️ Esta oferta especial de $27 solo está disponible en esta página.
            <br />
            Si sales ahora, el precio regular será de $97 USD.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Upsell;
