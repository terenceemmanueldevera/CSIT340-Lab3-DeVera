import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutSection from './components/AboutSection'
import SkillsSection from './components/SkillsSection'
import ProjectsSection from './components/ProjectsSection'


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <main>
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
      </main>
     
    </div>
  )
}

export default App