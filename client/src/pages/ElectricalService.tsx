import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Zap, Shield, Wrench, CheckCircle, Home, Building, ArrowLeft } from "lucide-react";
import { useLocation } from "wouter";
import SEO from "../components/SEO";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";
import { usePageTracking } from "@/hooks/usePageTracking";

const electricalServices = [
  {
    title: "New Installations",
    description: "Complete electrical installations for new builds, renovations, and extensions.",
    icon: Zap,
  },
  {
    title: "Repairs & Upgrades",
    description: "Fix electrical faults, upgrade outdated wiring, and improve your electrical system.",
    icon: Wrench,
  },
  {
    title: "Switchboard Upgrades",
    description: "Modern switchboards with safety switches and surge protection for your home or business.",
    icon: Shield,
  },
  {
    title: "Residential Services",
    description: "Lighting, power points, ceiling fans, smoke alarms, and all home electrical needs.",
    icon: Home,
  },
  {
    title: "Commercial Services",
    description: "Office fit-outs, retail lighting, industrial electrical work, and data cabling.",
    icon: Building,
  },
  {
    title: "Safety Inspections",
    description: "Comprehensive electrical safety checks and compliance certificates.",
    icon: CheckCircle,
  },
];

export default function ElectricalService() {
  const [, navigate] = useLocation();
  usePageTracking('Electrical');

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="General Electrical Services | Donnachy Electrical"
        description="Professional electrical services for homes and businesses. Rewiring, switchboards, lighting, and more by licensed Tasmanian electricians."
      />
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <Button
              variant="ghost"
              className="text-white/80 mb-6"
              onClick={() => navigate('/')}
              data-testid="button-back-home"
            >
              <ArrowLeft size={16} className="mr-2" />
              Back to Home
            </Button>

            <ScrollReveal direction="up">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-primary p-3 rounded-lg">
                  <Zap size={32} className="text-primary-foreground" />
                </div>
                <Badge variant="outline" className="text-white border-white/30">
                  Licensed Electrician
                </Badge>
              </div>

              <h1 className="font-heading font-extrabold text-4xl md:text-5xl mb-6">
                General Electrical Services
              </h1>

              <p className="text-xl text-white/80 max-w-2xl mb-8">
                From simple repairs to complete electrical installations, we provide safe,
                reliable electrical services for homes and businesses across Tasmania.
              </p>

              <Button
                size="lg"
                onClick={scrollToContact}
                data-testid="button-electrical-quote"
              >
                Get a Free Quote
              </Button>
            </ScrollReveal>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <ScrollReveal direction="up">
              <div className="text-center mb-12">
                <h2 className="font-heading font-bold text-3xl mb-4">
                  What We Offer
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Comprehensive electrical services for residential and commercial properties.
                </p>
              </div>
            </ScrollReveal>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
              {electricalServices.map((service, index) => (
                <StaggerItem
                  key={index}
                  variants={{
                    hidden: { y: 30, opacity: 0 },
                    visible: { y: 0, opacity: 1 }
                  }}
                >
                  <Card className="h-full hover-elevate" data-testid={`card-electrical-${index}`}>
                    <CardContent className="p-6">
                      <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                        <service.icon size={24} className="text-primary" />
                      </div>
                      <h3 className="font-heading font-bold text-lg mb-2">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {service.description}
                      </p>
                    </CardContent>
                  </Card>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <ScrollReveal direction="up">
              <div className="text-center mb-12">
                <h2 className="font-heading font-bold text-3xl mb-4">
                  Why Choose Donnachy Electrical?
                </h2>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Licensed & Insured", desc: "Fully licensed electrician with comprehensive insurance coverage." },
                { title: "15+ Years Experience", desc: "Trusted by Tasmanian homes and businesses for over 15 years." },
                { title: "Quality Guaranteed", desc: "All work completed to Australian standards with workmanship guarantee." },
              ].map((item, index) => (
                <ScrollReveal key={index} direction="up" delay={index * 0.2}>
                  <div className="text-center">
                    <CheckCircle size={48} className="mx-auto text-primary mb-4" />
                    <h3 className="font-heading font-bold text-lg mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <Contact />
      </main>

      <Footer />
    </div>
  );
}
