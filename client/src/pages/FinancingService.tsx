import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, CreditCard, Calculator, TrendingUp, DollarSign, Phone } from "lucide-react";
import { useLocation } from "wouter";
import financeImage from "@assets/generated_images/Solar_financing_consultation_eb868e8d.png";

export default function FinancingService() {
  const [, navigate] = useLocation();

  const options = [
    {
      icon: CreditCard,
      title: "Solar Loans",
      description: "Low-interest financing options with flexible repayment terms to spread the cost over time."
    },
    {
      icon: DollarSign,
      title: "Government Rebates",
      description: "Access federal and state incentives that can reduce your upfront costs by thousands."
    },
    {
      icon: TrendingUp,
      title: "Power Purchase Agreements",
      description: "Install solar with no upfront cost and pay for the power at reduced rates."
    },
    {
      icon: Calculator,
      title: "Custom Payment Plans",
      description: "Tailored financing solutions that work with your budget and cash flow requirements."
    }
  ];

  const rebates = [
    {
      name: "Federal STC Rebate",
      description: "Small-scale Technology Certificates reduce system cost",
      saving: "Up to $3,500",
      eligibility: "Systems up to 100kW capacity"
    },
    {
      name: "Tasmanian Feed-in Tariff",
      description: "Earn money for excess solar power exported to grid",
      saving: "8-10c per kWh",
      eligibility: "All residential & small commercial systems"
    },
    {
      name: "Battery Rebate (Tas)",
      description: "Government rebate for home battery storage systems",
      saving: "Up to $2,000",
      eligibility: "Tasmanian residents with solar systems"
    },
    {
      name: "Business Incentives",
      description: "Instant asset write-off and depreciation benefits",
      saving: "30-45% tax offset",
      eligibility: "Businesses under turnover thresholds"
    }
  ];

  const examples = [
    {
      scenario: "Young Family",
      systemSize: "6.6kW System",
      totalCost: "$9,500",
      afterRebate: "$6,500",
      monthlyPayment: "$145/month",
      monthlySaving: "$280/month",
      netBenefit: "+$135/month"
    },
    {
      scenario: "Retirees",
      systemSize: "5kW System", 
      totalCost: "$8,200",
      afterRebate: "$5,500",
      monthlyPayment: "$0 (paid cash)",
      monthlySaving: "$220/month",
      netBenefit: "+$220/month"
    },
    {
      scenario: "Small Business",
      systemSize: "20kW System",
      totalCost: "$28,000",
      afterRebate: "$21,000",
      monthlyPayment: "$420/month",
      monthlySaving: "$850/month",
      netBenefit: "+$430/month"
    }
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
      <section className="relative py-24 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="absolute inset-0 bg-black/40"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${financeImage})` }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <Button 
              variant="secondary"
              size="sm"
              className="mb-6"
              onClick={() => navigate('/')}
              data-testid="button-back-home"
            >
              ← Back to Home
            </Button>
            
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-primary/20 backdrop-blur-sm p-3 rounded-lg">
                <CreditCard size={32} className="text-white" />
              </div>
              <span className="text-white/80 text-lg font-medium">Financing Options</span>
            </div>

            <h1 className="font-heading font-extrabold text-4xl md:text-6xl text-white mb-6 leading-tight">
              Make Solar Affordable Today
            </h1>
            
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Don't let upfront costs prevent you from going solar. Explore flexible financing options 
              and government rebates that make clean energy accessible for everyone.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="text-lg px-8"
                onClick={scrollToContact}
                data-testid="button-financing-quote"
              >
                Get Financing Quote
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="text-lg px-8 bg-white/10 text-white border-white/30 backdrop-blur-sm hover:bg-white/20"
                data-testid="button-financing-consultation"
              >
                <Phone className="mr-2 h-4 w-4" />
                Free Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Financing Options */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-black mb-4">
              Financing Options Available
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Multiple pathways to solar ownership, from traditional loans to innovative financing solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {options.map((option) => (
              <Card key={option.title} className="text-center hover-elevate">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 p-3 rounded-lg w-fit mb-4">
                    <option.icon size={32} className="text-primary" />
                  </div>
                  <CardTitle className="font-heading font-bold text-xl">
                    {option.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {option.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Government Rebates */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-black mb-4">
              Available Rebates & Incentives
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Take advantage of government programs designed to make solar more affordable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {rebates.map((rebate) => (
              <Card key={rebate.name} className="hover-elevate">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="font-heading font-bold text-lg">
                      {rebate.name}
                    </CardTitle>
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-bold">
                      {rebate.saving}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    {rebate.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="text-primary" size={16} />
                    <span className="text-sm text-muted-foreground">
                      {rebate.eligibility}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Real Examples */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-black mb-4">
              Real Customer Examples
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See how different customers are saving money with various financing options.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {examples.map((example) => (
              <Card key={example.scenario} className="hover-elevate">
                <CardHeader>
                  <CardTitle className="font-heading font-bold text-lg text-center">
                    {example.scenario}
                  </CardTitle>
                  <p className="text-center text-muted-foreground text-sm">
                    {example.systemSize}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span>Total System Cost:</span>
                      <span className="font-medium">{example.totalCost}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>After Rebates:</span>
                      <span className="font-medium text-primary">{example.afterRebate}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Monthly Payment:</span>
                      <span className="font-medium">{example.monthlyPayment}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Monthly Saving:</span>
                      <span className="font-medium text-green-600">{example.monthlySaving}</span>
                    </div>
                    <div className="flex justify-between border-t pt-3 font-bold">
                      <span>Net Monthly Benefit:</span>
                      <span className="text-green-600">{example.netBenefit}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Loan Details */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-black mb-6">
                Solar Loan Benefits
              </h2>
              
              <div className="space-y-4 mb-8">
                {[
                  "Interest rates as low as 3.99% (conditions apply)",
                  "Terms from 2-10 years to suit your budget",
                  "No early repayment penalties",
                  "Start saving from day one of installation",
                  "Build home equity while reducing energy costs", 
                  "Tax benefits may apply for business installations",
                  "Pre-approved financing available",
                  "Same-day approval for qualified applicants"
                ].map((benefit) => (
                  <div key={benefit} className="flex items-start gap-3">
                    <CheckCircle className="text-primary mt-0.5 flex-shrink-0" size={20} />
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg"
                  onClick={scrollToContact}
                  data-testid="button-financing-loan-quote"
                >
                  Apply for Solar Loan
                </Button>
                <Button 
                  variant="outline"
                  size="lg"
                  onClick={() => navigate('/residential')}
                  data-testid="button-financing-residential"
                >
                  View Systems
                </Button>
              </div>
            </div>

            <div>
              <Card className="p-8 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
                <CardHeader className="p-0 mb-6">
                  <CardTitle className="font-heading font-bold text-2xl text-center">
                    <Calculator className="mx-auto mb-3" size={32} />
                    Financing Calculator
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="space-y-4 text-center">
                    <div className="p-4 bg-white/50 rounded-lg">
                      <div className="text-lg font-bold">6.6kW Solar System</div>
                      <div className="text-sm text-muted-foreground">After rebates: $6,500</div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center">
                        <div className="font-bold">5 Year Loan</div>
                        <div className="text-2xl text-primary">$135/mo</div>
                        <div className="text-sm text-muted-foreground">6.99% APR</div>
                      </div>
                      <div className="text-center">
                        <div className="font-bold">7 Year Loan</div>
                        <div className="text-2xl text-primary">$105/mo</div>
                        <div className="text-sm text-muted-foreground">7.99% APR</div>
                      </div>
                    </div>
                    <div className="border-t pt-4">
                      <div className="text-lg font-bold text-green-600">Average Monthly Saving</div>
                      <div className="text-2xl font-bold">$280</div>
                      <div className="text-sm text-muted-foreground">Based on typical usage</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-black mb-4">
              Financing FAQ
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "What credit score is required for solar financing?",
                answer: "Most lenders require a minimum credit score of 650, though some programs are available for scores as low as 600. We work with multiple lenders to find options for all credit situations."
              },
              {
                question: "Can I combine rebates with financing?",
                answer: "Yes! Government rebates are applied upfront to reduce your loan amount. This means you finance less and save more from day one."
              },
              {
                question: "What happens if I sell my house?", 
                answer: "Solar loans typically transfer with property ownership, or can be paid off from sale proceeds. Solar systems often increase home value by more than the remaining loan balance."
              },
              {
                question: "Are there tax benefits for solar loans?",
                answer: "Interest on solar loans may be tax-deductible if secured by your home. Business installations may qualify for additional depreciation benefits. Consult your tax advisor for specifics."
              }
            ].map((faq, index) => (
              <Card key={index} className="hover-elevate">
                <CardHeader>
                  <CardTitle className="font-heading font-bold text-lg">
                    {faq.question}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-heading font-extrabold text-3xl md:text-4xl mb-6">
            Start Saving with Solar Today
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Don't wait for energy prices to rise further. Take advantage of current rebates and low interest rates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              variant="secondary"
              className="text-lg px-8"
              onClick={scrollToContact}
              data-testid="button-financing-cta"
            >
              Get Pre-Approved Today
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="text-lg px-8 bg-white/10 text-white border-white/30 backdrop-blur-sm hover:bg-white/20"
              onClick={() => navigate('/commercial')}
              data-testid="button-financing-commercial"
            >
              Business Financing
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}