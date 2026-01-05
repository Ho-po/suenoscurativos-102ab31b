import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQSection = () => {
  const faqs = [
    {
      question: "¿Cómo recibo el material después del pago?",
      answer: "Inmediatamente después de confirmar tu pago, recibirás un correo electrónico con los enlaces de descarga de todo el material. También tendrás acceso a una página privada donde podrás descargar todos los archivos. El acceso es instantáneo y de por vida."
    },
    {
      question: "¿Puedo acceder desde mi celular o tablet?",
      answer: "¡Sí! Todo el material está en formato PDF y MP3, compatibles con cualquier dispositivo: celular, tablet, computadora. Puedes leer y practicar donde quieras."
    },
    {
      question: "¿El pago es seguro?",
      answer: "Absolutamente. Utilizamos plataformas de pago internacionales con encriptación de última generación. Tus datos financieros están 100% protegidos."
    },
    {
      question: "¿Por qué el precio es tan bajo?",
      answer: "Creemos que la sanación debe ser accesible para todos. Este precio especial es nuestra forma de llegar a más personas que necesitan esta transformación. No sabemos hasta cuándo podremos mantenerlo."
    },
    {
      question: "¿Necesito conocer el Ho'oponopono para usar el cuaderno?",
      answer: "No, el cuaderno está diseñado tanto para principiantes como para practicantes avanzados. Incluye toda la información necesaria para comenzar desde cero, además de ejercicios profundos para quienes ya conocen la técnica."
    },
    {
      question: "¿Cuánto tiempo necesito dedicarle al día?",
      answer: "Puedes avanzar a tu propio ritmo. Recomendamos entre 10 y 20 minutos diarios para obtener los mejores resultados, pero incluso 5 minutos de práctica consciente pueden generar cambios profundos."
    }
  ];

  return (
    <section className="py-20 px-4 gradient-hero">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Preguntas <span className="text-gradient-gold">Frecuentes</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card rounded-xl border border-border px-6 data-[state=open]:border-primary/50"
            >
              <AccordionTrigger className="text-left text-foreground hover:text-primary py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
