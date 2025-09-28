import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, CreditCard, Calculator, TrendingUp, DollarSign, Phone, FileText, Zap } from "lucide-react";
import { useLocation } from "wouter";
import { useState } from "react";
import financeImage from "@assets/generated_images/Solar_financing_consultation_eb868e8d.png";
import brighteLogoImage from "@assets/brighte_official_logo.png";

export default function FinancingService() {
  const [, navigate] = useLocation();
  const [selectedSystemSize, setSelectedSystemSize] = useState('6.6');
  const [selectedBatterySize, setSelectedBatterySize] = useState('5');

  const systemSizes = [
    { size: '6.6', rebate: 1794, label: '6.6kW System' },
    { size: '9.9', rebate: 2730, label: '9.9kW System' },
    { size: '13.3', rebate: 3666, label: '13.3kW System' },
    { size: '19.8', rebate: 5460, label: '19.8kW System' },
    { size: '40', rebate: 11076, label: '40kW System' },
    { size: '100', rebate: 27729, label: '100kW System' }
  ];

  const batterySizes = [
    { size: '5', rebate: 1720, label: '5kWh Battery' },
    { size: '10', rebate: 3440, label: '10kWh Battery' },
    { size: '20', rebate: 6880, label: '20kWh Battery' },
    { size: '30', rebate: 10320, label: '30kWh Battery' },
    { size: '40', rebate: 13760, label: '40kWh Battery' },
    { size: '50', rebate: 17200, label: '50kWh Battery' }
  ];

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
      name: "Tasmanian Feed-in Tariff",
      description: "Earn money for excess solar power exported to grid",
      saving: "8-10c per kWh",
      eligibility: "All residential & small commercial systems"
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
      totalCost: "Get a quote today",
      afterRebate: "Get a quote today",
      monthlyPayment: "Get a quote today",
      monthlySaving: "Get a quote today",
      netBenefit: "Get a quote today"
    },
    {
      scenario: "Retirees",
      systemSize: "5kW System", 
      totalCost: "Get a quote today",
      afterRebate: "Get a quote today",
      monthlyPayment: "Get a quote today",
      monthlySaving: "Get a quote today",
      netBenefit: "Get a quote today"
    },
    {
      scenario: "Small Business",
      systemSize: "20kW System",
      totalCost: "Get a quote today",
      afterRebate: "Get a quote today",
      monthlyPayment: "Get a quote today",
      monthlySaving: "Get a quote today",
      netBenefit: "Get a quote today"
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
                onClick={scrollToContact}
                data-testid="button-financing-quote"
              >
                Get Financing Quote
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="bg-white/10 text-white border-white/30 backdrop-blur-sm"
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

      {/* Brighte Partnership */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="mb-8">
              <img 
                src={brighteLogoImage} 
                alt="Brighte - Australia's leader in solar finance" 
                className="h-12 mx-auto mb-4"
                data-testid="img-brighte-logo"
              />
            </div>
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-black mb-4">
              Australia's Leader in Solar Finance
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              With Brighte's network of over 2,900+ tradies, and working with Government, we're helping 
              make sustainability affordable and accessible for everyone through our partnership with Brighte.
            </p>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl font-extrabold text-primary mb-2" data-testid="text-stat-co2e">1,598,548</div>
              <div className="text-lg font-semibold text-black mb-2">Metric Tons of CO2e</div>
              <p className="text-sm text-muted-foreground">
                Emissions prevented each year by all solar installations funded by Brighte
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-extrabold text-primary mb-2" data-testid="text-stat-gwh">2,398 GWh</div>
              <div className="text-lg font-semibold text-black mb-2">Clean Energy Generated</div>
              <p className="text-sm text-muted-foreground">
                Amount of energy generated by Brighte-financed installations each year
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-extrabold text-primary mb-2" data-testid="text-stat-installations">159,852</div>
              <div className="text-lg font-semibold text-black mb-2">Solar Installations</div>
              <p className="text-sm text-muted-foreground">
                Total number of solar installations financed by Brighte
              </p>
            </div>
          </div>

          {/* Government Programs */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="font-heading font-bold text-2xl text-center mb-8">Government Partnership Programs</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="hover-elevate">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="font-heading font-bold text-lg">
                      ACT Sustainable Household Scheme
                    </CardTitle>
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-bold">
                      $200m Program
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4">
                    Interest-free loans and rebates for ACT residents to install solar, batteries, and other sustainable home upgrades.
                  </p>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="text-primary" size={16} />
                    <span className="text-sm text-muted-foreground">
                      Available to ACT residents
                    </span>
                  </div>
                </CardContent>
              </Card>
              <Card className="hover-elevate">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="font-heading font-bold text-lg">
                      TAS Energy Saver Loan Scheme
                    </CardTitle>
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-bold">
                      $50m Program
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4">
                    Low-interest loans for Tasmanian households and businesses to invest in energy-efficient upgrades including solar.
                  </p>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="text-primary" size={16} />
                    <span className="text-sm text-muted-foreground">
                      Available to Tasmanian residents
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Quick Approval Feature */}
          <div className="text-center mt-16">
            <Card className="max-w-2xl mx-auto p-8 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
              <CardHeader className="p-0 mb-4">
                <CardTitle className="font-heading font-bold text-2xl">
                  Quick Approval Process
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-lg text-muted-foreground mb-6">
                  Get approved for your solar loan within minutes with Brighte's streamlined application process.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="text-center">
                    <div className="bg-primary/20 p-3 rounded-lg w-fit mx-auto mb-2">
                      <FileText size={24} className="text-primary" />
                    </div>
                    <div className="font-semibold">Quick Application</div>
                    <div className="text-muted-foreground">Simple online form</div>
                  </div>
                  <div className="text-center">
                    <div className="bg-primary/20 p-3 rounded-lg w-fit mx-auto mb-2">
                      <Zap size={24} className="text-primary" />
                    </div>
                    <div className="font-semibold">Fast Approval</div>
                    <div className="text-muted-foreground">Decisions in minutes</div>
                  </div>
                  <div className="text-center">
                    <div className="bg-primary/20 p-3 rounded-lg w-fit mx-auto mb-2">
                      <CheckCircle size={24} className="text-primary" />
                    </div>
                    <div className="font-semibold">Flexible Payments</div>
                    <div className="text-muted-foreground">Terms that work for you</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Rebate Calculators */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-black mb-4">
              Rebate Calculators
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Calculate your potential government rebates based on your system size and requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* STC Rebate Calculator */}
            <Card className="p-8 hover-elevate">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="font-heading font-bold text-2xl text-center">
                  <Calculator className="mx-auto mb-3" size={32} />
                  Federal STC Rebate Calculator
                </CardTitle>
                <p className="text-muted-foreground text-center">
                  Small-scale Technology Certificates reduce your system cost
                </p>
              </CardHeader>
              <CardContent className="p-0">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-3">Select System Size:</label>
                    <div className="grid grid-cols-1 gap-2">
                      {systemSizes.map((system) => (
                        <button
                          key={system.size}
                          onClick={() => setSelectedSystemSize(system.size)}
                          className={`p-3 rounded-lg border text-left transition-colors ${
                            selectedSystemSize === system.size
                              ? 'border-primary bg-primary/5 text-primary'
                              : 'border-gray-200 hover:border-primary/50'
                          }`}
                          data-testid={`button-system-${system.size}`}
                        >
                          <div className="flex justify-between items-center">
                            <span className="font-medium">{system.label}</span>
                            <span className="font-bold text-primary">${system.rebate.toLocaleString()}</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 rounded-lg p-4">
                    <div className="text-center">
                      <div className="text-sm text-muted-foreground mb-1">Your STC Rebate:</div>
                      <div className="text-3xl font-extrabold text-primary" data-testid="text-stc-rebate">
                        ${systemSizes.find(s => s.size === selectedSystemSize)?.rebate.toLocaleString()}
                      </div>
                      <div className="text-xs text-muted-foreground mt-2">
                        For {systemSizes.find(s => s.size === selectedSystemSize)?.label}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="text-primary" size={16} />
                    <span className="text-sm text-muted-foreground">
                      Systems up to 100kW capacity
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Battery Rebate Calculator */}
            <Card className="p-8 hover-elevate">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="font-heading font-bold text-2xl text-center">
                  <Calculator className="mx-auto mb-3" size={32} />
                  Battery Rebate Calculator (TAS)
                </CardTitle>
                <p className="text-muted-foreground text-center">
                  Government rebate for home battery storage systems
                </p>
              </CardHeader>
              <CardContent className="p-0">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-3">Select Battery Size:</label>
                    <div className="grid grid-cols-1 gap-2">
                      {batterySizes.map((battery) => (
                        <button
                          key={battery.size}
                          onClick={() => setSelectedBatterySize(battery.size)}
                          className={`p-3 rounded-lg border text-left transition-colors ${
                            selectedBatterySize === battery.size
                              ? 'border-primary bg-primary/5 text-primary'
                              : 'border-gray-200 hover:border-primary/50'
                          }`}
                          data-testid={`button-battery-${battery.size}`}
                        >
                          <div className="flex justify-between items-center">
                            <span className="font-medium">{battery.label}</span>
                            <span className="font-bold text-primary">${battery.rebate.toLocaleString()}</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-lg p-4">
                    <div className="text-center">
                      <div className="text-sm text-muted-foreground mb-1">Your Battery Rebate:</div>
                      <div className="text-3xl font-extrabold text-green-600" data-testid="text-battery-rebate">
                        ${batterySizes.find(b => b.size === selectedBatterySize)?.rebate.toLocaleString()}
                      </div>
                      <div className="text-xs text-muted-foreground mt-2">
                        For {batterySizes.find(b => b.size === selectedBatterySize)?.label}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="text-primary" size={16} />
                    <span className="text-sm text-muted-foreground">
                      Tasmanian residents with solar systems
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Combined Savings */}
          <div className="text-center">
            <Card className="max-w-2xl mx-auto p-8 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="font-heading font-bold text-2xl">
                  Total Potential Rebates
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-lg font-semibold text-primary">STC Rebate</div>
                    <div className="text-2xl font-extrabold">
                      ${systemSizes.find(s => s.size === selectedSystemSize)?.rebate.toLocaleString()}
                    </div>
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-green-600">Battery Rebate</div>
                    <div className="text-2xl font-extrabold">
                      ${batterySizes.find(b => b.size === selectedBatterySize)?.rebate.toLocaleString()}
                    </div>
                  </div>
                  <div className="border-l border-primary/30 pl-4">
                    <div className="text-lg font-semibold text-black">Total Savings</div>
                    <div className="text-3xl font-extrabold text-primary" data-testid="text-total-rebates">
                      ${((systemSizes.find(s => s.size === selectedSystemSize)?.rebate || 0) + 
                        (batterySizes.find(b => b.size === selectedBatterySize)?.rebate || 0)).toLocaleString()}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Additional Incentives */}
          {rebates.length > 0 && (
            <div className="mt-16">
              <div className="text-center mb-8">
                <h3 className="font-heading font-bold text-2xl text-black mb-4">
                  Additional Incentives
                </h3>
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
          )}
        </div>
      </section>


      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-black mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get answers to common questions about solar financing and making the switch to renewable energy.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "What credit score is required for solar financing?",
                answer: "Most lenders require a minimum credit score of 650, though some programs are available for scores as low as 600. We work with multiple lenders to find options that suit different credit situations."
              },
              {
                question: "Can I combine government rebates with financing?",
                answer: "Absolutely! Government rebates are applied upfront to reduce your total loan amount. This means you finance less and save more from day one. We help calculate your rebates and apply them to your loan."
              },
              {
                question: "What financing options are available for solar?",
                answer: "We offer various financing solutions including personal loans, green loans, and solar-specific financing. Interest rates typically range from 8.99% to 15% depending on your credit profile and chosen lender."
              },
              {
                question: "How long are typical solar loan terms?",
                answer: "Solar loans typically range from 2-10 years. Longer terms mean lower monthly payments but more interest paid over time. We'll help you find the right balance for your budget and goals."
              },
              {
                question: "What happens if I sell my house with a solar loan?",
                answer: "Solar loans can typically be transferred to the new property owner or paid off from sale proceeds. Solar systems often increase home value by more than the remaining loan balance."
              },
              {
                question: "Are there any fees involved with solar financing?",
                answer: "Fees vary by lender but typically include an establishment fee ($199-$599) and sometimes ongoing account keeping fees. We'll explain all fees upfront so there are no surprises."
              },
              {
                question: "How quickly can I get approved for solar financing?",
                answer: "Many of our financing partners offer approval decisions within minutes to hours. Once approved, we can often begin your solar installation within 1-2 weeks."
              },
              {
                question: "Can I pay off my solar loan early?",
                answer: "Most solar loans allow early repayment without penalties. This can save you significant interest costs if you have the means to pay off the loan ahead of schedule."
              },
              {
                question: "What if my solar system doesn't perform as expected?",
                answer: "All our systems come with performance guarantees and comprehensive warranties. If there are issues, we'll fix them at no cost to you, and your financing payments remain unchanged."
              },
              {
                question: "Do solar loans affect my debt-to-income ratio?",
                answer: "Yes, solar loans are considered debt, but the energy savings often offset the monthly payments. Many customers find their net monthly position improves immediately after installation."
              }
            ].map((faq, index) => (
              <Card key={index} className="hover-elevate">
                <CardHeader>
                  <CardTitle className="font-heading font-bold text-lg">
                    {faq.question}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-6">
              Still have questions about solar financing?
            </p>
            <Button 
              size="lg"
              onClick={scrollToContact}
              data-testid="button-faq-contact"
            >
              Speak with a Financing Expert
            </Button>
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
              onClick={scrollToContact}
              data-testid="button-financing-cta"
            >
              Get Pre-Approved Today
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="bg-white/10 text-white border-white/30 backdrop-blur-sm"
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