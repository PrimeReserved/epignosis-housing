import Hero from "@/components/Hero";
import PropertyInquirySection from "@/components/PropertyInquirySection";
import Services from "@/components/Services";
import PropertyShowcase from "@/components/PropertyShowcase";
import FAQ from "@/components/FAQ";
import TrustIndicators from "@/components/TrustIndicators";
import WhyChooseUs from "@/components/Whychooseus";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <PropertyInquirySection />
      <TrustIndicators />
      <WhyChooseUs />
      <Services />
      <PropertyShowcase />
      <FAQ />
    </main>
  );
}