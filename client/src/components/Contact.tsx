import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Phone, Mail, MapPin, Clock, CheckCircle, AlertCircle } from "lucide-react";
import { trackFormSubmit, trackPhoneClick, trackEmailClick } from "@/lib/analytics";

interface ApiError {
  success: false;
  message: string;
  errors?: Array<{
    field: string;
    message: string;
  }>;
}

interface ApiSuccess {
  success: true;
  message: string;
  id: string;
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));

    // Clear field error and status messages when user starts typing
    if (fieldErrors[field]) {
      setFieldErrors(prev => {
        const { [field]: _, ...rest } = prev;
        return rest;
      });
    }

    // Reset status to hide stale success/error messages
    if (submitStatus !== 'idle') {
      setSubmitStatus('idle');
      setStatusMessage('');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setFieldErrors({});

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json() as ApiSuccess | ApiError;

      if (result.success) {
        setSubmitStatus('success');
        setStatusMessage(result.message);

        // Track successful form submission
        trackFormSubmit('contact_form', {
          service_type: formData.serviceType,
          has_phone: !!formData.phone,
        });

        // Clear form on success
        setFormData({
          name: '',
          email: '',
          phone: '',
          serviceType: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
        setStatusMessage(result.message);

        // Set field-specific errors if provided
        if (result.errors) {
          const errors: Record<string, string> = {};
          result.errors.forEach(error => {
            errors[error.field] = error.message;
          });
          setFieldErrors(errors);
        }
      }
    } catch (error) {
      console.error('Contact form submission error:', error);
      setSubmitStatus('error');
      setStatusMessage('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      id: 'phone',
      icon: Phone,
      label: 'Ai Receptionist',
      value: '03 6159 6392',
      link: 'tel:+61361596392',
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
      value: 'Contact 24/7',
      link: null,
    },
  ];

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle className="font-heading font-bold text-xl">
                Request Your Quote
              </CardTitle>
            </CardHeader>
            <CardContent>
              {/* Success/Error Messages */}
              {submitStatus === 'success' && (
                <Alert className="mb-6 border-green-200 bg-green-50">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <AlertDescription className="text-green-800">
                    {statusMessage}
                  </AlertDescription>
                </Alert>
              )}

              {submitStatus === 'error' && (
                <Alert variant="destructive" className="mb-6">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>
                    {statusMessage}
                  </AlertDescription>
                </Alert>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    autoComplete="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    required
                    data-testid="input-name"
                    placeholder="Enter your full name"
                    className={fieldErrors.name ? "border-red-500 focus-visible:ring-red-500" : ""}
                  />
                  {fieldErrors.name && (
                    <p className="text-sm text-red-600 mt-1">{fieldErrors.name}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    name="email"
                    autoComplete="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    required
                    data-testid="input-email"
                    placeholder="your@email.com"
                    className={fieldErrors.email ? "border-red-500 focus-visible:ring-red-500" : ""}
                  />
                  {fieldErrors.email && (
                    <p className="text-sm text-red-600 mt-1">{fieldErrors.email}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    autoComplete="tel"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    data-testid="input-phone"
                    placeholder="0400 000 000"
                    className={fieldErrors.phone ? "border-red-500 focus-visible:ring-red-500" : ""}
                  />
                  {fieldErrors.phone && (
                    <p className="text-sm text-red-600 mt-1">{fieldErrors.phone}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="serviceType">Service Type *</Label>
                  <Select
                    value={formData.serviceType}
                    onValueChange={(value) => handleInputChange('serviceType', value)}
                    name="serviceType"
                  >
                    <SelectTrigger
                      id="serviceType"
                      data-testid="select-service"
                      className={fieldErrors.serviceType ? "border-red-500 focus-visible:ring-red-500" : ""}
                    >
                      <SelectValue placeholder="Select service type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="electrical">General Electrical</SelectItem>
                      <SelectItem value="heat-pumps">Heat Pumps & Ducted Systems</SelectItem>
                      <SelectItem value="solar">Solar & Batteries</SelectItem>
                      <SelectItem value="maintenance">Maintenance & Repairs</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  {fieldErrors.serviceType && (
                    <p className="text-sm text-red-600 mt-1">{fieldErrors.serviceType}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    required
                    data-testid="textarea-message"
                    placeholder="Tell us about your solar needs, property details, or any questions you have..."
                    rows={4}
                    className={fieldErrors.message ? "border-red-500 focus-visible:ring-red-500" : ""}
                  />
                  {fieldErrors.message && (
                    <p className="text-sm text-red-600 mt-1">{fieldErrors.message}</p>
                  )}
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
                          className="text-muted-foreground hover:text-primary transition-colors break-all sm:break-normal"
                          data-testid={`link-${item.id}`}
                          onClick={() => {
                            if (item.id === 'phone') {
                              trackPhoneClick(item.value, 'contact_section');
                            } else if (item.id === 'email') {
                              trackEmailClick(item.value, 'contact_section');
                            }
                          }}
                        >
                          {item.value}
                        </a>
                      ) : (
                        <div className="text-muted-foreground break-all sm:break-normal">
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