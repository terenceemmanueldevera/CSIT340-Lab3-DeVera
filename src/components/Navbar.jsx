import NavLink from './NavLink'

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-10 border-b border-stone-200 bg-white">
      <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="font-semibold">Terence Emmanuel De Vera</a>
        <div className="flex gap-6 text-sm text-stone-600">
         <p>About</p>
         <p>Projects</p>
            <p>Skills</p>
            <p>Experience</p>
            <p>Contact</p>
        </div>
      </div>
    </nav>
  )
}

export default Navbar