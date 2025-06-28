
import { Card, CardContent } from '@/components/ui/card';

export const Categories = () => {
  const categories = [
    {
      name: "Vintage Watches",
      count: "2,450+ items",
      image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=300&h=200&fit=crop",
      featured: true
    },
    {
      name: "Rare Coins",
      count: "5,200+ items", 
      image: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?w=300&h=200&fit=crop",
      featured: true
    },
    {
      name: "Art & Paintings",
      count: "1,800+ items",
      image: "https://images.unsplash.com/photo-1578321272176-b7bbc0679853?w=300&h=200&fit=crop",
      featured: false
    },
    {
      name: "Vintage Cards",
      count: "3,100+ items",
      image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=300&h=200&fit=crop",
      featured: false
    },
    {
      name: "Stamps",
      count: "4,700+ items",
      image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=300&h=200&fit=crop",
      featured: false
    },
    {
      name: "Antique Books",
      count: "900+ items",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=200&fit=crop",
      featured: false
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            Explore Categories
          </h2>
          <p className="text-xl text-slate-600">
            Discover authenticated collectibles across diverse categories
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Card key={index} className={`group cursor-pointer border-slate-200 hover:shadow-xl transition-all duration-300 ${category.featured ? 'ring-2 ring-blue-200' : ''}`}>
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {category.featured && (
                    <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Featured
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">{category.name}</h3>
                  <p className="text-slate-600">{category.count}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
