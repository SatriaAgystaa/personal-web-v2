import HeaderSection from '../components/About/HeaderSection';
import CareerSection from '../components/About/CareerSection';
import EducationSection from '../components/About/EducationSection';
import SkillCarousel from '../components/About/SkillCarousel';
import CallToAction from '../components/About/CallToAction';
import Footer from '../components/About/Footer';

export default function AboutPage() {
  return (
    <main className="container mx-auto px-6 py-8 max-w-5xl">
      <HeaderSection />
      <CareerSection />
      <EducationSection />
      <SkillCarousel />
      <CallToAction />
      <Footer />
    </main>
  );
}
