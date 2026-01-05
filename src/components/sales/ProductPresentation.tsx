import { BookOpen, Layers, PenTool, Sparkles } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import preview1 from "@/assets/cuaderno-preview/preview-1.png";
import preview2 from "@/assets/cuaderno-preview/preview-2.png";
import preview3 from "@/assets/cuaderno-preview/preview-3.png";
import preview4 from "@/assets/cuaderno-preview/preview-4.png";

const previewImages = [preview1, preview2, preview3, preview4];

export const ProductPresentation = () => {
  const features = [{
    icon: BookOpen,
    title: "Guía Completa",
    description: "Más de 80 páginas de ejercicios prácticos y reflexiones profundas"
  }, {
    icon: Layers,
    title: "Metodología en Capas",
    description: "Sistema progresivo que te lleva de la limpieza superficial a la sanación profunda"
  }, {
    icon: PenTool,
    title: "Espacio para Escribir",
    description: "Secciones interactivas donde plasmas tu proceso de transformación"
  }, {
    icon: Sparkles,
    title: "Práctica Diaria",
    description: "Rituales y ejercicios diseñados para incorporar el Ho'oponopono a tu vida"
  }];
  return <section className="py-12 sm:py-16 md:py-20 px-4 bg-secondary">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-foreground mb-3 sm:mb-4">
            Conoce el <span className="text-gradient-gold">Cuaderno de Sanación</span>
          </h2>
          <div className="w-16 sm:w-20 md:w-24 h-1 bg-primary mx-auto rounded-full mb-6 sm:mb-8" />
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
            No es solo un ebook. Es un viaje guiado hacia tu interior, donde cada página te acerca 
            más a la paz, la liberación y el amor propio.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-10 md:mb-12">
          {features.map((feature, index) => {
          const Icon = feature.icon;
          return <div key={index} className="bg-card rounded-xl p-5 sm:p-6 border border-border hover:border-primary/50 transition-all duration-300 group">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-foreground mb-1 sm:mb-2">{feature.title}</h3>
                    <p className="text-sm sm:text-base text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              </div>;
        })}
        </div>

        {/* Product image placeholder */}
        <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8 bg-card rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-primary/20">
          <div className="flex-shrink-0 w-full md:w-auto">
            <Carousel opts={{ loop: true }} className="w-full max-w-[280px] sm:max-w-xs md:max-w-sm mx-auto md:mx-0">
              <CarouselContent>
                {previewImages.map((image, index) => (
                  <CarouselItem key={index}>
                    <img 
                      src={image} 
                      alt={`Preview del cuaderno ${index + 1}`} 
                      className="rounded-lg shadow-spiritual w-full h-auto border-2 border-primary/20"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="-left-3 sm:-left-4 bg-primary/90 hover:bg-primary text-primary-foreground border-none" />
              <CarouselNext className="-right-3 sm:-right-4 bg-primary/90 hover:bg-primary text-primary-foreground border-none" />
            </Carousel>
          </div>
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-foreground mb-3 sm:mb-4">Mira lo que encontrarás dentro del Cuaderno de Sanación   </h3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-3 sm:mb-4">
              El Cuaderno de Sanación con Ho'oponopono fue creado para guiarte paso a paso 
              en un proceso de limpieza emocional profunda. No necesitas experiencia previa 
              — solo la disposición de abrirte a sanar.
            </p>
            <p className="text-sm sm:text-base text-primary font-medium">
              Formato digital (PDF) • Acceso inmediato • Compatible con todos los dispositivos
            </p>
          </div>
        </div>
      </div>
    </section>;
};