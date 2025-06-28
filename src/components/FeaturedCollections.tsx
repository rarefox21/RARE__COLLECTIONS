
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Shield, Star, Eye } from 'lucide-react';
import { featuredItems } from '@/data/mock';

export const FeaturedCollections = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            Featured Collections
          </h2>
          <p className="text-xl text-slate-600">
            Handpicked authentic pieces from trusted sellers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredItems.map((item) => (
            <Card key={item.id} className="group cursor-pointer border-slate-200 hover:shadow-xl transition-all duration-300">
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    {item.authenticated && (
                      <Badge className="bg-green-600 hover:bg-green-700">
                        <Shield className="w-3 h-3 mr-1" />
                        Authenticated
                      </Badge>
                    )}
                    <Badge variant="secondary">{item.tag}</Badge>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-black bg-opacity-50 text-white px-2 py-1 rounded flex items-center text-sm">
                    <Eye className="w-3 h-3 mr-1" />
                    {item.views}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-slate-800 mb-2 line-clamp-2">{item.title}</h3>
                  <p className="text-sm text-slate-600 mb-3 line-clamp-2">{item.description}</p>
                  
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <span className="text-2xl font-bold text-slate-800">{item.price}</span>
                      {item.originalPrice && (
                        <span className="text-sm text-slate-500 line-through ml-2">{item.originalPrice}</span>
                      )}
                    </div>
                    <Badge variant="outline" className="text-blue-600 border-blue-200">
                      {item.condition}
                    </Badge>
                  </div>

                  <div className="flex items-center justify-between mb-4 text-sm text-slate-600">
                    <span>{item.seller}</span>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                      <span>{item.rating}</span>
                    </div>
                  </div>

                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="px-8">
            View All Collections
          </Button>
        </div>
      </div>
    </section>
  );
};
