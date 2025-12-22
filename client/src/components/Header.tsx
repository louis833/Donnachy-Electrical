import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "wouter";
import logo from "@assets/donnachy_logo_hero (1)_1759617981476.png";
import { trackCTAClick } from "@/lib/analytics";

export default function Header() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.header 
      className="bg-white border-b border-gray-200 sticky top-0 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div 
            className="flex items-center"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Link href="/">
              <img 
                src={logo} 
                alt="Donnachy Electrical" 
                className="h-12 md:h-16 w-auto cursor-pointer"
                data-testid="logo-header"
              />
            </Link>
          </motion.div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link 
              href="/electrical" 
              className="text-foreground hover:text-primary font-medium transition-colors"
              data-testid="link-electrical"
            >
              Electrical
            </Link>
            <Link 
              href="/heat-pumps" 
              className="text-foreground hover:text-primary font-medium transition-colors"
              data-testid="link-heatpumps"
            >
              Heat Pumps
            </Link>
            <Link 
              href="/solar" 
              className="text-foreground hover:text-primary font-medium transition-colors"
              data-testid="link-solar"
            >
              Solar
            </Link>
            <Link 
              href="/about" 
              className="text-foreground hover:text-primary font-medium transition-colors"
              data-testid="link-about"
            >
              About
            </Link>
            <button 
              onClick={scrollToContact}
              className="text-foreground hover:text-primary font-medium transition-colors"
              data-testid="link-contact"
            >
              Contact
            </button>
          </nav>

          {/* CTA Button */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Button 
              size="default"
              data-testid="button-quote"
              onClick={() => {
                trackCTAClick('Request Free Quote', 'header', 'contact_form');
                scrollToContact();
              }}
            >
              <span className="hidden sm:inline">Request Free Quote</span>
              <span className="sm:hidden">Quote</span>
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
}