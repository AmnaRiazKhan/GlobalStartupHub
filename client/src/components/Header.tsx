import { Link, useLocation } from "wouter";
import { useMobileMenu } from "../hooks/use-mobile-menu";
import { useState, useEffect } from "react";
import { Menu, X, Globe } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useMobileMenu();
  const [currentPath] = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/chatbot", label: "Chatbot" },

    { path: "/about", label: "About" },
    { path: "/funding", label: "Funding" },
    { path: "/immigration", label: "Immigration" },
    { path: "/visas", label: "Visas" },
    { path: "/programs", label: "Programs" },
    { path: "/community", label: "Community" },
  ];

  return (
    <header className={`bg-white shadow-md sticky top-0 z-50 transition-all ${scrolled ? 'shadow-lg' : ''}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center">
                <Globe className="text-primary h-6 w-6 mr-2" />
                <span className="text-primary font-bold text-xl">VentureVisa</span>
              </Link>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                href={link.path}
                className={`font-medium ${currentPath === link.path ? 'text-primary' : 'text-neutral-500 hover:text-primary'} transition`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          
          <div className="hidden md:flex">
            <Link href="/contact" className="bg-primary hover:bg-primary-600 text-white font-medium py-2 px-4 rounded-md transition">
              Schedule Consultation
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button 
              type="button" 
              onClick={() => setIsOpen(!isOpen)}
              className="text-neutral-500 hover:text-primary"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link 
                  key={link.path} 
                  href={link.path}
                  className={`font-medium ${currentPath === link.path ? 'text-primary' : 'text-neutral-500 hover:text-primary'} transition`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link 
                href="/contact" 
                className="bg-primary hover:bg-primary-600 text-white font-medium py-2 px-4 rounded-md transition text-center"
                onClick={() => setIsOpen(false)}
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
