
import { Shield, FileText, Star, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export const TrustSection = () => {
  const trustFeatures = [
    {
      icon: Shield,
      title: "Expert Authentication",
      description: "Certified specialists verify every collectible using advanced techniques and decades of experience.",
      stats: "99.9% accuracy rate"
    },
    {
      icon: FileText,
      title: "Digital Certificates",
      description: "Blockchain-backed certificates of authenticity that can never be forged or duplicated.",
      stats: "Lifetime validity"
    },
    {
      icon: Star,
      title: "Condition Grading",
      description: "Professional condition assessment using industry-standard grading scales and high-resolution imaging.",
      stats: "20+ grade points"
    },
    {
      icon: Users,
      title: "Community Trust",
      description: "Verified seller ratings, buyer protection, and community-driven quality assurance.",
      stats: "10,000+ verified users"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            Why Trust Matters in Collectibles
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            In a market where authenticity determines value, we've built the most comprehensive 
            trust infrastructure for collectors and dealers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustFeatures.map((feature, index) => (
            <Card key={index} className="border-slate-200 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">{feature.title}</h3>
                <p className="text-slate-600 mb-4 text-sm leading-relaxed">{feature.description}</p>
                <div className="text-blue-600 font-semibold text-sm">{feature.stats}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
