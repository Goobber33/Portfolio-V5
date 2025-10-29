import NavBar from '../components/NavBar';
import HeroSection from '../components/HeroSection';
import TechStackSection from '../components/TechStackSection';
import FooterSection from '../components/Footer';

export default function Home() {
  return (
    <main className="bg-mintcream text-foreground flex min-h-screen flex-col items-center justify-start px-4 pt-16 text-center font-sans sm:px-6 sm:pt-24">
      <NavBar />
      <HeroSection />
      <TechStackSection />
      <FooterSection />
    </main>
  );
}
