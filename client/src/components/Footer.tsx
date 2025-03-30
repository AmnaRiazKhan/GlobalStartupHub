import { Link } from "wouter";
import { Globe, Linkedin, Twitter, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-neutral-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-6">
              <Globe className="text-primary h-6 w-6 mr-2" />
              <span className="text-white font-bold text-xl">VentureVisa</span>
            </div>
            <p className="text-neutral-300 mb-6">
              Empowering immigrant entrepreneurs with funding, visa support, and business resources.
            </p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com" className="text-neutral-300 hover:text-white transition" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
              <a href="https://twitter.com" className="text-neutral-300 hover:text-white transition" aria-label="Twitter">
                <Twitter size={18} />
              </a>
              <a href="https://facebook.com" className="text-neutral-300 hover:text-white transition" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="https://instagram.com" className="text-neutral-300 hover:text-white transition" aria-label="Instagram">
                <Instagram size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link href="/funding" className="text-neutral-300 hover:text-white transition">Venture Funding</Link></li>
              <li><Link href="/immigration" className="text-neutral-300 hover:text-white transition">Immigration Support</Link></li>
              <li><Link href="/visas" className="text-neutral-300 hover:text-white transition">Visa Options</Link></li>
              <li><Link href="/programs" className="text-neutral-300 hover:text-white transition">Accelerator Programs</Link></li>
              <li><Link href="/about" className="text-neutral-300 hover:text-white transition">Business Development</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><Link href="/visas" className="text-neutral-300 hover:text-white transition">Visa Guide</Link></li>
              <li><Link href="/funding" className="text-neutral-300 hover:text-white transition">Funding Handbook</Link></li>
              <li><Link href="/community" className="text-neutral-300 hover:text-white transition">Entrepreneur Blog</Link></li>
              <li><Link href="/community" className="text-neutral-300 hover:text-white transition">Success Stories</Link></li>
              <li><Link href="/contact" className="text-neutral-300 hover:text-white transition">FAQs</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-neutral-300 hover:text-white transition">About Us</Link></li>
              <li><Link href="/about" className="text-neutral-300 hover:text-white transition">Our Team</Link></li>
              <li><Link href="/community" className="text-neutral-300 hover:text-white transition">Community</Link></li>
              <li><Link href="/contact" className="text-neutral-300 hover:text-white transition">Contact</Link></li>
              <li><Link href="/about" className="text-neutral-300 hover:text-white transition">Careers</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-neutral-800 pt-8 text-sm text-neutral-400">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              &copy; {currentYear} VentureVisa. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white transition">Terms of Service</Link>
              <Link href="/cookies" className="hover:text-white transition">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
