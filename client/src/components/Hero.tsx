import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";
import { useLocation } from "wouter";
import heroImage from "@assets/generated_images/Solar_panels_on_residential_roof_4e7740b1.png";

export default function Hero() {
  const [, navigate] = useLocation();

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <section className="relative min-h-[60vh] md:min-h-[80vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-24">
        <div className="max-w-3xl">
          {/* CEC Badge */}
          <div className="mb-6">
            <Badge 
              variant="outline" 
              className="bg-white/10 text-white border-white/20 backdrop-blur-sm text-sm px-4 py-2"
              data-testid="badge-cec"
            >
              <CheckCircle size={16} className="mr-2" />
<span className="hidden sm:inline">CEC Accredited Solar & Battery Installer & Designer</span>
              <span className="sm:hidden">CEC Accredited Installer</span>
            </Badge>
          </div>

          {/* Main Headline */}
          <h1 className="font-heading font-extrabold text-3xl md:text-6xl text-white mb-4 md:mb-6 leading-tight">
            Reliable Solar Panel Installation for Homes & Businesses
          </h1>

          {/* Subtext */}
          <p className="text-lg md:text-2xl text-white/90 mb-6 md:mb-8 font-medium">
            Trusted by homeowners and businesses for over 15 years.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
            <Button 
              size="lg" 
              className="text-base md:text-lg px-6 md:px-8 py-3 md:py-4"
              data-testid="button-hero-quote"
              onClick={scrollToContact}
            >
              Request a Free Quote
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-base md:text-lg px-6 md:px-8 py-3 md:py-4 bg-white/10 text-white border-white/30 backdrop-blur-sm hover:bg-white/20"
              data-testid="button-hero-learn"
              onClick={() => navigate('/about')}
            >
              Learn More
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-8 md:mt-12 flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-2 md:gap-6 text-white/80 text-sm md:text-base">
            <div className="flex items-center gap-2">
              <CheckCircle size={20} className="text-primary" />
              <span className="font-medium">15+ Years Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={20} className="text-primary" />
              <span className="font-medium">1,200+ Panels Installed</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={20} className="text-primary" />
              <span className="font-medium">Tasmania Wide</span>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Sticky CTA */}
      <div className="md:hidden fixed bottom-4 left-2 right-2 z-50">
        <Button 
          size="lg" 
          className="w-full text-lg"
          data-testid="button-mobile-quote"
          onClick={scrollToContact}
        >
          Request Free Quote
        </Button>
      </div>
    </section>
  );
}