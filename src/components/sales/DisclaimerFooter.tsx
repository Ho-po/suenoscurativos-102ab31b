import { Heart } from "lucide-react";

export const DisclaimerFooter = () => {
  return (
    <footer className="py-12 px-4 bg-card border-t border-border">
      <div className="max-w-4xl mx-auto text-center">
        {/* Spiritual Disclaimer */}
        <div className="bg-secondary rounded-2xl p-6 mb-8 border border-border">
          <p className="text-sm text-muted-foreground leading-relaxed">
            <strong className="text-foreground">Aviso importante:</strong> El Ho'oponopono es una práctica 
            espiritual de origen hawaiano destinada al crecimiento personal y la limpieza de memorias emocionales. 
            Este material no sustituye el tratamiento médico, psicológico o psiquiátrico profesional. 
            Si estás atravesando una crisis de salud mental, te recomendamos buscar ayuda profesional calificada. 
            Los resultados pueden variar de persona a persona según su práctica y disposición.
          </p>
        </div>

        {/* Logo/Brand */}
        <div className="flex items-center justify-center gap-2 mb-4">
          <Heart className="w-5 h-5 text-primary" />
          <span className="text-foreground font-serif text-lg">Cuaderno de Sanación con Ho'oponopono</span>
        </div>

        {/* Copyright */}
        <p className="text-muted-foreground text-sm mb-4">
          © {new Date().getFullYear()} Todos los derechos reservados.
        </p>

        {/* Links */}
        <div className="flex items-center justify-center gap-6 text-sm">
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
            Política de Privacidad
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
            Términos y Condiciones
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
            Contacto
          </a>
        </div>

        {/* Final message */}
        <p className="text-primary/60 text-xs mt-8 font-serif italic">
          "Lo siento, Perdóname, Gracias, Te amo"
        </p>
      </div>
    </footer>
  );
};
