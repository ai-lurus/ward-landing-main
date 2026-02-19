'use client'

import { Disclosure, Transition } from '@headlessui/react'

const faqs = [
  {
    question: '¿Qué tipo de empresas pueden usar Ward?',
    answer: 'Ward está diseñado para empresas de transporte de carga terrestre que quieren dejar de gestionar su operación con hojas de cálculo. Si manejas refacciones, llantas o consumibles para tu flota, el módulo de Inventario es para ti hoy. Más módulos estarán disponibles próximamente.',
  },
  {
    question: '¿Qué puedo gestionar con el módulo de Inventario?',
    answer: 'Puedes registrar entradas y salidas de refacciones, llantas y consumibles, definir niveles mínimos y máximos de stock, y consultar el historial completo de movimientos por artículo. Cada movimiento queda trazado con fecha, responsable y motivo.',
  },
  {
    question: '¿Mis datos están seguros?',
    answer: 'Sí. Utilizamos encriptación de datos en tránsito y en reposo, autenticación con JWT y control de acceso basado en roles. Tu información operativa no es accesible para terceros.',
  },
  {
    question: '¿Cuánto tiempo toma empezar a usar Ward?',
    answer: 'El proceso de configuración inicial es sencillo: defines tus categorías, cargas tu catálogo de artículos y empiezas a registrar movimientos. Nuestro equipo te acompaña en el proceso para que no arranques solo.',
  },
  {
    question: '¿Puedo adaptar el inventario a mi operación?',
    answer: 'Sí. Puedes crear tus propias categorías de artículos, definir unidades de medida, configurar niveles de stock por artículo y asignar roles a tu equipo según quién puede ver o registrar movimientos.',
  },
  {
    question: '¿Ofrecen soporte técnico?',
    answer: 'Sí. Puedes contactarnos directamente por correo y nuestro equipo te responde. Estamos en una etapa temprana y eso significa atención cercana — no un bot ni un formulario perdido.',
  },
]

export default function Faq() {
  return (
    <section id="faq">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h2 className="h2 mb-4" data-aos="fade-up">Preguntas Frecuentes</h2>
            <p className="text-xl text-gray-400" data-aos="fade-up" data-aos-delay="100">
              Resuelve tus dudas sobre Ward y cómo puede ayudar a tu empresa.
            </p>
          </div>

          {/* FAQ items */}
          <div className="max-w-3xl mx-auto">
            <div className="space-y-4" data-aos="fade-up" data-aos-delay="200">
              {faqs.map((faq, index) => (
                <Disclosure key={index}>
                  {({ open }) => (
                    <div className="bg-gray-800 rounded">
                      <Disclosure.Button className="flex justify-between items-center w-full px-6 py-4 text-left">
                        <span className="font-medium text-gray-200">{faq.question}</span>
                        <svg
                          className={`w-4 h-4 text-purple-500 shrink-0 ml-4 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </Disclosure.Button>
                      <Transition
                        enter="transition duration-100 ease-out"
                        enterFrom="transform scale-95 opacity-0"
                        enterTo="transform scale-100 opacity-100"
                        leave="transition duration-75 ease-out"
                        leaveFrom="transform scale-100 opacity-100"
                        leaveTo="transform scale-95 opacity-0"
                      >
                        <Disclosure.Panel className="px-6 pb-4 text-gray-400">
                          {faq.answer}
                        </Disclosure.Panel>
                      </Transition>
                    </div>
                  )}
                </Disclosure>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
