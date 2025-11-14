import { useState } from 'react'
import { Menu, X } from 'lucide-react'

function Navbar() {
  const [open, setOpen] = useState(false)

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setOpen(false)
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white/70 backdrop-blur-md border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-md bg-gradient-to-br from-purple-600 to-blue-600" />
            <span className="text-xl font-bold tracking-tight">graphic_den</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-700">
            <button onClick={() => scrollTo('services')} className="hover:text-gray-900 transition-colors">Services</button>
            <button onClick={() => scrollTo('work')} className="hover:text-gray-900 transition-colors">Work</button>
            <button onClick={() => scrollTo('about')} className="hover:text-gray-900 transition-colors">About</button>
            <button onClick={() => scrollTo('contact')} className="hover:text-gray-900 transition-colors">Contact</button>
            <a href="#contact" onClick={(e)=>{e.preventDefault();scrollTo('contact')}} className="inline-flex items-center rounded-md bg-gray-900 text-white px-4 py-2 hover:bg-black transition-colors">Get a Quote</a>
          </nav>

          <button className="md:hidden p-2 rounded-md hover:bg-black/5" onClick={()=>setOpen(!open)} aria-label="Toggle Menu">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="grid gap-2 text-sm font-medium text-gray-700">
              <button onClick={() => scrollTo('services')} className="text-left px-2 py-2 rounded hover:bg-black/5">Services</button>
              <button onClick={() => scrollTo('work')} className="text-left px-2 py-2 rounded hover:bg-black/5">Work</button>
              <button onClick={() => scrollTo('about')} className="text-left px-2 py-2 rounded hover:bg-black/5">About</button>
              <button onClick={() => scrollTo('contact')} className="text-left px-2 py-2 rounded hover:bg-black/5">Contact</button>
              <a href="#contact" onClick={(e)=>{e.preventDefault();scrollTo('contact')}} className="mt-1 inline-flex items-center justify-center rounded-md bg-gray-900 text-white px-4 py-2 hover:bg-black transition-colors">Get a Quote</a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Navbar
