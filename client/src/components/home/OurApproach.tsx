import { Link } from "wouter";
import { Globe, DollarSign, Users, Lightbulb } from "lucide-react";

const OurApproach = () => {
  return (
    <section id="approach" className="py-16 bg-gradient-to-br from-neutral-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Our Approach</h2>
          <p className="mt-4 text-neutral-600 max-w-2xl mx-auto">
            We provide comprehensive support to help international entrepreneurs navigate both the immigration 
            system and funding landscape.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1583321500900-82807e458f3c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1024&q=80" 
              alt="Team meeting discussing strategies" 
              className="rounded-2xl shadow-xl"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-6">The Dual Pathway Advantage</h3>
            
            <div className="space-y-8">
              <div className="flex">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                    <Globe className="h-4 w-4 text-white" />
                  </div>
                </div>
                <div className="ml-5">
                  <h4 className="text-lg font-semibold">Immigration Expertise</h4>
                  <p className="mt-2 text-neutral-600">
                    We navigate complex visa processes, ensuring founders can legally establish and 
                    grow their businesses in the US.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center">
                    <DollarSign className="h-4 w-4 text-white" />
                  </div>
                </div>
                <div className="ml-5">
                  <h4 className="text-lg font-semibold">Strategic Funding</h4>
                  <p className="mt-2 text-neutral-600">
                    Access to seed capital, venture funding, and strategic investors aligned with 
                    your business objectives.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center">
                    <Users className="h-4 w-4 text-white" />
                  </div>
                </div>
                <div className="ml-5">
                  <h4 className="text-lg font-semibold">Network Access</h4>
                  <p className="mt-2 text-neutral-600">
                    Join a community of like-minded founders, industry experts, and potential 
                    partners across sectors.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center">
                    <Lightbulb className="h-4 w-4 text-white" />
                  </div>
                </div>
                <div className="ml-5">
                  <h4 className="text-lg font-semibold">Business Development</h4>
                  <p className="mt-2 text-neutral-600">
                    Tailored strategies, mentorship, and resources to accelerate your company's 
                    market entry and growth.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <Link href="/funding" className="inline-flex items-center font-medium text-primary hover:text-primary-600 transition">
                Explore Our Services <span className="ml-2">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurApproach;
