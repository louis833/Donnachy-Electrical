import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star, CheckCircle, MapPin } from "lucide-react";

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
        <div className="text-center mb-16">
          <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-black mb-4">
            Powering Homes & Businesses Across Tasmania
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our track record speaks for itself. Join hundreds of satisfied customers 
            who've made the switch to clean, reliable solar energy.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat) => (
            <Card key={stat.id} className="text-center p-8" data-testid={`card-stat-${stat.id}`}>
              <CardContent className="p-0">
                <div className="mb-4">
                  <stat.icon size={48} className="mx-auto text-primary" />
                </div>
                <div className="font-heading font-extrabold text-4xl md:text-5xl text-black mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-medium text-muted-foreground">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testimonial */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gray-50 border-none p-8 md:p-12" data-testid="card-testimonial">
            <CardContent className="p-0">
              <div className="flex flex-col items-center text-center">
                <Quote size={48} className="text-primary mb-6" />
                
                <blockquote className="text-xl md:text-2xl text-foreground mb-6 font-medium leading-relaxed">
                  "{testimonial.text}"
                </blockquote>
                
                {/* Star Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={20} 
                      className="text-primary fill-current" 
                    />
                  ))}
                </div>
                
                <div className="text-lg">
                  <span className="font-semibold text-foreground">{testimonial.author}</span>
                  <span className="text-muted-foreground mx-2">•</span>
                  <span className="text-muted-foreground">{testimonial.location}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Trust Badges */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 px-6 py-3 bg-gray-50 rounded-lg">
            <CheckCircle size={24} className="text-primary" />
            <span className="font-medium text-foreground">
              CEC Accredited Installer & Designer
            </span>
            <span className="text-muted-foreground">•</span>
            <span className="font-medium text-foreground">
              Fully Licensed & Insured
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}