
import { Button } from '@/components/ui/button';
import { Shield, Star, Search } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white py-20">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Trust as a Service for
            <span className="text-blue-400 block">Rare Collections</span>
          </h1>
          <p className="text-xl text-slate-300 mb-8 leading-relaxed">
            Bangladesh's premier marketplace for authenticated collectibles. Every item verified, 
            every transaction secured, every story preserved.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8 py-4 text-lg">
              <Search className="mr-2 h-5 w-5" />
              Explore Collections
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 text-lg">
              <Shield className="mr-2 h-5 w-5" />
              Sell with Confidence
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="bg-blue-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">100% Authenticated</h3>
              <p className="text-slate-300">Every item undergoes rigorous authentication by certified experts</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Digital Provenance</h3>
              <p className="text-slate-300">Complete ownership history and condition reports for transparency</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure Escrow</h3>
              <p className="text-slate-300">Protected transactions with buyer and seller guarantees</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
