import Header from "../components/Header";
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