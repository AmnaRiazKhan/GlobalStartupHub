import { Link } from "wouter";
import { Search, FileText, Handshake, Info, Check, X, ArrowRight } from "lucide-react";

const ImmigrationSupport = () => {
  return (
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div>
        <h3 className="text-2xl font-bold mb-6">Navigating the U.S. Immigration System</h3>
        <p className="text-neutral-600 mb-8">
          The US immigration system can be complex and intimidating for entrepreneurs. Our team of 
          immigration experts works alongside our venture team to create a seamless experience.
        </p>
        
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center mr-4">
                <Search className="h-5 w-5 text-white" />
              </div>
              <h4 className="font-semibold text-lg">Visa Assessment</h4>
            </div>
            <p className="text-neutral-600">
              We evaluate your background, business, and goals to identify the optimal visa pathway for your situation.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center mr-4">
                <FileText className="h-5 w-5 text-white" />
              </div>
              <h4 className="font-semibold text-lg">Application Preparation</h4>
            </div>
            <p className="text-neutral-600">
              Our legal team prepares comprehensive visa applications designed to highlight your entrepreneurial strengths.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center mr-4">
                <Handshake className="h-5 w-5 text-white" />
              </div>
              <h4 className="font-semibold text-lg">Business Alignment</h4>
            </div>
            <p className="text-neutral-600">
              We structure your business to meet both immigration requirements and investor expectations simultaneously.
            </p>
          </div>
        </div>
        
        <div className="mt-8">
          <Link href="/visas" className="bg-primary hover:bg-primary-600 text-white font-medium py-2 px-6 rounded-md inline-flex items-center transition">
            Explore Visa Options <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
      
      <div className="relative">
        <div className="absolute -inset-4 bg-primary/5 rounded-3xl transform -rotate-2"></div>
        <div className="relative bg-white p-8 rounded-2xl shadow-xl">
          <h4 className="text-xl font-bold mb-6">The Dual Pathway Advantage</h4>
          
          <div className="bg-neutral-50 p-6 rounded-xl mb-6">
            <div className="flex items-center justify-between mb-4">
              <h5 className="font-semibold">Traditional Approach</h5>
              <span className="text-sm text-white bg-red-500 px-2 py-1 rounded">Challenging</span>
            </div>
            <div className="space-y-3">
              <div className="flex items-center">
                <X className="text-red-500 mr-2 h-5 w-5" />
                <span className="text-neutral-600">Separate visa and funding processes</span>
              </div>
              <div className="flex items-center">
                <X className="text-red-500 mr-2 h-5 w-5" />
                <span className="text-neutral-600">Potential conflicts between requirements</span>
              </div>
              <div className="flex items-center">
                <X className="text-red-500 mr-2 h-5 w-5" />
                <span className="text-neutral-600">Higher failure rate and delays</span>
              </div>
            </div>
          </div>
          
          <div className="bg-neutral-50 p-6 rounded-xl">
            <div className="flex items-center justify-between mb-4">
              <h5 className="font-semibold">Our Dual Pathway Approach</h5>
              <span className="text-sm text-white bg-green-600 px-2 py-1 rounded">Optimized</span>
            </div>
            <div className="space-y-3">
              <div className="flex items-center">
                <Check className="text-green-600 mr-2 h-5 w-5" />
                <span className="text-neutral-600">Synchronized visa and funding strategies</span>
              </div>
              <div className="flex items-center">
                <Check className="text-green-600 mr-2 h-5 w-5" />
                <span className="text-neutral-600">Business structures aligned with visa requirements</span>
              </div>
              <div className="flex items-center">
                <Check className="text-green-600 mr-2 h-5 w-5" />
                <span className="text-neutral-600">Faster timelines with higher success rates</span>
              </div>
              <div className="flex items-center">
                <Check className="text-green-600 mr-2 h-5 w-5" />
                <span className="text-neutral-600">Integrated legal and business support</span>
              </div>
            </div>
          </div>
          
          <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-100">
            <div className="flex">
              <div className="flex-shrink-0">
                <Info className="text-primary h-5 w-5" />
              </div>
              <div className="ml-4">
                <h5 className="font-medium">Did you know?</h5>
                <p className="text-sm text-neutral-600">
                  Our clients' visa approval rate is 85% higher than the national average for entrepreneurs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImmigrationSupport;
