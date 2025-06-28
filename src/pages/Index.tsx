
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { FeaturedCollections } from '@/components/FeaturedCollections';
import { TrustSection } from '@/components/TrustSection';
import { Categories } from '@/components/Categories';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      <Hero />
      <TrustSection />
      <Categories />
      <FeaturedCollections />
      <Footer />
    </div>
  );
};

export default Index;
