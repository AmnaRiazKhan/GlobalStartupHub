import { Rocket, UserCheck, Handshake, Check } from "lucide-react";
import { Link } from "wouter";

const ProgramCards = () => {
  const programs = [
    {
      icon: <Rocket className="text-5xl text-primary" />,
      title: "Immigrant Accelerator",
      description: "A 12-week intensive program helping international founders establish their US presence while refining their business model.",
      benefits: [
        "$50K investment",
        "Visa strategy development",
        "Market entry support",
        "Demo Day with investors"
      ],
      bgColor: "bg-primary/10"
    },
    {
      icon: <UserCheck className="text-5xl text-green-600" />,
      title: "Entrepreneur in Residence",
      description: "A 6-month program for established entrepreneurs looking to scale their business in the US market.",
      benefits: [
        "Office space & resources",
        "Legal & business support",
        "Investor introductions",
        "Strategic mentorship"
      ],
      bgColor: "bg-green-600/10"
    },
    {
      icon: <Handshake className="text-5xl text-amber-500" />,
      title: "Strategic Partnerships",
      description: "Connecting international startups with established US companies for strategic growth opportunities.",
      benefits: [
        "Corporate partnerships",
        "Distribution channels",
        "Co-development opportunities",
        "Market expansion support"
      ],
      bgColor: "bg-amber-500/10"
    }
  ];

  return (
    <div className="grid md:grid-cols-3 gap-8 mb-20">
      {programs.map((program, index) => (
        <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg transition-shadow hover:shadow-xl">
          <div className={`h-48 ${program.bgColor} flex items-center justify-center`}>
            {program.icon}
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold mb-4">{program.title}</h3>
            <p className="text-neutral-600 mb-6">
              {program.description}
            </p>
            <div className="space-y-3 mb-8">
              {program.benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-center">
                  <Check className="text-green-600 mr-2 h-5 w-5" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
            <Link 
              href="/contact" 
              className="inline-block bg-primary hover:bg-primary-600 text-white text-center font-medium py-2 px-6 rounded-md transition w-full"
            >
              Apply Now
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProgramCards;
