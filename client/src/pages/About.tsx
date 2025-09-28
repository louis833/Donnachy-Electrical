import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Award, Users, MapPin, Phone, Mail } from "lucide-react";
import { useLocation } from "wouter";

export default function About() {
  const [, navigate] = useLocation();

  const values = [
    {
      icon: Award,
      title: "Quality Excellence",
      description: "We use only premium components and maintain the highest installation standards, backed by comprehensive warranties."
    },
    {
      icon: Users,
      title: "Customer First",
      description: "Your satisfaction is our priority. We provide ongoing support and transparent communication throughout your solar journey."
    },
    {
      icon: CheckCircle,
      title: "Proven Expertise",
      description: "CEC-accredited designers and installers with 15+ years of experience and 1,200+ successful installations."
    }
  ];

  const milestones = [
    { year: "2008", event: "Donnachy Electrical founded by Scott Donnachy" },
    { year: "2010", event: "First solar installation completed in Tasmania" },
    { year: "2015", event: "Achieved CEC accreditation for solar design and installation" },
    { year: "2018", event: "Expanded to commercial solar installations" },
    { year: "2020", event: "Added battery storage solutions to service offering" },
    { year: "2023", event: "Reached milestone of 1,200+ panels installed" },
    { year: "2024", event: "Launched comprehensive maintenance programs" }
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
      <section className="py-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Button 
              variant="secondary"
              size="sm"
              className="mb-6"
              onClick={() => navigate('/')}
              data-testid="button-back-home"
            >
              ← Back to Home
            </Button>

            <h1 className="font-heading font-extrabold text-4xl md:text-6xl mb-6 leading-tight">
              About Donnachy Electrical
            </h1>
            
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              For over 15 years, we've been Tasmania's trusted partner for solar and battery solutions, 
              helping homes and businesses harness clean, affordable energy.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="text-lg px-8"
                onClick={scrollToContact}
                data-testid="button-about-quote"
              >
                Get Your Free Quote
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="text-lg px-8 bg-white/10 text-white border-white/30 backdrop-blur-sm hover:bg-white/20"
                onClick={() => navigate('/residential')}
                data-testid="button-about-services"
              >
                Our Services
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-black mb-6">
                Our Story
              </h2>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Donnachy Electrical was founded by Scott Donnachy in 2008 with a simple mission: 
                  to help Tasmanians reduce their energy costs while contributing to a cleaner environment. 
                  What started as a traditional electrical contracting business quickly evolved as we 
                  recognized the enormous potential of solar energy in Tasmania.
                </p>
                
                <p>
                  Over the years, we've grown from a small local business to one of Tasmania's most 
                  trusted solar installers. We've completed over 1,200 residential and commercial 
                  installations across the state, from Hobart to Devonport, and everywhere in between.
                </p>

                <p>
                  Our success is built on a foundation of technical expertise, genuine customer care, 
                  and an unwavering commitment to quality. Every team member is CEC-accredited, and 
                  we maintain the highest standards for both safety and performance.
                </p>

                <p>
                  Today, as energy prices continue to rise and climate concerns grow, we're more 
                  passionate than ever about helping Tasmanians achieve energy independence through 
                  solar power and battery storage solutions.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button 
                  size="lg"
                  onClick={() => navigate('/maintenance')}
                  data-testid="button-about-maintenance"
                >
                  Maintenance Services
                </Button>
                <Button 
                  variant="outline"
                  size="lg"
                  onClick={() => navigate('/commercial')}
                  data-testid="button-about-commercial"
                >
                  Commercial Solutions
                </Button>
              </div>
            </div>

            <div className="space-y-6">
              <Card className="p-6 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
                <div className="text-center">
                  <h3 className="font-heading font-bold text-xl mb-4">By the Numbers</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-3xl font-bold text-primary">15+</div>
                      <div className="text-sm text-muted-foreground">Years Experience</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-primary">1,200+</div>
                      <div className="text-sm text-muted-foreground">Panels Installed</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-primary">100%</div>
                      <div className="text-sm text-muted-foreground">Tasmania Coverage</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-primary">5★</div>
                      <div className="text-sm text-muted-foreground">Customer Rating</div>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="font-heading font-bold text-lg mb-4">Certifications & Accreditations</h3>
                <div className="space-y-3">
                  {[
                    "CEC Accredited Solar Designer",
                    "CEC Accredited Solar Installer", 
                    "Licensed Electrical Contractor (Tasmania)",
                    "Clean Energy Council Member",
                    "Fully Insured & Bonded"
                  ].map((cert) => (
                    <div key={cert} className="flex items-center gap-3">
                      <CheckCircle className="text-primary" size={16} />
                      <span className="text-sm">{cert}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-black mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do, from initial consultation to ongoing support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value) => (
              <Card key={value.title} className="text-center hover-elevate">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 p-4 rounded-lg w-fit mb-4">
                    <value.icon size={32} className="text-primary" />
                  </div>
                  <CardTitle className="font-heading font-bold text-xl">
                    {value.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-black mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-muted-foreground">
              Key milestones in our mission to bring clean energy to Tasmania.
            </p>
          </div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={milestone.year} className="flex items-center gap-6">
                <div className="flex-shrink-0 w-20 text-right">
                  <div className="bg-primary text-white px-3 py-1 rounded-full text-sm font-bold">
                    {milestone.year}
                  </div>
                </div>
                <div className="relative flex-1">
                  <div className="bg-white p-4 rounded-lg shadow-sm border hover-elevate">
                    <p className="text-muted-foreground">{milestone.event}</p>
                  </div>
                  {index < milestones.length - 1 && (
                    <div className="absolute left-[-32px] top-12 w-0.5 h-8 bg-gray-300"></div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-black mb-6">
                Meet Scott Donnachy
              </h2>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
                <p>
                  As the founder and principal of Donnachy Electrical, Scott brings over 15 years 
                  of electrical contracting experience to every solar project. His journey into 
                  renewable energy began with a personal interest in sustainability and grew into 
                  a passion for helping others achieve energy independence.
                </p>
                
                <p>
                  Scott holds CEC accreditation as both a solar designer and installer, ensuring 
                  every system is expertly designed and professionally installed. He personally 
                  oversees all projects and is committed to delivering exceptional results for 
                  every customer.
                </p>

                <p>
                  When he's not designing solar solutions, Scott enjoys exploring Tasmania's 
                  natural beauty with his family and staying current with the latest developments 
                  in renewable energy technology.
                </p>
              </div>

              <div className="space-y-3">
                {[
                  "CEC Accredited Solar Designer & Installer",
                  "Licensed Electrical Contractor (Tasmania)",
                  "15+ Years Electrical Industry Experience",
                  "Specialist in Residential & Commercial Solar"
                ].map((qualification) => (
                  <div key={qualification} className="flex items-center gap-3">
                    <CheckCircle className="text-primary" size={16} />
                    <span className="text-sm">{qualification}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <Card className="p-6 text-center">
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users size={48} className="text-gray-400" />
                </div>
                <h3 className="font-heading font-bold text-xl mb-2">Scott Donnachy</h3>
                <p className="text-muted-foreground mb-4">Founder & Principal Electrician</p>
                
                <div className="space-y-2 text-left">
                  <div className="flex items-center gap-2">
                    <Phone size={16} className="text-primary" />
                    <span className="text-sm">0409 820 219</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail size={16} className="text-primary" />
                    <span className="text-sm">louis@donnachyelectrical.com.au</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} className="text-primary" />
                    <span className="text-sm">Summerhill, Tasmania</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-heading font-extrabold text-3xl md:text-4xl mb-6">
            Ready to Join Our Story?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let us help you become part of Tasmania's clean energy future. Get started with a free consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              variant="secondary"
              className="text-lg px-8"
              onClick={scrollToContact}
              data-testid="button-about-cta"
            >
              Get Your Free Quote
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="text-lg px-8 bg-white/10 text-white border-white/30 backdrop-blur-sm hover:bg-white/20"
              onClick={() => navigate('/financing')}
              data-testid="button-about-financing"
            >
              Financing Options
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}