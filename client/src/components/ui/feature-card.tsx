import React, { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <div className="flex items-center mb-4">
        <div className="mr-4">
          {icon}
        </div>
        <h4 className="font-semibold text-lg">{title}</h4>
      </div>
      <p className="text-neutral-600">{description}</p>
    </div>
  );
};

export default FeatureCard;
