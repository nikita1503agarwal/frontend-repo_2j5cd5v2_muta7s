function About() {
  return (
    <section id="about" className="relative py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-10 items-start">
          <div className="lg:col-span-1">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">We design with intent</h2>
          </div>
          <div className="lg:col-span-2 space-y-6 text-gray-700 leading-relaxed">
            <p>graphic_den is a boutique design studio partnering with founders and marketing teams to build expressive brands with strategic clarity. Our process blends research, visual exploration, and iterative craft.</p>
            <p>We collaborate remotely with clients across time zones. Projects range from fast-turnaround campaigns to full identity systems and web design for product launches.</p>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="p-5 rounded-xl border border-gray-200 bg-white">
                <div className="text-sm text-gray-500">Approach</div>
                <div className="font-semibold mt-1">Discovery → Direction → Design → Deliver</div>
              </div>
              <div className="p-5 rounded-xl border border-gray-200 bg-white">
                <div className="text-sm text-gray-500">Turnaround</div>
                <div className="font-semibold mt-1">2–8 weeks depending on scope</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
