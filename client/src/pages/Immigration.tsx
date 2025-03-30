import SectionHeading from "../components/ui/section-heading";
import ImmigrationSupport from "../components/immigration/ImmigrationSupport";

const Immigration = () => {
  return (
    <div className="py-16 bg-gradient-to-br from-neutral-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Immigration Support" 
          subtitle="Our specialized immigration team helps entrepreneurs navigate the complex US visa system while building their businesses"
        />
        
        <ImmigrationSupport />
      </div>
    </div>
  );
};

export default Immigration;
