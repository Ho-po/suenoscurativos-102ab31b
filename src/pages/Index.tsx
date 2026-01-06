import { HeroSection } from "@/components/sales/HeroSection";
import { SocialProofStats } from "@/components/sales/SocialProofStats";
import { IdentificationSection } from "@/components/sales/IdentificationSection";
import { HoooponoponoExplainer } from "@/components/sales/HoooponoponoExplainer";
import { ProductPresentation } from "@/components/sales/ProductPresentation";
import { ContentCurriculum } from "@/components/sales/ContentCurriculum";
import { WhatYouRelease } from "@/components/sales/WhatYouRelease";
import { ComparisonTable } from "@/components/sales/ComparisonTable";
import { ProgramPhases } from "@/components/sales/ProgramPhases";
import { BonusList } from "@/components/sales/BonusList";
import { MidPageCTA } from "@/components/sales/MidPageCTA";
import { PricingSection } from "@/components/sales/PricingSection";
import { UrgencyCounter } from "@/components/sales/UrgencyCounter";
import { TestimonialsSection } from "@/components/sales/TestimonialsSection";
import { AboutAuthorSection } from "@/components/sales/AboutAuthorSection";
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
      <SocialProofStats />
      <IdentificationSection />
      <HoooponoponoExplainer />
      <ProductPresentation />
      <ContentCurriculum />
      <WhatYouRelease />
      <ComparisonTable />
      <ProgramPhases />
      <BonusList />
      <MidPageCTA onCTAClick={handleCheckout} />
      <PricingSection onCTAClick={handleCheckout} />
      <UrgencyCounter />
      <TestimonialsSection />
      <AboutAuthorSection />
      <GuaranteeSection />
      <FAQSection />
      <DisclaimerFooter />
    </div>
  );
};

export default Index;
