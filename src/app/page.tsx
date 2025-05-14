import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ProfileSection from '@/components/ProfileSection';
import ExperienceSection from '@/components/ExperienceSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="ma-layout">
      <header className="ma-layout__item ma-layout__item--left flex flex-col">
        <h1 className="ma-logo">KIM JE MIN</h1>
        <h3 className="flex-none text-xs uppercase tracking-wider pt-9 pb-5">Portfolio</h3>
        <Header />
      </header>

      <main className="ma-layout__item">
        <article className="ma-article">
          <section className="ma-article__section overflow-auto">
            <ProfileSection />
            <ExperienceSection />
            <SkillsSection />
            <ProjectsSection />
            <ContactSection />
            <Footer />
          </section>
          
          <section className="ma-article__section flex flex-col overflow-auto">
            <HeroSection />
          </section>
        </article>
      </main>
    </div>
  );
}
