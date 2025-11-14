import { useState } from 'react'

function Contact() {
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)

    // Simulate submission success
    setStatus('Thanks! We will reach out soon.')
    e.currentTarget.reset()
  }

  return (
    <section id="contact" className="relative py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Let’s build something great</h2>
            <p className="text-gray-600 mt-3">Tell us about your project and goals. We’ll get back within 1–2 business days.</p>
            <div className="mt-8 grid grid-cols-2 gap-4 text-sm text-gray-600">
              <div className="p-4 rounded-lg border bg-white">hello@graphicden.studio</div>
              <div className="p-4 rounded-lg border bg-white">@graphic_den</div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl border border-gray-200 grid gap-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <input name="name" required placeholder="Name" className="w-full rounded-md border-gray-300 focus:border-gray-900 focus:ring-gray-900" />
              <input name="email" type="email" required placeholder="Email" className="w-full rounded-md border-gray-300 focus:border-gray-900 focus:ring-gray-900" />
            </div>
            <input name="company" placeholder="Company (optional)" className="w-full rounded-md border-gray-300 focus:border-gray-900 focus:ring-gray-900" />
            <select name="budget" defaultValue="" className="w-full rounded-md border-gray-300 focus:border-gray-900 focus:ring-gray-900">
              <option value="" disabled>Budget range</option>
              <option>Under $2k</option>
              <option>$2k – $5k</option>
              <option>$5k – $10k</option>
              <option>$10k+</option>
            </select>
            <textarea name="message" required rows="5" placeholder="Tell us about your project" className="w-full rounded-md border-gray-300 focus:border-gray-900 focus:ring-gray-900" />
            <button className="inline-flex justify-center rounded-md bg-gray-900 text-white px-5 py-3 hover:bg-black transition-colors">Send request</button>
            {status && <p className="text-sm text-green-700">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
