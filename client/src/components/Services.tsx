import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Zap, ThermometerSun, Sun } from "lucide-react";
import { useLocation } from "wouter";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";
import { LazyImage } from "@/components/ui/lazy-image";
import { motion } from "framer-motion";
import residentialImage from "@assets/generated_images/Residential_home_with_solar_panels_50e3ea30.png";
import commercialImage from "@assets/generated_images/Commercial_building_solar_installation_7799d776.png";
import maintenanceImage from "@assets/generated_images/Solar_panel_maintenance_service_cbd358e0.png";

const services = [
  {
    id: 'electrical',
    title: 'General Electrical',
    description: 'From new installations to repairs and upgrades, we handle all your electrical needs with precision and care.',
    icon: Zap,
    image: commercialImage,
    path: '/electrical',
    features: ['New Installations', 'Repairs & Upgrades', 'Switchboard Work', 'Safety Inspections'],
  },
  {
    id: 'heat-pumps',
    title: 'Heat Pumps & Ducted Systems',
    description: 'Energy-efficient heating and cooling solutions to keep your home comfortable year-round.',
    icon: ThermometerSun,
    image: maintenanceImage,
    path: '/heat-pumps',
    features: ['Heat Pump Installation', 'Ducted Heating', 'Ducted Cooling', 'System Maintenance'],
  },
  {
    id: 'solar',
    title: 'Solar & Batteries',
    description: 'CEC accredited solar panel and battery storage installations for homes and businesses.',
    icon: Sun,
    image: residentialImage,
    path: '/solar',
    features: ['Solar Panels', 'Battery Storage', 'System Monitoring', 'Maintenance & Repairs'],
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
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Complete electrical, heating, cooling and solar solutions for homes and businesses 
              across Tasmania. Backed by 15+ years of trusted experience.
            </p>
          </div>
        </ScrollReveal>

        {/* Services Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8" staggerDelay={0.2}>
          {services.map((service) => (
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
                  className="hover-elevate transition-all duration-300 overflow-hidden h-full flex flex-col"
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

              <CardContent className="flex-1 flex flex-col">
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </p>
                
                {/* Feature List */}
                <ul className="space-y-2 mb-6 flex-1">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
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
            Need help with an electrical, heating or solar project?
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
