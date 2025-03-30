import { useState } from "react";
import { Check } from "lucide-react";
import { Link } from "wouter";
import { data } from "../../lib/data";

type VisaTabType = 'talent' | 'investment' | 'business' | 'permanent';

const VisaOptions = () => {
  const [activeTab, setActiveTab] = useState<VisaTabType>('talent');
  
  const tabData = {
    talent: data.visaTypes.filter(visa => visa.category === 'talent'),
    investment: data.visaTypes.filter(visa => visa.category === 'investment'),
    business: data.visaTypes.filter(visa => visa.category === 'business'),
    permanent: data.visaTypes.filter(visa => visa.category === 'permanent'),
  };
  
  const tabLabels = [
    { id: 'talent', label: 'Talent-Based Visas' },
    { id: 'investment', label: 'Investment-Based Visas' },
    { id: 'business', label: 'Business Expansion Visas' },
    { id: 'permanent', label: 'Permanent Residency' },
  ];

  return (
    <div className="mb-12">
      <div className="flex flex-wrap border-b border-gray-200 mb-8">
        {tabLabels.map((tab) => (
          <button 
            key={tab.id}
            className={`px-6 py-3 border-b-2 ${activeTab === tab.id ? 'border-primary text-primary' : 'border-transparent text-neutral-600 hover:text-primary'} font-medium transition`}
            onClick={() => setActiveTab(tab.id as VisaTabType)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      
      <div className="tab-content">
        <div className="grid md:grid-cols-2 gap-8">
          {tabData[activeTab].map((visa, index) => (
            <div key={index} className="bg-neutral-50 p-6 rounded-xl">
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-semibold">{visa.code}</span>
                </div>
                <div className="ml-5">
                  <h4 className="text-xl font-bold mb-2">{visa.title}</h4>
                  <p className="text-neutral-600 mb-4">{visa.description}</p>
                  <div className="space-y-2">
                    {visa.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center">
                        <Check className="text-primary mr-2 h-5 w-5" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6">
                    <Link href="/contact" className="text-primary font-medium hover:text-primary-600 transition">
                      Learn More →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VisaOptions;
