import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star, CheckCircle, MapPin } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";
import { motion } from "framer-motion";

const stats = [
  {
    id: 'experience',
    number: '15+',
    label: 'Years of Experience',
    icon: CheckCircle,
  },
  {
    id: 'panels',
    number: '1,200+',
    label: 'Panels Installed',
    icon: CheckCircle,
  },
  {
    id: 'coverage',
    number: '100%',
    label: 'Tasmania Coverage',
    icon: MapPin,
  },
];

const testimonial = {
  text: "They made switching to solar simple and stress-free. My bills dropped fast.",
  author: "Sarah L.",
  location: "Hobart, TAS",
  rating: 5,
};

export default function Proof() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <ScrollReveal direction="up" threshold={0.2}>
          <div className="text-center mb-16">
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-black mb-4">
              Powering Homes & Businesses Across Tasmania
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our track record speaks for itself. Join hundreds of satisfied customers 
              who've made the switch to clean, reliable solar energy.
            </p>
          </div>
        </ScrollReveal>

        {/* Statistics */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16" staggerDelay={0.2}>
          {stats.map((stat) => (
            <StaggerItem
              key={stat.id}
              variants={{
                hidden: { y: 50, opacity: 0, scale: 0.8 },
                visible: { y: 0, opacity: 1, scale: 1 }
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <motion.div
                whileHover={{ y: -10, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="text-center p-8 hover-elevate" data-testid={`card-stat-${stat.id}`}>
                  <CardContent className="p-0">
                    <motion.div 
                      className="mb-4"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <stat.icon size={48} className="mx-auto text-primary" />
                    </motion.div>
                    <div className="font-heading font-extrabold text-4xl md:text-5xl text-black mb-2">
                      {stat.number}
                    </div>
                    <div className="text-lg font-medium text-muted-foreground">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Testimonial */}
        <ScrollReveal direction="up" delay={0.4} threshold={0.2}>
          <div className="max-w-4xl mx-auto">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="bg-gray-50 border-none p-8 md:p-12 hover-elevate" data-testid="card-testimonial">
                <CardContent className="p-0">
                  <div className="flex flex-col items-center text-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.6, type: "spring", stiffness: 300 }}
                    >
                      <Quote size={48} className="text-primary mb-6" />
                    </motion.div>
                    
                    <blockquote className="text-xl md:text-2xl text-foreground mb-6 font-medium leading-relaxed">
                      "{testimonial.text}"
                    </blockquote>
                    
                    {/* Star Rating */}
                    <motion.div 
                      className="flex items-center gap-1 mb-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.8 }}
                    >
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 1 + (i * 0.1), type: "spring", stiffness: 300 }}
                          whileHover={{ scale: 1.2 }}
                        >
                          <Star 
                            size={20} 
                            className="text-primary fill-current" 
                          />
                        </motion.div>
                      ))}
                    </motion.div>
                    
                    <div className="text-lg">
                      <span className="font-semibold text-foreground">{testimonial.author}</span>
                      <span className="text-muted-foreground mx-2">•</span>
                      <span className="text-muted-foreground">{testimonial.location}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </ScrollReveal>

        {/* Trust Badges */}
        <ScrollReveal direction="fade" delay={0.6} threshold={0.2}>
          <div className="mt-16 text-center">
            <motion.div 
              className="inline-flex items-center gap-4 px-6 py-3 bg-gray-50 rounded-lg hover-elevate"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <CheckCircle size={24} className="text-primary" />
              </motion.div>
              <span className="font-medium text-foreground">
                CEC Accredited Installer & Designer
              </span>
              <span className="text-muted-foreground">•</span>
              <span className="font-medium text-foreground">
                Fully Licensed & Insured
              </span>
            </motion.div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}