
import { Card, CardContent } from '@/components/ui/card';
import { categories } from '@/data/mock';

export const Categories = () => {
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
