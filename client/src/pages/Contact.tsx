import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import SectionHeading from "../components/ui/section-heading";
import ContactForm from "../components/contact/ContactForm";
import ContactInfo from "../components/contact/ContactInfo";
import { apiRequest } from "../lib/queryClient";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleFormSubmit = async (formData: any) => {
    setIsSubmitting(true);
    
    try {
      await apiRequest("POST", "/api/contact", formData);
      
      toast({
        title: "Message Sent",
        description: "Thank you for your inquiry. We'll be in touch shortly.",
        variant: "default",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className="py-16 bg-gradient-to-br from-neutral-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Contact Us" 
          subtitle="Ready to start your entrepreneurial journey in the US? Get in touch with our team of experts"
        />
        
        <div className="grid md:grid-cols-5 gap-8">
          <ContactInfo />
          <ContactForm onSubmit={handleFormSubmit} isSubmitting={isSubmitting} />
        </div>
      </div>
    </div>
  );
};

export default Contact;
