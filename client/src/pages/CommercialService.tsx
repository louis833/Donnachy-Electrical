import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Building, Zap, TrendingUp, Users, Phone } from "lucide-react";
import { useLocation } from "wouter";
import commercialImage from "@assets/generated_images/Commercial_building_solar_installation_7799d776.png";

export default function CommercialService() {
  const [, navigate] = useLocation();

  const features = [
    {
      icon: Building,
      title: "Large-Scale Systems",
      description: "From small businesses to industrial facilities, we design systems that meet your energy demands."
    },
    {
      icon: Zap,
      title: "Peak Demand Management",
      description: "Reduce peak demand charges and stabilize energy costs with smart solar and battery solutions."
    },
    {
      icon: TrendingUp,
      title: "ROI Optimization",
      description: "Maximize return on investment with systems designed for optimal energy production and savings."
    },
    {
      icon: Users,
      title: "Dedicated Support",
      description: "Ongoing commercial support including monitoring, maintenance, and performance optimization."
    }
  ];

  const sectors = [
    {
      name: "Manufacturing",
      description: "Reduce operational costs and improve sustainability for production facilities."
    },
    {
      name: "Retail & Office",
      description: "Lower overhead costs and demonstrate environmental commitment to customers."
    },
    {
      name: "Agriculture",
      description: "Power irrigation, cooling, and processing equipment with clean solar energy."
    },
    {
      name: "Education",
      description: "Schools and universities can reduce energy costs while teaching sustainability."
    },
    {
      name: "Healthcare",
      description: "Reliable backup power and reduced operating costs for medical facilities."
    },
    {
      name: "Hospitality",
      description: "Hotels and restaurants can cut energy costs and attract eco-conscious customers."
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
          style={{ backgroundImage: `url(${commercialImage})` }}
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
                <Building size={32} className="text-white" />
              </div>
              <span className="text-white/80 text-lg font-medium">Commercial Services</span>
            </div>

            <h1 className="font-heading font-extrabold text-4xl md:text-6xl text-white mb-6 leading-tight">
              Solar Solutions for Business
            </h1>
            
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Reduce operating costs, improve cash flow, and demonstrate environmental leadership with 
              commercial solar systems designed for Tasmanian businesses.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="text-lg px-8"
                onClick={scrollToContact}
                data-testid="button-commercial-quote"
              >
                Get Business Quote
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="text-lg px-8 bg-white/10 text-white border-white/30 backdrop-blur-sm hover:bg-white/20"
                onClick={() => navigate('/financing')}
                data-testid="button-commercial-financing"
              >
                <Phone className="mr-2 h-4 w-4" />
                Financing Options
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-black mb-4">
              Commercial Solar Advantages
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our commercial solar solutions deliver measurable results for businesses across Tasmania.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <Card key={feature.title} className="text-center hover-elevate">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 p-3 rounded-lg w-fit mb-4">
                    <feature.icon size={32} className="text-primary" />
                  </div>
                  <CardTitle className="font-heading font-bold text-xl">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Sectors */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-black mb-4">
              Industries We Serve
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tailored solar solutions for diverse commercial and industrial sectors across Tasmania.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sectors.map((sector) => (
              <Card key={sector.name} className="hover-elevate">
                <CardHeader>
                  <CardTitle className="font-heading font-bold text-lg">
                    {sector.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {sector.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits & ROI Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-black mb-6">
                Commercial Solar Benefits
              </h2>
              
              <div className="space-y-4 mb-8">
                {[
                  "Reduce electricity costs by 50-80%",
                  "Lock in energy prices for 25+ years",
                  "Immediate tax benefits and depreciation", 
                  "Improve corporate sustainability credentials",
                  "Increase property value and market appeal",
                  "Generate additional revenue via feed-in tariffs"
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
                  data-testid="button-commercial-benefits-quote"
                >
                  Request ROI Analysis
                </Button>
                <Button 
                  variant="outline"
                  size="lg"
                  onClick={() => navigate('/maintenance')}
                  data-testid="button-commercial-maintenance"
                >
                  Maintenance Plans
                </Button>
              </div>
            </div>

            <div>
              <Card className="p-8 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
                <CardHeader className="p-0 mb-6">
                  <CardTitle className="font-heading font-bold text-2xl text-center">
                    Sample Commercial Project
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="font-medium">System Size:</span>
                      <span>50kW (150 panels)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Annual Generation:</span>
                      <span>~75,000 kWh</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Annual Savings:</span>
                      <span>$18,000-$25,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Payback Period:</span>
                      <span>3-5 years</span>
                    </div>
                    <div className="flex justify-between font-bold text-lg border-t pt-4">
                      <span>System Investment:</span>
                      <span>From $65,000*</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-4 text-center">
                    *After government incentives. Custom quote based on energy usage and site assessment.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-black mb-4">
              Our Commercial Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From initial consultation to commissioning, we manage every aspect of your commercial solar project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                phase: "Planning",
                steps: ["Site assessment & energy audit", "Custom system design", "Permits & approvals", "Financing arrangement"]
              },
              {
                phase: "Installation", 
                steps: ["Project scheduling", "Professional installation", "Grid connection", "System commissioning"]
              },
              {
                phase: "Ongoing Support",
                steps: ["Performance monitoring", "Maintenance programs", "Issue resolution", "System optimization"]
              }
            ].map((phase, index) => (
              <Card key={phase.phase} className="hover-elevate">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-lg font-bold mb-4">
                    {index + 1}
                  </div>
                  <CardTitle className="font-heading font-bold text-xl text-center">
                    {phase.phase}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {phase.steps.map((step) => (
                      <li key={step} className="flex items-start gap-2">
                        <CheckCircle className="text-primary mt-0.5 flex-shrink-0" size={16} />
                        <span className="text-sm text-muted-foreground">{step}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-heading font-extrabold text-3xl md:text-4xl mb-6">
            Power Your Business with Solar
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join forward-thinking Tasmanian businesses that are reducing costs and improving sustainability with commercial solar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              variant="secondary"
              className="text-lg px-8"
              onClick={scrollToContact}
              data-testid="button-commercial-cta"
            >
              Schedule Site Assessment
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="text-lg px-8 bg-white/10 text-white border-white/30 backdrop-blur-sm hover:bg-white/20"
              onClick={() => navigate('/residential')}
              data-testid="button-commercial-residential"
            >
              View Residential Services
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}