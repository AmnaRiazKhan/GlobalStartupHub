import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram } from "lucide-react";

const ContactInfo = () => {
  const socialLinks = [
    { icon: <Linkedin size={18} />, href: "https://linkedin.com", ariaLabel: "LinkedIn" },
    { icon: <Twitter size={18} />, href: "https://twitter.com", ariaLabel: "Twitter" },
    { icon: <Facebook size={18} />, href: "https://facebook.com", ariaLabel: "Facebook" },
    { icon: <Instagram size={18} />, href: "https://instagram.com", ariaLabel: "Instagram" },
  ];

  return (
    <div className="md:col-span-2 bg-white p-8 rounded-xl shadow-lg">
      <h3 className="text-xl font-bold mb-6">Get In Touch</h3>
      
      <div className="space-y-6 mb-8">
        <div className="flex">
          <div className="flex-shrink-0 mt-1">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
              <Mail className="h-5 w-5 text-primary" />
            </div>
          </div>
          <div className="ml-4">
            <h4 className="font-medium">Email</h4>
            <p className="text-neutral-600">info@venturevisa.com</p>
          </div>
        </div>
        
        <div className="flex">
          <div className="flex-shrink-0 mt-1">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
              <Phone className="h-5 w-5 text-primary" />
            </div>
          </div>
          <div className="ml-4">
            <h4 className="font-medium">Phone</h4>
            <p className="text-neutral-600">+1 (800) 555-1234</p>
          </div>
        </div>
        
        <div className="flex">
          <div className="flex-shrink-0 mt-1">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
              <MapPin className="h-5 w-5 text-primary" />
            </div>
          </div>
          <div className="ml-4">
            <h4 className="font-medium">Locations</h4>
            <p className="text-neutral-600">New York • San Francisco • Miami</p>
          </div>
        </div>
      </div>
      
      <div className="border-t border-gray-200 pt-6">
        <h4 className="font-medium mb-4">Connect With Us</h4>
        <div className="flex space-x-4">
          {socialLinks.map((link, index) => (
            <a 
              key={index} 
              href={link.href} 
              className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition"
              aria-label={link.ariaLabel}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
