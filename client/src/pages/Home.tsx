import Header from "../components/Header";
import SEO from "../components/SEO";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Proof from "../components/Proof";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { usePageTracking } from "@/hooks/usePageTracking";

export default function Home() {
  usePageTracking(); // Track scroll depth on home page

  return (
    <div className="min-h-screen">
      <SEO
        title="Donnachy Electrical – Solar & Battery Specialists | Tasmania"
        description="CEC accredited solar & battery installer and designer serving all of Tasmania. 15+ years' experience. Request a free quote today."
      />
      <Header />
      <main>
        <Hero />
        <Services />
        <Proof />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}