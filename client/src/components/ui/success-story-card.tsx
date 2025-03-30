interface SuccessStoryCardProps {
  name: string;
  founder: string;
  description: string;
  imageSrc: string;
}

const SuccessStoryCard: React.FC<SuccessStoryCardProps> = ({ 
  name, 
  founder, 
  description, 
  imageSrc 
}) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md transition hover:shadow-xl">
      <div className="h-48 bg-neutral-100">
        <img 
          src={imageSrc} 
          alt={`${name} headquarters or product`} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center mb-4">
          <span className="font-bold text-xl">{name}</span>
          <span className="ml-2 text-sm bg-blue-100 text-primary px-2 py-1 rounded">{founder}</span>
        </div>
        <p className="text-neutral-600">{description}</p>
      </div>
    </div>
  );
};

export default SuccessStoryCard;
