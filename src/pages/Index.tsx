import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import GallerySection from '@/components/GallerySection';
import CraftedForYourSpaceSection from '@/components/CraftedForYourSpaceSection';
import PersonalizeOrderSection from '@/components/PersonalizeOrderSection';
import RealSpacesSection from '@/components/RealSpacesSection';
import StickerCollectionSection from '@/components/StickerCollectionSection';
import PaintingToDecorSection from '@/components/PaintingToDecorSection';
import ContactSection from '@/components/ContactSection';
import FooterSection from '@/components/FooterSection';
import ThemeSwitcher from '@/components/ThemeSwitcher';

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <ServicesSection />
    <GallerySection />
    <CraftedForYourSpaceSection />
    <PersonalizeOrderSection />
    <RealSpacesSection />
    <StickerCollectionSection />
    <PaintingToDecorSection />
    <ContactSection />
    <FooterSection />
    <ThemeSwitcher />
  </div>
);

export default Index;
