import SectionHeading from './SectionHeading'
import ContactLink from './ContactLink'

const ContactSection = () => {
  return (
    <section id="contact" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
      <SectionHeading title="Contact" subtitle="Hello!" />
      <ul className="mt-8 space-y-3">
        <ContactLink
          label="Email"
          href="mailto:terenceemmanuel.devera@cit.edu"
          text="terenceemmanuel.devera@cit.edu"
        />
        <ContactLink
          label="GitHub"
          href="https://github.com/terenceemmanueldevera"
          text="github.com/terenceemmanueldevera"
        />
        <ContactLink
          label="LinkedIn"
          href="https://www.linkedin.com/in/terence-emmanuel-de-vera-3222963a1/"
          text="linkedin.com/in/terenceemmanueldevera"
        />
      </ul>
    </section>
  )
}

export default ContactSection