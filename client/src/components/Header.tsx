import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="font-heading font-extrabold text-xl md:text-2xl text-black">
              Donnachy Electrical
            </h1>
            <span className="hidden sm:inline ml-2 text-muted-foreground font-medium">
              – Solar & Battery Specialists
            </span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="#services" 
              className="text-foreground hover:text-primary font-medium transition-colors"
              data-testid="link-services"
            >
              Services
            </a>
            <a 
              href="#about" 
              className="text-foreground hover:text-primary font-medium transition-colors"
              data-testid="link-about"
            >
              About
            </a>
            <a 
              href="#contact" 
              className="text-foreground hover:text-primary font-medium transition-colors"
              data-testid="link-contact"
            >
              Contact
            </a>
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center gap-4">
            <a 
              href="tel:+61409820219" 
              className="hidden lg:flex items-center gap-2 text-foreground hover:text-primary transition-colors"
              data-testid="link-phone"
            >
              <Phone size={18} />
              <span className="font-medium">0409 820 219</span>
            </a>
            <Button 
              size="default"
              data-testid="button-quote"
              onClick={() => console.log('Quote request clicked')}
            >
              <span className="hidden sm:inline">Request Free Quote</span>
              <span className="sm:hidden">Quote</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}