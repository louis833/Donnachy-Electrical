import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ThermometerSun, Wind, Snowflake, Flame, Wrench, CheckCircle, ArrowLeft } from "lucide-react";
import { useLocation } from "wouter";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";
import { usePageTracking } from "@/hooks/usePageTracking";

const heatPumpServices = [
  {
    title: "Heat Pump Installation",
    description: "Energy-efficient heat pump systems for year-round comfort and lower energy bills.",
    icon: ThermometerSun,
  },
  {
    title: "Ducted Heating",
    description: "Whole-home ducted heating solutions for consistent warmth throughout your property.",
    icon: Flame,
  },
  {
    title: "Ducted Cooling",
    description: "Efficient ducted air conditioning to keep your home cool during Tasmania's summers.",
    icon: Snowflake,
  },
  {
    title: "Split System Installation",
    description: "Individual room climate control with modern split system air conditioners.",
    icon: Wind,
  },
  {
    title: "System Servicing",
    description: "Regular maintenance to keep your heating and cooling systems running efficiently.",
    icon: Wrench,
  },
  {
    title: "Repairs & Upgrades",
    description: "Fast repairs and system upgrades to improve performance and efficiency.",
    icon: CheckCircle,
  },
];

const benefits = [
  { stat: "Up to 50%", label: "Energy Savings" },
  { stat: "Year-Round", label: "Comfort" },
  { stat: "10+ Years", label: "System Lifespan" },
];

export default function HeatPumpsService() {
  const [, navigate] = useLocation();
  usePageTracking('Heat Pumps');

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-20">
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
                  <ThermometerSun size={32} className="text-primary-foreground" />
                </div>
                <Badge variant="outline" className="text-white border-white/30">
                  Heating & Cooling Specialists
                </Badge>
              </div>
              
              <h1 className="font-heading font-extrabold text-4xl md:text-5xl mb-6">
                Heat Pumps & Ducted Systems
              </h1>
              
              <p className="text-xl text-white/80 max-w-2xl mb-8">
                Energy-efficient heating and cooling solutions for Tasmania's climate. 
                Stay comfortable all year with our expert installation and service.
              </p>
              
              <Button 
                size="lg" 
                onClick={scrollToContact}
                data-testid="button-heatpumps-quote"
              >
                Get a Free Quote
              </Button>
            </ScrollReveal>
          </div>
        </section>

        {/* Benefits Stats */}
        <section className="py-12 bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="grid grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <ScrollReveal key={index} direction="up" delay={index * 0.1}>
                  <div className="text-center">
                    <div className="font-heading font-extrabold text-3xl md:text-4xl text-primary mb-1">
                      {benefit.stat}
                    </div>
                    <div className="text-muted-foreground text-sm">
                      {benefit.label}
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
                  Heating & Cooling Services
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Complete HVAC solutions for homes and businesses across Tasmania.
                </p>
              </div>
            </ScrollReveal>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
              {heatPumpServices.map((service, index) => (
                <StaggerItem
                  key={index}
                  variants={{
                    hidden: { y: 30, opacity: 0 },
                    visible: { y: 0, opacity: 1 }
                  }}
                >
                  <Card className="h-full hover-elevate" data-testid={`card-heatpump-${index}`}>
                    <CardContent className="p-6">
                      <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                        <service.icon size={24} className="text-blue-600" />
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

        {/* Why Heat Pumps */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <ScrollReveal direction="left">
                <h2 className="font-heading font-bold text-3xl mb-6">
                  Why Choose Heat Pumps?
                </h2>
                <div className="space-y-4">
                  {[
                    "Up to 50% more efficient than traditional heating",
                    "Provides both heating and cooling from one system",
                    "Lower running costs and reduced energy bills",
                    "Environmentally friendly with lower carbon emissions",
                    "Quiet operation and minimal maintenance required",
                    "Eligible for government rebates and incentives",
                  ].map((point, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle size={20} className="text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{point}</span>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
              
              <ScrollReveal direction="right">
                <Card className="bg-blue-50 border-blue-100">
                  <CardContent className="p-8">
                    <h3 className="font-heading font-bold text-xl mb-4">
                      Perfect for Tasmania's Climate
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Heat pumps work efficiently even in cold temperatures, making them 
                      ideal for Tasmania's variable climate. Our team will help you choose 
                      the right system for your needs.
                    </p>
                    <Button onClick={scrollToContact} data-testid="button-heatpumps-cta">
                      Discuss Your Requirements
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
