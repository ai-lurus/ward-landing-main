'use client'

import { useState } from 'react'

const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycby0Y9Hdi88bALp0akQLkmLlE6P5kiZPFuFNK7LRYfpLPgxyEPtqhtajElnXs8tTcG0/exec'

type FormData = {
  nombre: string
  empresa: string
  unidades: string
  email: string
  telefono: string
}

export default function Newsletter() {
  const [form, setForm] = useState<FormData>({
    nombre: '',
    empresa: '',
    unidades: '',
    email: '',
    telefono: '',
  })
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, fecha: new Date().toLocaleString('es-MX') }),
      })
      setSent(true)
    } catch {
      setSent(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contacto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        <div className="relative bg-purple-600 py-10 px-8 md:py-16 md:px-12 rounded" data-aos="fade-up">

          {/* Background illustration */}
          <div className="absolute right-0 top-0 -ml-40 pointer-events-none" aria-hidden="true">
            <svg width="238" height="110" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="illustration-04" x1="369.483" y1="-84.633" x2="139.954" y2="-199.798" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#fff" stopOpacity=".01" />
                  <stop offset="1" stopColor="#fff" stopOpacity=".24" />
                </linearGradient>
              </defs>
              <path fillRule="evenodd" clipRule="evenodd" d="M189.135 89.198c3.624 9.678 7.039 18.799 15.713 18.187 7.885-.548 19.733-2.523 33.152-5.256v2.04c-13.345 2.709-25.125 4.663-33.013 5.211-.331.023-.657.034-.975.034-9.441 0-13.176-9.972-16.792-19.627-3.571-9.536-6.946-18.545-15.389-16.96-13.086 2.455-24.348 3.539-37.385 4.794l-.024.002c-8.07.776-17.217 1.657-27.841 2.98-4.629.58-8.116 1.595-10.919 2.411l-.016.005c-6.68 1.947-10.032 2.924-14.897-6.267-3.62-6.842-8.541-7.827-14.24-8.967h-.001c-4.793-.959-10.225-2.046-15.65-6.76C40.64 52.141 15.48 20.345.66 0H3.13c14.82 20.254 39.089 50.863 49.042 59.515 5.023 4.367 9.956 5.354 14.73 6.31 5.94 1.187 11.552 2.31 15.616 9.991 3.443 6.51 5.39 7.141 9.773 6.057" fill="url(#illustration-04)" />
            </svg>
          </div>

          <div className="relative lg:flex lg:items-center lg:gap-12">

            {/* Left: heading + value props */}
            <div className="lg:w-5/12 mb-8 lg:mb-0">
              <h3 className="h3 text-white mb-4">Solicita una demo del módulo de Inventario</h3>
              <p className="text-purple-200 text-lg mb-8">Te mostramos cómo funciona en menos de 30 minutos. Sin compromisos.</p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center text-green-400 text-xs mt-0.5">✓</span>
                  <div>
                    <div className="text-white font-medium">Demo en vivo</div>
                    <div className="text-purple-300 text-sm">Recorrido real del módulo, no un video grabado</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center text-green-400 text-xs mt-0.5">✓</span>
                  <div>
                    <div className="text-white font-medium">Sin compromisos</div>
                    <div className="text-purple-300 text-sm">Sin tarjeta de crédito ni contrato</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center text-green-400 text-xs mt-0.5">✓</span>
                  <div>
                    <div className="text-white font-medium">Respuesta en menos de 24 h</div>
                    <div className="text-purple-300 text-sm">Te contactamos por el canal que prefieras</div>
                  </div>
                </li>
              </ul>
            </div>

            {/* Right: form */}
            <div className="lg:w-7/12">
              {sent ? (
                <div className="bg-purple-700 border border-purple-400 rounded p-8 text-center">
                  <div className="text-white text-xl font-semibold mb-2">¡Listo, gracias!</div>
                  <p className="text-purple-200">Nos ponemos en contacto contigo en menos de 24 horas.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      name="nombre"
                      type="text"
                      required
                      value={form.nombre}
                      onChange={handleChange}
                      placeholder="Nombre completo"
                      className="appearance-none bg-purple-700 border border-purple-500 focus:border-purple-300 focus:outline-none rounded px-4 py-3 text-white placeholder-purple-400"
                    />
                    <input
                      name="empresa"
                      type="text"
                      required
                      value={form.empresa}
                      onChange={handleChange}
                      placeholder="Empresa"
                      className="appearance-none bg-purple-700 border border-purple-500 focus:border-purple-300 focus:outline-none rounded px-4 py-3 text-white placeholder-purple-400"
                    />
                    <div className="relative">
                      <select
                        name="unidades"
                        required
                        value={form.unidades}
                        onChange={handleChange}
                        className="appearance-none w-full bg-purple-700 border border-purple-500 focus:border-purple-300 focus:outline-none rounded px-4 py-3 text-white"
                      >
                        <option value="" disabled>Número de unidades</option>
                        <option value="1-10">1 – 10 unidades</option>
                        <option value="11-30">11 – 30 unidades</option>
                        <option value="31-100">31 – 100 unidades</option>
                        <option value="+100">Más de 100 unidades</option>
                      </select>
                      <svg className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-purple-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                    <input
                      name="telefono"
                      type="tel"
                      value={form.telefono}
                      onChange={handleChange}
                      placeholder="Teléfono / WhatsApp"
                      className="appearance-none bg-purple-700 border border-purple-500 focus:border-purple-300 focus:outline-none rounded px-4 py-3 text-white placeholder-purple-400"
                    />
                    <input
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="Correo electrónico"
                      className="appearance-none bg-purple-700 border border-purple-500 focus:border-purple-300 focus:outline-none rounded px-4 py-3 text-white placeholder-purple-400 sm:col-span-2"
                    />
                    <div className="sm:col-span-2">
                      <button
                        type="submit"
                        disabled={loading}
                        className="btn text-purple-600 bg-purple-100 hover:bg-white shadow w-full disabled:opacity-60 disabled:cursor-not-allowed"
                      >
                        {loading ? 'Enviando...' : 'Solicitar demo'}
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
