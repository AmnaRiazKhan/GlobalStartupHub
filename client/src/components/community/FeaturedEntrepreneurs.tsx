import { data } from "../../lib/data";

const FeaturedEntrepreneurs = () => {
  return (
    <div className="mt-20">
      <div className="text-center mb-12">
        <h3 className="text-2xl md:text-3xl font-bold">Featured Entrepreneurs</h3>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        {data.featuredEntrepreneurs.map((entrepreneur, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden transition hover:shadow-xl">
            <div className="h-64 bg-neutral-100">
              <img 
                src={entrepreneur.imageSrc} 
                alt={`${entrepreneur.name} portrait`} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h4 className="font-bold text-xl mb-1">{entrepreneur.name}</h4>
              <p className="text-neutral-600 text-sm mb-4">{entrepreneur.title}</p>
              <p className="text-neutral-600 mb-6">
                {entrepreneur.description}
              </p>
              <a href={`/stories/${entrepreneur.id}`} className="text-primary font-medium hover:text-primary-600 transition">
                Read {entrepreneur.gender === 'female' ? 'Her' : 'His'} Story →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedEntrepreneurs;
