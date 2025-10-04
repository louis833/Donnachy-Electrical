import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Home, Battery, Shield, DollarSign, Phone } from "lucide-react";
import { useLocation } from "wouter";
import residentialImage from "@assets/generated_images/Residential_home_with_solar_panels_50e3ea30.png";

export default function ResidentialService() {
  const [, navigate] = useLocation();

  const features = [
    {
      icon: Home,
      title: "Custom Home Design",
      description: "Tailored solar solutions that complement your home's architecture and maximize energy production."
    },
    {
      icon: Battery,
      title: "Battery Storage Options",
      description: "Store excess energy for evening use or power outages with our premium battery systems."
    },
    {
      icon: Shield,
      title: "15+ Years Experience",
      description: "Proven track record with over 1,200 residential solar panels installed across Tasmania."
    },
    {
      icon: DollarSign,
      title: "Maximum Savings",
      description: "Reduce your electricity bills by up to 90% with our efficiently designed residential systems."
    }
  ];

  const process = [
    {
      step: "1",
      title: "Free Home Assessment",
      description: "We'll visit your property to assess roof condition, shading, and energy needs."
    },
    {
      step: "2", 
      title: "Custom System Design",
      description: "Our CEC-accredited designers create a system optimized for your home and budget."
    },
    {
      step: "3",
      title: "Professional Installation",
      description: "Certified installers complete the work efficiently with minimal disruption to your daily routine."
    },
    {
      step: "4",
      title: "System Commissioning",
      description: "We test and optimize your system, then provide comprehensive training on monitoring and maintenance."
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
          style={{ backgroundImage: `url(${residentialImage})` }}
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
                <Home size={32} className="text-white" />
              </div>
              <span className="text-white/80 text-lg font-medium">Residential Services</span>
            </div>

            <h1 className="font-heading font-extrabold text-4xl md:text-6xl text-white mb-6 leading-tight">
              Solar Power for Your Home
            </h1>
            
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Transform your home into a clean energy powerhouse with our premium residential solar installations. 
              Save money, increase property value, and reduce your carbon footprint.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="text-lg px-8"
                onClick={scrollToContact}
                data-testid="button-residential-quote"
              >
                Get Free Quote
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="text-lg px-8 bg-white/10 text-white border-white/30 backdrop-blur-sm hover:bg-white/20"
                onClick={() => navigate('/maintenance')}
                data-testid="button-residential-maintenance"
              >
                <Phone className="mr-2 h-4 w-4" />
                Call: 0409 820 219
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
              Why Choose Residential Solar?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our residential solar solutions offer unmatched value, reliability, and performance for Tasmanian homeowners.
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

      {/* Installation Process */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-black mb-4">
              Our Installation Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From initial consultation to system commissioning, we guide you through every step of your solar journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={step.step} className="text-center">
                <div className="relative mb-6">
                  <div className="mx-auto w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold">
                    {step.step}
                  </div>
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gray-300 -translate-y-0.5"></div>
                  )}
                </div>
                <h3 className="font-heading font-bold text-lg mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-black mb-6">
                Residential Solar Benefits
              </h2>
              
              <div className="space-y-4 mb-8">
                {[
                  "Reduce electricity bills by up to 90%",
                  "Increase property value", 
                  "Government rebates and feed-in tariffs available",
                  "25-year warranty on premium panels",
                  "Professional monitoring and maintenance support",
                  "Clean energy reduces carbon footprint"
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
                  data-testid="button-residential-benefits-quote"
                >
                  Get Your Free Quote
                </Button>
                <Button 
                  variant="outline"
                  size="lg"
                  onClick={() => navigate('/financing')}
                  data-testid="button-residential-financing"
                >
                  Learn About Financing
                </Button>
              </div>
            </div>

            <div>
              <Card className="p-8 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
                <CardHeader className="p-0 mb-6">
                  <CardTitle className="font-heading font-bold text-2xl text-center">
                    Typical Residential System
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="font-medium">System Size:</span>
                      <span>9.8kW (20 panels)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Annual Generation:</span>
                      <span>~15,400 kWh</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Annual Savings:</span>
                      <span>~$3,100</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Payback Period:</span>
                      <span>4-5 years</span>
                    </div>
                    <div className="border-t pt-4">
                      <Button 
                        className="w-full text-lg font-bold"
                        size="lg"
                        onClick={scrollToContact}
                        data-testid="button-residential-quote"
                      >
                        Request Quote
                      </Button>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-4 text-center">
                    Based on 50% self-consumption, 50% export with 5kW limit. Aurora Energy rates. Quote varies by location and requirements.
                  </p>
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
            Ready to Go Solar?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join our many satisfied customers who have made the switch to clean, affordable solar energy.
          </p>
          <Button 
            size="lg"
            variant="secondary"
            className="text-lg px-8"
            onClick={scrollToContact}
            data-testid="button-residential-cta"
          >
            Get Your Free Assessment Today
          </Button>
        </div>
      </section>
    </div>
  );
}