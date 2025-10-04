import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import logo from "@assets/Gemini_Generated_Image_9imgn09imgn09img_1759615989471.png";

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
            <img 
              src={logo} 
              alt="Donnachy Electrical" 
              className="h-[200px] md:h-[240px] w-auto"
              data-testid="logo-header"
            />
          </motion.div>

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

          {/* CTA Button */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Button 
              size="default"
              data-testid="button-quote"
              onClick={scrollToContact}
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