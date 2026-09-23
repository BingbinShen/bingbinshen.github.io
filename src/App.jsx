import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import EducationSkillsSection from './components/EducationSkillsSection';
import ExperienceSection from './components/ExperienceSection';
import HeroSection from './components/HeroSection';
import ResearchSection from './components/ResearchSection';

function App() {
  return (
    <div className="page-shell">
      <HeroSection />
      <main>
        <AboutSection />
        <ExperienceSection />
        <EducationSkillsSection />
        <ResearchSection />
        <ContactSection />
      </main>
    </div>
  );
}

export default App;
