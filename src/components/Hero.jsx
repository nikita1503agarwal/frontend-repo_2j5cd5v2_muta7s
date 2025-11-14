import Spline from '@splinetool/react-spline'
import { ArrowRight } from 'lucide-react'

function Hero() {
  return (
    <section className="relative min-h-[90vh] pt-24 overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-white/90 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 items-center min-h-[70vh]">
          <div className="lg:col-span-6 space-y-6">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-black text-white">Tech • Portfolio • Modern</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
              graphic_den
            </h1>
            <p className="text-lg text-gray-700 max-w-xl">
              A design studio crafting distinctive brand identities, visual systems, and digital experiences. Professional. Playful. Purposeful.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#work" className="inline-flex items-center gap-2 bg-gray-900 text-white px-5 py-3 rounded-md hover:bg-black transition-colors">
                View our work <ArrowRight size={18} />
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-gray-300 hover:border-gray-900 hover:text-gray-900 transition-colors">
                Get a quote
              </a>
            </div>
            <div className="flex items-center gap-6 pt-4 text-sm text-gray-600">
              <span>Branding</span>
              <span>Packaging</span>
              <span>Web design</span>
              <span>Illustration</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
