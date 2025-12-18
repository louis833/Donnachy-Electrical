import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";
import { Link } from "wouter";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const quickLinks = [
    { label: 'Electrical', href: '/electrical', testId: 'link-footer-electrical', isRoute: true },
    { label: 'Heat Pumps', href: '/heat-pumps', testId: 'link-footer-heatpumps', isRoute: true },
    { label: 'Solar', href: '/solar', testId: 'link-footer-solar', isRoute: true },
    { label: 'About Us', href: '/about', testId: 'link-footer-about', isRoute: true },
    { label: 'Contact', href: '#contact', testId: 'link-footer-contact', isRoute: false },
  ];

  const contactLinks = [
    {
      icon: Phone,
      label: '03 6159 6392',
      href: 'tel:+61361596392',
      testId: 'link-footer-phone'
    },
    {
      icon: Mail,
      label: 'scott@donnachyelectrical.com.au',
      href: 'mailto:scott@donnachyelectrical.com.au',
      testId: 'link-footer-email'
    },
    {
      icon: MapPin,
      label: '20 Rene Rd, Summerhill TAS 7250',
      href: 'https://maps.google.com/?q=20+Rene+Rd+Summerhill+TAS+7250',
      testId: 'link-footer-address'
    },
  ];

  const socialLinks = [
    {
      icon: Facebook,
      label: 'Facebook',
      href: '#', // todo: replace with actual Facebook URL
      testId: 'link-facebook'
    },
    {
      icon: Instagram,
      label: 'Instagram', 
      href: '#', // todo: replace with actual Instagram URL
      testId: 'link-instagram'
    },
  ];

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="font-heading font-extrabold text-2xl mb-4">
              Donnachy Electrical
            </h3>
            <p className="text-gray-300 mb-4 text-lg">
              Electrical, Heating & Solar Specialists
            </p>
            <p className="text-gray-400 leading-relaxed">
              Licensed electrician and CEC accredited installer serving all of Tasmania. 
              15+ years' experience in electrical work, heat pumps, ducted systems, and solar installations.
            </p>
            
            {/* Credentials */}
            <div className="mt-6 inline-flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-lg">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span className="text-sm font-medium text-gray-200">
                Licensed & CEC Accredited
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  {link.isRoute ? (
                    <Link 
                      href={link.href}
                      className="text-gray-400 hover:text-primary transition-colors"
                      data-testid={link.testId}
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a 
                      href={link.href}
                      className="text-gray-400 hover:text-primary transition-colors"
                      data-testid={link.testId}
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Contact Info</h4>
            <ul className="space-y-4">
              {contactLinks.map((contact) => (
                <li key={contact.label}>
                  <a 
                    href={contact.href}
                    className="flex items-start gap-3 text-gray-400 hover:text-primary transition-colors"
                    data-testid={contact.testId}
                  >
                    <contact.icon size={18} className="mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{contact.label}</span>
                  </a>
                </li>
              ))}
            </ul>

            {/* Social Links */}
            <div className="mt-6">
              <h5 className="font-semibold mb-3">Follow Us</h5>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="bg-gray-800 hover:bg-primary p-3 rounded-lg transition-colors"
                    data-testid={social.testId}
                    onClick={() => console.log(`${social.label} clicked`)}
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-400">
              <p>
                © {currentYear} Donnachy Electrical Pty Ltd • ABN 91 639 014 850
              </p>
            </div>
            
            <div className="text-sm text-gray-400">
              <p>
                Reliable Solar & Battery Solutions Across Tasmania
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}