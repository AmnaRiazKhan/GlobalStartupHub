import SectionHeading from "../components/ui/section-heading";
import ProgramCards from "../components/programs/ProgramCards";
import ProgramSuccess from "../components/programs/ProgramSuccess";

const Programs = () => {
  return (
    <div className="py-16 bg-gradient-to-br from-neutral-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Our Programs" 
          subtitle="Specialized programs designed to accelerate the growth of immigrant-founded startups"
        />
        
        <ProgramCards />
        <ProgramSuccess />
      </div>
    </div>
  );
};

export default Programs;
