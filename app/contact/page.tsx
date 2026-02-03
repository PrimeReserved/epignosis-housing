import ContactHero from "@/components/ContactHero";
import FAQ from "@/components/FAQ";
import LocationsSection from "@/components/LocationsSection";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <ContactHero />
      <FAQ />
      <LocationsSection />
    </main>
  );
}