import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sun, Battery, Home, Building, Wrench, Monitor, CheckCircle, ArrowLeft } from "lucide-react";
import { useLocation } from "wouter";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";
import { usePageTracking } from "@/hooks/usePageTracking";

const solarServices = [
  {
    title: "Residential Solar",
    description: "Custom designed solar systems for homes, tailored to your energy usage and roof space.",
    icon: Home,
  },
  {
    title: "Commercial Solar",
    description: "Large-scale solar installations for businesses, offices, and industrial facilities.",
    icon: Building,
  },
  {
    title: "Battery Storage",
    description: "Store excess solar energy for use at night or during power outages.",
    icon: Battery,
  },
  {
    title: "System Monitoring",
    description: "Real-time monitoring solutions to track your solar performance and savings.",
    icon: Monitor,
  },
  {
    title: "Maintenance & Repairs",
    description: "Keep your solar system performing at its best with regular servicing.",
    icon: Wrench,
  },
  {
    title: "System Upgrades",
    description: "Add panels, batteries, or upgrade inverters to maximize your solar investment.",
    icon: Sun,
  },
];

const stats = [
  { stat: "1,200+", label: "Panels Installed" },
  { stat: "Up to 90%", label: "Bill Savings" },
  { stat: "25 Years", label: "Panel Warranty" },
];

export default function SolarService() {
  const [, navigate] = useLocation();
  usePageTracking('Solar');

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-amber-600 to-orange-700 text-white py-20">
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
                <div className="bg-white/20 p-3 rounded-lg">
                  <Sun size={32} className="text-white" />
                </div>
                <Badge variant="outline" className="text-white border-white/30">
                  CEC Accredited Installer & Designer
                </Badge>
              </div>
              
              <h1 className="font-heading font-extrabold text-4xl md:text-5xl mb-6">
                Solar & Battery Solutions
              </h1>
              
              <p className="text-xl text-white/90 max-w-2xl mb-8">
                Harness Tasmania's renewable energy with our expert solar panel and 
                battery storage installations. Save money and reduce your carbon footprint.
              </p>
              
              <Button 
                size="lg" 
                className="bg-white text-orange-700 hover:bg-white/90"
                onClick={scrollToContact}
                data-testid="button-solar-quote"
              >
                Get a Free Solar Quote
              </Button>
            </ScrollReveal>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="grid grid-cols-3 gap-8">
              {stats.map((item, index) => (
                <ScrollReveal key={index} direction="up" delay={index * 0.1}>
                  <div className="text-center">
                    <div className="font-heading font-extrabold text-3xl md:text-4xl text-primary mb-1">
                      {item.stat}
                    </div>
                    <div className="text-muted-foreground text-sm">
                      {item.label}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <ScrollReveal direction="up">
              <div className="text-center mb-12">
                <h2 className="font-heading font-bold text-3xl mb-4">
                  Solar & Battery Services
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Complete solar solutions from design to installation and ongoing support.
                </p>
              </div>
            </ScrollReveal>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
              {solarServices.map((service, index) => (
                <StaggerItem
                  key={index}
                  variants={{
                    hidden: { y: 30, opacity: 0 },
                    visible: { y: 0, opacity: 1 }
                  }}
                >
                  <Card className="h-full hover-elevate" data-testid={`card-solar-${index}`}>
                    <CardContent className="p-6">
                      <div className="bg-amber-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                        <service.icon size={24} className="text-amber-600" />
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

        {/* Why Solar */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <ScrollReveal direction="left">
                <h2 className="font-heading font-bold text-3xl mb-6">
                  Why Go Solar with Donnachy?
                </h2>
                <div className="space-y-4">
                  {[
                    "CEC accredited solar installer and system designer",
                    "Quality Tier 1 solar panels with 25-year warranty",
                    "Premium inverters from leading manufacturers",
                    "Custom system design for your specific needs",
                    "Access to government rebates and incentives",
                    "Ongoing maintenance and support services",
                  ].map((point, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle size={20} className="text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{point}</span>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
              
              <ScrollReveal direction="right">
                <Card className="bg-amber-50 border-amber-100">
                  <CardContent className="p-8">
                    <h3 className="font-heading font-bold text-xl mb-4">
                      Ready to Start Saving?
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Get a free, no-obligation quote for your home or business. 
                      We'll assess your energy needs and design the perfect system 
                      to maximize your savings.
                    </p>
                    <Button onClick={scrollToContact} data-testid="button-solar-cta">
                      Request Your Free Quote
                    </Button>
                  </CardContent>
                </Card>
              </ScrollReveal>
            </div>
          </div>
        </section>

        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}
