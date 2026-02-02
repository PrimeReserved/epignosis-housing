import ContactHero from "@/components/ContactHero";
import ContactInfo from "@/components/ContactInfo";
import FAQ from "@/components/FAQ";
import LocationsSection from "@/components/LocationsSection";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <ContactHero />
      <ContactInfo />
      <LocationsSection />
      <FAQ />
    </main>
  );
}