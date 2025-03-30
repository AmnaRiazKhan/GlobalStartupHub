interface StatsCardProps {
  value: string;
  description: string;
}

const StatsCard: React.FC<StatsCardProps> = ({ value, description }) => {
  return (
    <div className="bg-neutral-50 rounded-xl p-6 text-center transform transition hover:-translate-y-1 hover:shadow-lg">
      <div className="text-primary text-4xl font-bold mb-2">{value}</div>
      <p className="text-neutral-600">{description}</p>
    </div>
  );
};

export default StatsCard;
