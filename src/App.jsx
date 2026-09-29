import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutSection from './components/AboutSection'
import SkillsSection from './components/SkillsSection'


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <main>
        <AboutSection />
        <SkillsSection />
      </main>
     
    </div>
  )
}

export default App