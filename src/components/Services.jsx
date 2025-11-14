import { Palette, PenTool, Layout, Package, Camera, FileText } from 'lucide-react'

const services = [
  {
    icon: Palette,
    title: 'Brand Identity',
    desc: 'Logos, color systems, typography, and brand guidelines that scale with your business.'
  },
  {
    icon: Package,
    title: 'Packaging Design',
    desc: 'Shelf-ready packaging that tells your story and stands out in crowded markets.'
  },
  {
    icon: Layout,
    title: 'Web & UI',
    desc: 'Conversion-focused websites and interfaces built for clarity and performance.'
  },
  {
    icon: PenTool,
    title: 'Illustration',
    desc: 'Custom artwork and iconography to enhance your brand personality.'
  },
  {
    icon: Camera,
    title: 'Art Direction',
    desc: 'Photography concepts, set direction, and visual production support.'
  },
  {
    icon: FileText,
    title: 'Print & Editorial',
    desc: 'Books, brochures, posters, and collateral with meticulous typographic craft.'
  }
]

function Services() {
  return (
    <section id="services" className="relative py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">What we do</h2>
            <p className="text-gray-600 mt-2">Full-stack graphic design services for modern brands.</p>
          </div>
          <div className="hidden sm:block text-sm text-gray-600">Since 2019 • Remote-first studio</div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-xl border border-gray-200 bg-white p-6 hover:shadow-lg transition-all">
              <div className="h-10 w-10 rounded-lg bg-gray-900 text-white flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <Icon size={20} />
              </div>
              <h3 className="text-lg font-semibold mb-2">{title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
