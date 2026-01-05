import { Button } from "@/components/ui/button";
import { Check, Download, Heart, Mail, Sparkles } from "lucide-react";

const Gracias = () => {
  return (
    <div className="min-h-screen gradient-hero flex items-center justify-center px-4 py-16">
      <div className="max-w-2xl mx-auto text-center">
        {/* Success Icon */}
        <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-8 animate-pulse-glow">
          <Check className="w-12 h-12 text-primary" />
        </div>

        {/* Main Message */}
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
          ¡Gracias por tu <span className="text-gradient-gold">confianza</span>!
        </h1>

        <p className="text-xl text-muted-foreground mb-8">
          Tu compra ha sido procesada exitosamente.
        </p>

        {/* What's Next Box */}
        <div className="bg-card rounded-2xl p-8 border border-border mb-8 text-left">
          <h2 className="text-xl font-bold text-foreground mb-6 flex items-center gap-3">
            <Sparkles className="w-6 h-6 text-primary" />
            ¿Qué sigue ahora?
          </h2>

          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">1</span>
              </div>
              <div>
                <p className="font-medium text-foreground">Revisa tu correo electrónico</p>
                <p className="text-muted-foreground text-sm">
                  En los próximos minutos recibirás un email con los enlaces de descarga.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">2</span>
              </div>
              <div>
                <p className="font-medium text-foreground">Descarga tu material</p>
                <p className="text-muted-foreground text-sm">
                  Todos los archivos están en formato PDF y MP3, listos para descargar.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">3</span>
              </div>
              <div>
                <p className="font-medium text-foreground">Comienza tu transformación</p>
                <p className="text-muted-foreground text-sm">
                  Abre el Cuaderno de Sanación y sigue las instrucciones del Día 1.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Download Button (placeholder) */}
        <Button
          size="lg"
          className="gradient-gold text-primary-foreground font-bold shadow-gold hover:opacity-90 transition-all duration-300 mb-6"
        >
          <Download className="w-5 h-5 mr-2" />
          Acceder a Mis Descargas
        </Button>

        {/* Support Info */}
        <div className="bg-secondary/50 rounded-xl p-6 border border-border">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Mail className="w-5 h-5 text-primary" />
            <span className="font-medium text-foreground">¿Necesitas ayuda?</span>
          </div>
          <p className="text-muted-foreground text-sm">
            Si tienes alguna pregunta o no recibiste tu email, escríbenos a:
            <br />
            <a href="mailto:soporte@ejemplo.com" className="text-primary hover:underline">
              soporte@ejemplo.com
            </a>
          </p>
        </div>

        {/* Final message */}
        <div className="mt-12 flex items-center justify-center gap-2 text-primary">
          <Heart className="w-5 h-5" />
          <span className="font-serif italic">
            "Lo siento, Perdóname, Gracias, Te amo"
          </span>
          <Heart className="w-5 h-5" />
        </div>
      </div>
    </div>
  );
};

export default Gracias;
