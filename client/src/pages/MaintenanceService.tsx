import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Settings, Shield, Wrench, Calendar, AlertTriangle, Phone } from "lucide-react";
import { useLocation } from "wouter";
import maintenanceImage from "@assets/generated_images/Solar_panel_maintenance_service_cbd358e0.png";

export default function MaintenanceService() {
  const [, navigate] = useLocation();

  const services = [
    {
      icon: Settings,
      title: "System Health Checks",
      description: "Comprehensive annual inspections to ensure optimal performance and identify potential issues early."
    },
    {
      icon: Wrench,
      title: "Preventive Maintenance",
      description: "Regular cleaning, component checks, and minor adjustments to maximize system lifespan."
    },
    {
      icon: AlertTriangle,
      title: "Emergency Repairs",
      description: "24/7 emergency support for system failures, storm damage, or unexpected performance issues."
    },
    {
      icon: Shield,
      title: "Warranty Support",
      description: "Full warranty claim management and liaison with manufacturers for covered repairs."
    }
  ];

  const plans = [
    {
      name: "Basic Care",
      price: "$199/year",
      features: [
        "Annual system inspection",
        "Performance monitoring report", 
        "Basic cleaning (ground level)",
        "Electrical connection check",
        "Priority booking for repairs"
      ],
      recommended: false
    },
    {
      name: "Complete Care",
      price: "$399/year", 
      features: [
        "Bi-annual system inspection",
        "Professional panel cleaning",
        "Inverter health monitoring",
        "Electrical safety testing",
        "Emergency repair callouts",
        "Warranty claim management"
      ],
      recommended: true
    },
    {
      name: "Premium Care",
      price: "$699/year",
      features: [
        "Quarterly system inspections",
        "Professional panel cleaning (2x/year)",
        "Real-time monitoring setup",
        "Preventive component replacement",
        "24/7 emergency support",
        "System performance optimization",
        "Annual energy efficiency report"
      ],
      recommended: false
    }
  ];

  const issues = [
    {
      problem: "Reduced Energy Production",
      causes: "Dirty panels, shading, component failure",
      solution: "Professional cleaning, system diagnosis, component replacement"
    },
    {
      problem: "System Not Working",
      causes: "Inverter failure, grid disconnection, electrical fault",
      solution: "Emergency diagnosis, component repair/replacement, grid reconnection"
    },
    {
      problem: "Monitoring Issues",
      causes: "Communication errors, sensor faults, software problems",
      solution: "System reconfiguration, sensor replacement, monitoring setup"
    },
    {
      problem: "Storm Damage",
      causes: "Panel damage, mounting issues, electrical damage", 
      solution: "Damage assessment, insurance liaison, system restoration"
    }
  ];

  const scrollToContact = () => {
    navigate('/');
    setTimeout(() => {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="absolute inset-0 bg-black/40"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${maintenanceImage})` }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <Button 
              variant="secondary"
              size="sm"
              className="mb-6"
              onClick={() => navigate('/')}
              data-testid="button-back-home"
            >
              ← Back to Home
            </Button>
            
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-primary/20 backdrop-blur-sm p-3 rounded-lg">
                <Settings size={32} className="text-white" />
              </div>
              <span className="text-white/80 text-lg font-medium">Maintenance & Support</span>
            </div>

            <h1 className="font-heading font-extrabold text-4xl md:text-6xl text-white mb-6 leading-tight">
              Keep Your Solar System at Peak Performance
            </h1>
            
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Protect your solar investment with our comprehensive maintenance and support services. 
              We keep your system running efficiently for years to come.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="text-lg px-8"
                onClick={scrollToContact}
                data-testid="button-maintenance-quote"
              >
                Get Maintenance Quote
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="text-lg px-8 bg-white/10 text-white border-white/30 backdrop-blur-sm hover:bg-white/20"
                data-testid="button-maintenance-emergency"
              >
                <Phone className="mr-2 h-4 w-4" />
                Emergency: 0409 820 219
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-black mb-4">
              Maintenance & Support Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive care to ensure your solar system operates at maximum efficiency throughout its lifespan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <Card key={service.title} className="text-center hover-elevate">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 p-3 rounded-lg w-fit mb-4">
                    <service.icon size={32} className="text-primary" />
                  </div>
                  <CardTitle className="font-heading font-bold text-xl">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Maintenance Plans */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-black mb-4">
              Maintenance Plans
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the right maintenance plan to protect your solar investment and maximize returns.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <Card 
                key={plan.name} 
                className={`relative hover-elevate ${plan.recommended ? 'border-primary border-2' : ''}`}
              >
                {plan.recommended && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <CardHeader className="text-center">
                  <CardTitle className="font-heading font-bold text-xl mb-2">
                    {plan.name}
                  </CardTitle>
                  <div className="text-3xl font-bold text-primary mb-2">
                    {plan.price}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Per residential system
                  </p>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <CheckCircle className="text-primary mt-0.5 flex-shrink-0" size={16} />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className="w-full"
                    variant={plan.recommended ? "default" : "outline"}
                    onClick={scrollToContact}
                    data-testid={`button-plan-${plan.name.toLowerCase().replace(' ', '-')}`}
                  >
                    Choose {plan.name}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Common Issues */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-black mb-4">
              Common Solar System Issues
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We diagnose and resolve all types of solar system problems quickly and efficiently.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {issues.map((issue) => (
              <Card key={issue.problem} className="hover-elevate">
                <CardHeader>
                  <CardTitle className="font-heading font-bold text-lg flex items-center gap-2">
                    <AlertTriangle className="text-orange-500" size={20} />
                    {issue.problem}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium text-sm text-muted-foreground mb-1">Common Causes:</h4>
                      <p className="text-sm">{issue.causes}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-sm text-muted-foreground mb-1">Our Solution:</h4>
                      <p className="text-sm">{issue.solution}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Maintenance */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-black mb-6">
                Why Choose Our Maintenance?
              </h2>
              
              <div className="space-y-4 mb-8">
                {[
                  "15+ years of solar maintenance experience",
                  "CEC-accredited technicians and electricians",
                  "Comprehensive insurance and safety compliance",
                  "Same-day emergency response (when possible)",
                  "Fixed-price annual maintenance contracts", 
                  "Complete warranty management service",
                  "Performance monitoring and optimization",
                  "Detailed reporting after every service"
                ].map((benefit) => (
                  <div key={benefit} className="flex items-start gap-3">
                    <CheckCircle className="text-primary mt-0.5 flex-shrink-0" size={20} />
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg"
                  onClick={scrollToContact}
                  data-testid="button-maintenance-benefits-quote"
                >
                  Get Maintenance Quote
                </Button>
                <Button 
                  variant="outline"
                  size="lg"
                  onClick={() => navigate('/residential')}
                  data-testid="button-maintenance-installation"
                >
                  New Installation
                </Button>
              </div>
            </div>

            <div>
              <Card className="p-8 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
                <CardHeader className="p-0 mb-6">
                  <CardTitle className="font-heading font-bold text-2xl text-center">
                    <Calendar className="mx-auto mb-3" size={32} />
                    Maintenance Statistics
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="space-y-4 text-center">
                    <div>
                      <div className="text-3xl font-bold text-primary">15-20%</div>
                      <div className="text-sm text-muted-foreground">Performance improvement with regular maintenance</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-primary">2-3x</div>
                      <div className="text-sm text-muted-foreground">Longer system lifespan with proper care</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-primary">$500+</div>
                      <div className="text-sm text-muted-foreground">Average annual savings from maintained systems</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-primary">24/7</div>
                      <div className="text-sm text-muted-foreground">Emergency support availability</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-heading font-extrabold text-3xl md:text-4xl mb-6">
            Protect Your Solar Investment
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Don't let poor maintenance reduce your solar returns. Keep your system running at peak performance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              variant="secondary"
              className="text-lg px-8"
              onClick={scrollToContact}
              data-testid="button-maintenance-cta"
            >
              Schedule Maintenance Today
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="text-lg px-8 bg-white/10 text-white border-white/30 backdrop-blur-sm hover:bg-white/20"
              onClick={() => navigate('/commercial')}
              data-testid="button-maintenance-commercial"
            >
              Commercial Maintenance
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}