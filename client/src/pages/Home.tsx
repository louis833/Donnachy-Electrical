import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Proof from "../components/Proof";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
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