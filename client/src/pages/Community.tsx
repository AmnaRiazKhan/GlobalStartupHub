import SectionHeading from "../components/ui/section-heading";
import CommunityBenefits from "../components/community/CommunityBenefits";
import Newsletter from "../components/community/Newsletter";
import FeaturedEntrepreneurs from "../components/community/FeaturedEntrepreneurs";

const Community = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Join Our Community" 
          subtitle="Connect with fellow immigrant entrepreneurs, mentors, investors, and industry experts"
        />
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <CommunityBenefits />
          <Newsletter />
        </div>
        
        <FeaturedEntrepreneurs />
      </div>
    </div>
  );
};

export default Community;
