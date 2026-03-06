import Navbar from '@/components/Navbar';
import GallerySection from '@/components/GallerySection';
import ThemeSwitcher from '@/components/ThemeSwitcher';

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <div className="pt-16">
      <GallerySection />
    </div>
    <ThemeSwitcher />
  </div>
);

export default Index;
