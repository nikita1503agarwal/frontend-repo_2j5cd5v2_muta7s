const projects = [
  {
    title: 'Aurora Coffee',
    tag: 'Brand & Packaging',
    image: 'https://images.unsplash.com/photo-1517705008128-361805f42e86?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Waveform FM',
    tag: 'Identity & UI',
    image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Lumen Studio',
    tag: 'Editorial',
    image: 'https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Neon City',
    tag: 'Art Direction',
    image: 'https://images.unsplash.com/photo-1672872476232-da16b45c9001?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxOZW9uJTIwQ2l0eXxlbnwwfDB8fHwxNzYzMTIwMjE3fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
]

function Work() {
  return (
    <section id="work" className="relative py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Selected work</h2>
            <p className="text-gray-600 mt-2">A glimpse into brand systems and visuals we craft.</p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((p) => (
            <div key={p.title} className="group rounded-xl overflow-hidden border border-gray-200 bg-white">
              <div className="aspect-[4/5] overflow-hidden">
                <img src={p.image} alt={p.title} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-4">
                <div className="text-xs text-gray-500">{p.tag}</div>
                <div className="font-semibold">{p.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Work
