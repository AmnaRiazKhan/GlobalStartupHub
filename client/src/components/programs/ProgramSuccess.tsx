import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

const ProgramSuccess = () => {
  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
      <div className="grid md:grid-cols-2">
        <div className="p-8 md:p-12">
          <h3 className="text-2xl font-bold mb-6">Program Success Stories</h3>
          
          <div className="space-y-8">
            <div>
              <div className="flex items-center mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=60&h=60&q=80" 
                  alt="Founder portrait" 
                  className="w-12 h-12 rounded-full object-cover mr-4" 
                />
                <div>
                  <h4 className="font-semibold">Maria Rodriguez</h4>
                  <p className="text-sm text-neutral-600">HealthTech Founder from Brazil</p>
                </div>
              </div>
              <p className="text-neutral-600">
                "The Immigrant Accelerator program helped me secure an O-1 visa and $1.2M in seed funding for my healthcare platform. Their dual pathway approach saved me months of effort."
              </p>
            </div>
            
            <div>
              <div className="flex items-center mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=60&h=60&q=80" 
                  alt="Founder portrait" 
                  className="w-12 h-12 rounded-full object-cover mr-4" 
                />
                <div>
                  <h4 className="font-semibold">Raj Patel</h4>
                  <p className="text-sm text-neutral-600">Fintech Entrepreneur from India</p>
                </div>
              </div>
              <p className="text-neutral-600">
                "As an Entrepreneur in Residence, I received invaluable mentorship and strategic introductions that helped us scale to 15 markets in just 18 months."
              </p>
            </div>
          </div>
          
          <div className="mt-8">
            <Link href="/community" className="inline-flex items-center font-medium text-primary hover:text-primary-600 transition">
              More Success Stories <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
        
        <div className="bg-primary">
          <div className="h-full flex items-center p-8 md:p-12">
            <div className="text-white">
              <h3 className="text-2xl font-bold mb-6">Apply to Our Programs</h3>
              <p className="mb-8">
                Take the first step toward building your US-based company with the support of our expert team.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-white text-primary flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="font-semibold">1</span>
                  </div>
                  <span>Complete our simple application form</span>
                </div>
                
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-white text-primary flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="font-semibold">2</span>
                  </div>
                  <span>Interview with our program team</span>
                </div>
                
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-white text-primary flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="font-semibold">3</span>
                  </div>
                  <span>Receive your customized program offer</span>
                </div>
              </div>
              
              <Link href="/contact" className="inline-block bg-white hover:bg-gray-100 text-primary text-center font-medium py-3 px-8 rounded-md transition">
                Start Your Application
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramSuccess;
