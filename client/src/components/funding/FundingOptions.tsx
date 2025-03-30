import { Check, Sprout, TrendingUp, Globe } from "lucide-react";
import { Link } from "wouter";

const FundingOptions = () => {
  const fundingTypes = [
    {
      icon: <Sprout className="text-primary text-xl" />,
      title: "Seed Funding",
      description: "Investment of $250K-$1M to help validate your business model and gain initial traction.",
      benefits: [
        "Product development support",
        "Market validation strategies",
        "Early customer acquisition"
      ]
    },
    {
      icon: <TrendingUp className="text-primary text-xl" />,
      title: "Series A/B Funding",
      description: "Investment of $1M-$10M to scale your business and capture significant market share.",
      benefits: [
        "Scaling strategies and execution",
        "Talent recruitment assistance",
        "Market expansion planning"
      ]
    },
    {
      icon: <Globe className="text-primary text-xl" />,
      title: "Dual Pathway Approach",
      description: "Synchronized visa strategy and funding processes to ensure legal and financial stability.",
      benefits: [
        "Visa-compliant business structures",
        "Immigration-aligned funding timeline",
        "Long-term growth planning"
      ]
    }
  ];

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
      {fundingTypes.map((funding, index) => (
        <div key={index} className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow border border-gray-100">
          <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-6">
            {funding.icon}
          </div>
          <h3 className="text-xl font-bold mb-4">{funding.title}</h3>
          <p className="text-neutral-600 mb-6">{funding.description}</p>
          <ul className="space-y-3 mb-8">
            {funding.benefits.map((benefit, idx) => (
              <li key={idx} className="flex items-center">
                <Check className="text-green-600 mr-2 h-5 w-5" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
          <Link href="/contact" className="inline-flex items-center font-medium text-primary hover:text-primary-600 transition">
            Learn More <span className="ml-2">→</span>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default FundingOptions;
