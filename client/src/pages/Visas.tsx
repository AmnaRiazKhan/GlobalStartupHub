import SectionHeading from "../components/ui/section-heading";
import VisaOptions from "../components/visas/VisaOptions";
import VisaConsultation from "../components/visas/VisaConsultation";

const Visas = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Visas for Entrepreneurs" 
          subtitle="We offer expertise in 15+ visa categories to find the perfect match for your entrepreneurial journey"
        />
        
        <VisaOptions />
        <VisaConsultation />
      </div>
    </div>
  );
};

export default Visas;
