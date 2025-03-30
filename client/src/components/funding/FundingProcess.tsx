import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

const FundingProcess = () => {
  const steps = [
    {
      step: 1,
      title: "Initial Consultation",
      description: "We evaluate your business, immigration status, and funding needs to develop a strategic plan."
    },
    {
      step: 2,
      title: "Due Diligence",
      description: "Comprehensive review of your business model, market opportunity, and legal requirements."
    },
    {
      step: 3,
      title: "Term Sheet",
      description: "We present investment terms aligned with your visa status and business objectives."
    },
    {
      step: 4,
      title: "Funding & Integration",
      description: "Capital deployment alongside visa application assistance and business development resources."
    }
  ];

  return (
    <div className="bg-neutral-50 rounded-2xl overflow-hidden shadow-lg">
      <div className="grid md:grid-cols-2">
        <div className="p-8 md:p-12">
          <h3 className="text-2xl font-bold mb-6">Funding Process</h3>
          <div className="space-y-8">
            {steps.map((item) => (
              <div key={item.step} className="flex">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center">
                    {item.step}
                  </div>
                </div>
                <div className="ml-5">
                  <h4 className="font-semibold">{item.title}</h4>
                  <p className="mt-1 text-neutral-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8">
            <Link href="/contact" className="bg-primary hover:bg-primary-600 text-white font-medium py-2 px-6 rounded-md inline-flex items-center transition">
              Start the Process <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
        
        <div className="bg-primary-900">
          <div className="h-full flex items-center justify-center p-8">
            <div className="text-center text-white">
              <div className="text-5xl font-bold mb-4">$120M+</div>
              <p className="text-xl font-medium mb-6">Invested in Immigrant Founders</p>
              <div className="grid grid-cols-2 gap-6 max-w-md mx-auto">
                <div>
                  <div className="text-3xl font-bold">70+</div>
                  <p className="text-white/80">Portfolio Companies</p>
                </div>
                <div>
                  <div className="text-3xl font-bold">85%</div>
                  <p className="text-white/80">Success Rate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FundingProcess;
