import SectionHeading from './SectionHeading'
import TimelineItem from './TimelineItem'

const ExperienceSection = () => {
  return (
    <section id="experience" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
      <SectionHeading title="Experience" subtitle="Where I have learned and worked." />
      <ol className="mt-8 space-y-8 border-l border-stone-200">
        <TimelineItem
          period="2024 – Present"
          title="BS Information Technology"
          place="Cebu Institute of Technology – University"
          description="Focusing on web systems, database design, software engineering, and application development."
        />
        <TimelineItem
          period="2022 – 2024"
          title="Senior High School (STEM Strand)"
          place="Don Bosco Technical College Cebu"
          description="Developed foundational computing, analytical problem-solving, and object-oriented programming principles."
        />
        <TimelineItem
          period="2018 – 2022"
          title="Junior High School"
          place="Don Bosco Technical College Cebu"
          description="Built my foundational knowledge in math and science while getting introduced to basic computing."
        />
      </ol>
    </section>
  )
}

export default ExperienceSection