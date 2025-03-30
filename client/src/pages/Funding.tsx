import SectionHeading from "../components/ui/section-heading";
import FundingOptions from "../components/funding/FundingOptions";
import FundingProcess from "../components/funding/FundingProcess";

const Funding = () => {
  return (
    <>
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Funding & Investment" 
            subtitle="We provide tailored funding solutions and investment strategies for immigrant entrepreneurs at every stage"
          />
          
          <FundingOptions />
          <FundingProcess />
        </div>
      </div>
    </>
  );
};

export default Funding;
