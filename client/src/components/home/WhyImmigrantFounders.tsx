import { data } from "../../lib/data";
import SuccessStoryCard from "../ui/success-story-card";
import StatsCard from "../ui/stats-card";

const WhyImmigrantFounders = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Why Immigrant Founders Thrive</h2>
          <p className="mt-4 text-neutral-600 max-w-2xl mx-auto">
            Immigrant entrepreneurs are responsible for some of the world's most innovative and successful companies.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {data.founderStats.map((stat, index) => (
            <StatsCard key={index} value={stat.value} description={stat.description} />
          ))}
        </div>
        
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold">Success Stories</h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {data.successStories.map((story, index) => (
              <SuccessStoryCard
                key={index}
                name={story.name}
                founder={story.founder}
                description={story.description}
                imageSrc={story.imageSrc}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyImmigrantFounders;
