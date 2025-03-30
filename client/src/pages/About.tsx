import { Link } from "wouter";
import SectionHeading from "../components/ui/section-heading";

const About = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="About Us" 
          subtitle="Learn about our mission and how we support immigrant entrepreneurs" 
        />
        
        <div className="mt-12 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-neutral-600 mb-6">
              At VentureVisa, we are dedicated to empowering immigrant entrepreneurs to build successful businesses 
              in the United States. We understand the unique challenges faced by foreign-born founders and provide 
              comprehensive solutions that address both immigration and business development needs.
            </p>
            <p className="text-neutral-600 mb-6">
              Our mission is to foster innovation and economic growth by creating pathways for talented international 
              entrepreneurs to establish and grow their ventures in the U.S. market.
            </p>
            <p className="text-neutral-600">
              Through our dual expertise in immigration and venture capital, we provide a unified approach that simplifies 
              the journey for immigrant founders and maximizes their chances of success.
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute -inset-4 bg-primary/5 rounded-3xl transform rotate-2"></div>
            <img 
              src="https://images.unsplash.com/photo-1560439513-74b037a25d84?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1024&h=768&q=80" 
              alt="Diverse team of entrepreneurs" 
              className="relative rounded-2xl shadow-xl w-full h-auto z-10"
            />
          </div>
        </div>
        
        <div className="mt-24">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Team</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md transition hover:shadow-xl">
              <div className="h-64 bg-neutral-100">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=500&q=80" 
                  alt="CEO portrait" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl">David Chen</h3>
                <p className="text-primary font-medium mb-2">CEO & Co-Founder</p>
                <p className="text-neutral-600 mb-4">
                  Former immigrant entrepreneur with 15+ years experience in Silicon Valley. Led two successful exits before starting VentureVisa.
                </p>
              </div>
            </div>
            
            {/* Team Member 2 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md transition hover:shadow-xl">
              <div className="h-64 bg-neutral-100">
                <img 
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=500&q=80" 
                  alt="Immigration Director portrait" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl">Maria Rodriguez</h3>
                <p className="text-primary font-medium mb-2">Immigration Director</p>
                <p className="text-neutral-600 mb-4">
                  Former USCIS attorney with specialized focus on entrepreneurial and investment visas. 10+ years experience.
                </p>
              </div>
            </div>
            
            {/* Team Member 3 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md transition hover:shadow-xl">
              <div className="h-64 bg-neutral-100">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=500&q=80" 
                  alt="Investment Director portrait" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl">Raj Patel</h3>
                <p className="text-primary font-medium mb-2">Investment Director</p>
                <p className="text-neutral-600 mb-4">
                  Experienced VC with prior roles at Sequoia and a16z. Specializes in early-stage investments for immigrant-founded startups.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-24 bg-blue-50 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Unique Approach</h2>
              <p className="text-neutral-600 mb-8">
                Traditional venture capital firms and immigration law practices operate in silos, creating unnecessary 
                complexity for immigrant founders. VentureVisa offers a holistic solution that addresses both needs simultaneously.
              </p>
              
              <div className="space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                      <span className="text-white font-semibold">1</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold">Integrated Expertise</h4>
                    <p className="text-neutral-600">Combined immigration and business strategy under one roof</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                      <span className="text-white font-semibold">2</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold">Immigrant-Centric Network</h4>
                    <p className="text-neutral-600">Access to advisors, mentors, and investors who understand the immigrant journey</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                      <span className="text-white font-semibold">3</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold">Specialized Programs</h4>
                    <p className="text-neutral-600">Tailored accelerator and EIR programs designed for immigrant founders</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold mb-6">Partner With Us</h3>
              <p className="text-neutral-600 mb-8">
                Whether you're a startup founder, investor, or service provider, we'd love to explore how we can work together 
                to support immigrant entrepreneurship.
              </p>
              
              <Link 
                href="/contact"
                className="block bg-primary hover:bg-primary-600 text-white text-center font-medium py-3 px-6 rounded-md transition w-full"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
