import SectionHeading from './SectionHeading'
import ProjectCard from './ProjectCard'

const ProjectsSection = () => {
  return (
    <section id="projects" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
      <SectionHeading title="Projects" subtitle="Things I have taken part in and developed:" />
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <ProjectCard
          year="2026"
          title="DailySaga Mobile App"
          description="A student planner and productivity mobile application featuring modular study routines and tracking."
          tech="Kotlin · Android Studio · Figma"
          link="https://github.com/terenceemmanueldevera"
        />
        <ProjectCard
          year="2026"
          title="LilBag Spatial Bag Organizer"
          description="A spatial inventory and bag tracking system designed to help students track school supplies."
          tech="Mobile UX · System Architecture"
          link="https://github.com/terenceemmanueldevera"
        />
        <ProjectCard
          year="2026"
          title="Voter Eligibility System"
          description="A residency-based barangay voter validation database and ERD management system."
          tech="SQL · Database Design · ERD"
          link="https://github.com/terenceemmanueldevera"
        />
        <ProjectCard
          year="2025"
          title="The Incorruptible (Kababalaghan)"
          description="A turn-based RPG console game centered around Philippine mythology and battle logic."
          tech="Java · OOP"
          link="https://github.com/terenceemmanueldevera"
        />
      </div>
    </section>
  )
}

export default ProjectsSection