import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { motion } from "framer-motion";

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
            <h1 className="font-heading font-extrabold text-xl md:text-2xl text-black">
              Donnachy Electrical
            </h1>
            <span className="hidden sm:inline ml-2 text-muted-foreground font-medium">
              – Solar & Battery Specialists
            </span>
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

          {/* CTA Buttons */}
          <div className="flex items-center gap-4">
            <motion.a 
              href="tel:+61409820219" 
              className="hidden lg:flex items-center gap-2 text-foreground hover:text-primary transition-colors"
              data-testid="link-phone"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                whileHover={{ rotate: 15 }}
                transition={{ duration: 0.2 }}
              >
                <Phone size={18} />
              </motion.div>
              <span className="font-medium">0409 820 219</span>
            </motion.a>
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
      </div>
    </motion.header>
  );
}