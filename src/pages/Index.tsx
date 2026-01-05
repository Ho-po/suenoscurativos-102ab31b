import { HeroSection } from "@/components/sales/HeroSection";
import { IdentificationSection } from "@/components/sales/IdentificationSection";
import { HoooponoponoExplainer } from "@/components/sales/HoooponoponoExplainer";
import { ProductPresentation } from "@/components/sales/ProductPresentation";
import { WhatYouRelease } from "@/components/sales/WhatYouRelease";
import { ProgramPhases } from "@/components/sales/ProgramPhases";
import { BonusList } from "@/components/sales/BonusList";
import { PricingSection } from "@/components/sales/PricingSection";
import { OrderBumps } from "@/components/sales/OrderBumps";
import { TestimonialsSection } from "@/components/sales/TestimonialsSection";
import { GuaranteeSection } from "@/components/sales/GuaranteeSection";
import { FAQSection } from "@/components/sales/FAQSection";
import { DisclaimerFooter } from "@/components/sales/DisclaimerFooter";

const Index = () => {
  const handleCTAClick = () => {
    // Scroll to pricing section
    const pricingSection = document.getElementById("pricing");
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleCheckout = () => {
    // Link to external checkout platform
    window.open("https://tu-plataforma-de-pago.com/checkout", "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      <HeroSection onCTAClick={handleCTAClick} />
      <IdentificationSection />
      <HoooponoponoExplainer />
      <ProductPresentation />
      <WhatYouRelease />
      <ProgramPhases />
      <BonusList />
      <PricingSection onCTAClick={handleCheckout} />
      <OrderBumps />
      <TestimonialsSection />
      <GuaranteeSection />
      <FAQSection />
      <DisclaimerFooter />
    </div>
  );
};

export default Index;
