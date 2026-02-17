'use client'

import { Disclosure, Transition } from '@headlessui/react'

const faqs = [
  {
    question: '¿Qué tipo de empresas pueden usar Ward.io?',
    answer: 'Ward.io está diseñado para empresas de transporte de carga terrestre, desde flotillas de 5 unidades hasta operaciones con más de 100 camiones. Si gestionas viajes, operadores, unidades e inventario de refacciones, Ward.io es para ti.',
  },
  {
    question: '¿Cómo se calculan los costos de viaje?',
    answer: 'El sistema calcula automáticamente los costos basándose en la ruta seleccionada, el tipo de unidad y número de ejes (para casetas), rendimiento de combustible, seguro de carga y viáticos configurables. Puedes ver el costo estimado antes de confirmar el viaje.',
  },
  {
    question: '¿Mis datos están seguros?',
    answer: 'Absolutamente. Utilizamos encriptación de datos en tránsito y en reposo, autenticación segura con JWT, control de acceso basado en roles y backups automáticos. Tu información operativa está protegida con estándares de seguridad empresarial.',
  },
  {
    question: '¿Cuánto tiempo toma implementar Ward.io?',
    answer: 'La implementación típica toma entre 1 y 2 semanas. Incluye la configuración inicial de tu empresa, carga de catálogos (unidades, operadores, rutas) y capacitación de tu equipo. En el plan Empresarial incluimos onboarding dedicado.',
  },
  {
    question: '¿Puedo personalizar los módulos según mi operación?',
    answer: 'Sí. Puedes configurar tipos de unidades, categorías de inventario, parámetros de rutas y casetas, roles de usuario y más. El plan Empresarial además incluye white-labeling y acceso a API para integraciones personalizadas.',
  },
  {
    question: '¿Ofrecen soporte técnico?',
    answer: 'Todos los planes incluyen soporte. El plan Básico incluye soporte por email, el Profesional añade soporte prioritario con tiempos de respuesta garantizados, y el Empresarial incluye un ejecutivo de cuenta dedicado y soporte 24/7.',
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
              Resuelve tus dudas sobre Ward.io y cómo puede ayudar a tu empresa.
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
