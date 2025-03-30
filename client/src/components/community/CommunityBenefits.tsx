import { Calendar, Users, MessageSquare, Newspaper } from "lucide-react";

const CommunityBenefits = () => {
  const benefits = [
    {
      icon: <Calendar className="text-primary" />,
      iconBg: "bg-blue-100",
      title: "Events & Webinars",
      description: "Regular workshops, networking events, and educational webinars on business and immigration topics."
    },
    {
      icon: <Users className="text-green-600" />,
      iconBg: "bg-green-100",
      title: "Founder Meetups",
      description: "In-person and virtual gatherings for immigrant entrepreneurs to share experiences and build connections."
    },
    {
      icon: <MessageSquare className="text-amber-500" />,
      iconBg: "bg-amber-100",
      title: "Online Community",
      description: "Private forum where members can ask questions, share resources, and collaborate on challenges."
    },
    {
      icon: <Newspaper className="text-indigo-500" />,
      iconBg: "bg-purple-100",
      title: "Newsletter",
      description: "Weekly updates on immigration policy changes, funding opportunities, and founder success stories."
    }
  ];

  return (
    <div>
      <h3 className="text-2xl font-bold mb-6">Network with Fellow Entrepreneurs</h3>
      <p className="text-neutral-600 mb-8">
        Our global community brings together founders from diverse backgrounds who face similar challenges and opportunities.
      </p>
      
      <div className="space-y-6">
        {benefits.map((benefit, index) => (
          <div key={index} className="flex">
            <div className="flex-shrink-0 mt-1">
              <div className={`w-10 h-10 rounded-full ${benefit.iconBg} flex items-center justify-center`}>
                {benefit.icon}
              </div>
            </div>
            <div className="ml-5">
              <h4 className="font-semibold">{benefit.title}</h4>
              <p className="mt-1 text-neutral-600">{benefit.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommunityBenefits;
