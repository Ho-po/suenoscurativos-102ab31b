import { HeroSection } from "@/components/sales/HeroSection";
import { IdentificationSection } from "@/components/sales/IdentificationSection";
import { HoooponoponoExplainer } from "@/components/sales/HoooponoponoExplainer";
import { ProductPresentation } from "@/components/sales/ProductPresentation";
import { ContentCurriculum } from "@/components/sales/ContentCurriculum";
import { WhatYouRelease } from "@/components/sales/WhatYouRelease";
import { ProgramPhases } from "@/components/sales/ProgramPhases";
import { BonusList } from "@/components/sales/BonusList";
import { PricingSection } from "@/components/sales/PricingSection";
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
    window.open("https://pay.hotmart.com/K103696884R", "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      <HeroSection onCTAClick={handleCTAClick} />
      <IdentificationSection />
      <HoooponoponoExplainer />
      <ProductPresentation />
      <ContentCurriculum />
      <WhatYouRelease />
      <ProgramPhases />
      <BonusList />
      <PricingSection onCTAClick={handleCheckout} />
      <TestimonialsSection />
      <GuaranteeSection />
      <FAQSection />
      <DisclaimerFooter />
    </div>
  );
};

export default Index;
