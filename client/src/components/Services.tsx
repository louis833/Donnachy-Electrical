import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, Building, Settings, CreditCard } from "lucide-react";
import { useLocation } from "wouter";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";
import { LazyImage } from "@/components/ui/lazy-image";
import { motion } from "framer-motion";
import residentialImage from "@assets/generated_images/Residential_home_with_solar_panels_50e3ea30.png";
import commercialImage from "@assets/generated_images/Commercial_building_solar_installation_7799d776.png";
import maintenanceImage from "@assets/generated_images/Solar_panel_maintenance_service_cbd358e0.png";
import financeImage from "@assets/stock_images/solar_panel_financin_c9d55263.jpg";

const services = [
  {
    id: 'residential',
    title: 'Residential Installation',
    description: 'We design and install rooftop solar systems that fit your home and budget.',
    icon: Home,
    image: residentialImage,
    path: '/residential',
  },
  {
    id: 'commercial',
    title: 'Commercial Installation',
    description: 'Tailored solar solutions for offices, retail and industrial sites.',
    icon: Building,
    image: commercialImage,
    path: '/commercial',
  },
  {
    id: 'maintenance',
    title: 'Maintenance & Support',
    description: 'Keep your system at peak performance with inspections and repairs.',
    icon: Settings,
    image: maintenanceImage,
    path: '/maintenance',
  },
  {
    id: 'financing',
    title: 'Financing Options',
    description: 'Flexible pathways to go solar sooner. Ask us about current options.',
    icon: CreditCard,
    image: financeImage,
    path: '/financing',
  },
];

export default function Services() {
  const [, navigate] = useLocation();

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <ScrollReveal direction="up" threshold={0.2}>
          <div className="text-center mb-16">
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-black mb-4">
              Our Solar Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From residential rooftops to commercial installations, we provide comprehensive 
              solar solutions backed by 15+ years of experience.
            </p>
          </div>
        </ScrollReveal>

        {/* Services Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8" staggerDelay={0.2}>
          {services.map((service, index) => (
            <StaggerItem
              key={service.id}
              variants={{
                hidden: { y: 50, opacity: 0 },
                visible: { y: 0, opacity: 1 }
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card 
                  className="hover-elevate transition-all duration-300 overflow-hidden h-full"
                  data-testid={`card-service-${service.id}`}
                >
              {/* Service Image */}
              <div className="relative h-48 overflow-hidden">
                <LazyImage 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute top-4 left-4">
                  <div className="bg-white/90 backdrop-blur-sm p-2 rounded-lg">
                    <service.icon size={24} className="text-primary" />
                  </div>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="font-heading font-bold text-xl">
                  {service.title}
                </CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <Button 
                  variant="outline" 
                  className="w-full"
                  data-testid={`button-service-${service.id}`}
                  onClick={() => navigate(service.path)}
                >
                  Learn More
                </Button>
              </CardContent>
                </Card>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Ready to start your solar journey?
          </p>
          <Button 
            size="lg" 
            className="text-base md:text-lg px-4 md:px-8"
            data-testid="button-services-quote"
            onClick={scrollToContact}
          >
            Get Your Free Quote Today
          </Button>
        </div>
      </div>
    </section>
  );
}