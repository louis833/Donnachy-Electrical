import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // todo: remove mock functionality - replace with actual API call
    console.log('Contact form submitted:', formData);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Thank you for your inquiry! We will contact you within 24 hours.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        serviceType: '',
        message: ''
      });
    }, 1000);
  };

  const contactInfo = [
    {
      id: 'phone',
      icon: Phone,
      label: 'Phone',
      value: '0409 820 219',
      link: 'tel:+61409820219',
    },
    {
      id: 'email',
      icon: Mail,
      label: 'Email',
      value: 'scott@donnachyelectrical.com.au',
      link: 'mailto:scott@donnachyelectrical.com.au',
    },
    {
      id: 'address',
      icon: MapPin,
      label: 'Address',
      value: '20 Rene Rd, Summerhill TAS 7250',
      link: 'https://maps.google.com/?q=20+Rene+Rd+Summerhill+TAS+7250',
    },
    {
      id: 'hours',
      icon: Clock,
      label: 'Business Hours',
      value: 'Mon-Fri: 8:00 AM - 5:00 PM',
      link: null,
    },
  ];

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-black mb-4">
            Get Your Free Solar Quote
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to start saving with solar? Contact us today for a personalized quote 
            and consultation. We're here to help you make the switch to clean energy.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle className="font-heading font-bold text-xl">
                Request Your Quote
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    required
                    data-testid="input-name"
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    required
                    data-testid="input-email"
                    placeholder="your@email.com"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    data-testid="input-phone"
                    placeholder="0400 000 000"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="serviceType">Service Type *</Label>
                  <Select 
                    value={formData.serviceType} 
                    onValueChange={(value) => handleInputChange('serviceType', value)}
                  >
                    <SelectTrigger data-testid="select-service">
                      <SelectValue placeholder="Select service type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="residential">Residential Installation</SelectItem>
                      <SelectItem value="commercial">Commercial Installation</SelectItem>
                      <SelectItem value="maintenance">Maintenance & Support</SelectItem>
                      <SelectItem value="financing">Financing Options</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    required
                    data-testid="textarea-message"
                    placeholder="Tell us about your solar needs, property details, or any questions you have..."
                    rows={4}
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full text-lg"
                  disabled={isSubmitting}
                  data-testid="button-submit"
                >
                  {isSubmitting ? 'Sending...' : 'Send Quote Request'}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="font-heading font-bold text-xl">
                  Get In Touch
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((item) => (
                  <div key={item.id} className="flex items-start gap-4" data-testid={`contact-${item.id}`}>
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <item.icon size={20} className="text-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground mb-1">
                        {item.label}
                      </div>
                      {item.link ? (
                        <a 
                          href={item.link}
                          className="text-muted-foreground hover:text-primary transition-colors"
                          data-testid={`link-${item.id}`}
                        >
                          {item.value}
                        </a>
                      ) : (
                        <div className="text-muted-foreground">
                          {item.value}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Service Area */}
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-6">
                <div className="text-center">
                  <MapPin size={32} className="mx-auto text-primary mb-3" />
                  <h3 className="font-heading font-bold text-lg text-foreground mb-2">
                    Service Area
                  </h3>
                  <p className="text-muted-foreground">
                    Servicing all of Tasmania's solar & battery needs.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}