export default function Pricing() {
  return (
    <section id="precios">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h2 className="h2 mb-4" data-aos="fade-up">Planes que crecen con tu operación</h2>
            <p className="text-xl text-gray-400" data-aos="fade-up" data-aos-delay="100">
              Elige el plan que mejor se adapte al tamaño y necesidades de tu flota.
            </p>
          </div>

          {/* Pricing cards */}
          <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none">

            {/* Basic */}
            <div className="relative flex flex-col h-full p-6 bg-gray-800 rounded" data-aos="fade-up">
              <div className="mb-4 pb-4 border-b border-gray-700">
                <div className="text-lg font-semibold text-purple-400 mb-1">Básico</div>
                <div className="inline-flex items-baseline mb-2">
                  <span className="text-3xl font-bold text-white">$499</span>
                  <span className="text-gray-400 ml-2">USD/mes</span>
                </div>
                <div className="text-gray-400 text-sm">Hasta 15 unidades</div>
              </div>
              <ul className="text-gray-400 text-sm space-y-3 grow mb-6">
                <li className="flex items-center">
                  <svg className="w-3 h-3 fill-current text-green-500 mr-3 shrink-0" viewBox="0 0 12 12"><path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" /></svg>
                  Gestión de usuarios y roles
                </li>
                <li className="flex items-center">
                  <svg className="w-3 h-3 fill-current text-green-500 mr-3 shrink-0" viewBox="0 0 12 12"><path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" /></svg>
                  Módulo de Inventario
                </li>
                <li className="flex items-center">
                  <svg className="w-3 h-3 fill-current text-green-500 mr-3 shrink-0" viewBox="0 0 12 12"><path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" /></svg>
                  Gestión de Unidades (hasta 15)
                </li>
                <li className="flex items-center">
                  <svg className="w-3 h-3 fill-current text-green-500 mr-3 shrink-0" viewBox="0 0 12 12"><path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" /></svg>
                  Gestión de Operadores
                </li>
                <li className="flex items-center">
                  <svg className="w-3 h-3 fill-current text-green-500 mr-3 shrink-0" viewBox="0 0 12 12"><path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" /></svg>
                  Soporte por email
                </li>
              </ul>
              <a className="btn text-white bg-gray-700 hover:bg-gray-600 w-full" href="#contacto">Comenzar</a>
            </div>

            {/* Professional */}
            <div className="relative flex flex-col h-full p-6 bg-gray-800 rounded border-2 border-purple-600" data-aos="fade-up" data-aos-delay="100">
              <div className="absolute top-0 right-0 mr-6 -mt-3">
                <span className="inline-flex px-3 py-1 text-xs font-semibold text-white bg-purple-600 rounded-full">Popular</span>
              </div>
              <div className="mb-4 pb-4 border-b border-gray-700">
                <div className="text-lg font-semibold text-purple-400 mb-1">Profesional</div>
                <div className="inline-flex items-baseline mb-2">
                  <span className="text-3xl font-bold text-white">$899</span>
                  <span className="text-gray-400 ml-2">USD/mes</span>
                </div>
                <div className="text-gray-400 text-sm">Hasta 40 unidades</div>
              </div>
              <ul className="text-gray-400 text-sm space-y-3 grow mb-6">
                <li className="flex items-center">
                  <svg className="w-3 h-3 fill-current text-green-500 mr-3 shrink-0" viewBox="0 0 12 12"><path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" /></svg>
                  Todo del plan Básico
                </li>
                <li className="flex items-center">
                  <svg className="w-3 h-3 fill-current text-green-500 mr-3 shrink-0" viewBox="0 0 12 12"><path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" /></svg>
                  Control de Viajes y Costos
                </li>
                <li className="flex items-center">
                  <svg className="w-3 h-3 fill-current text-green-500 mr-3 shrink-0" viewBox="0 0 12 12"><path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" /></svg>
                  Módulo de Rutas
                </li>
                <li className="flex items-center">
                  <svg className="w-3 h-3 fill-current text-green-500 mr-3 shrink-0" viewBox="0 0 12 12"><path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" /></svg>
                  Reportes operativos
                </li>
                <li className="flex items-center">
                  <svg className="w-3 h-3 fill-current text-green-500 mr-3 shrink-0" viewBox="0 0 12 12"><path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" /></svg>
                  Unidades hasta 40
                </li>
                <li className="flex items-center">
                  <svg className="w-3 h-3 fill-current text-green-500 mr-3 shrink-0" viewBox="0 0 12 12"><path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" /></svg>
                  Soporte prioritario
                </li>
              </ul>
              <a className="btn text-white bg-purple-600 hover:bg-purple-700 w-full" href="#contacto">Comenzar</a>
            </div>

            {/* Enterprise */}
            <div className="relative flex flex-col h-full p-6 bg-gray-800 rounded" data-aos="fade-up" data-aos-delay="200">
              <div className="mb-4 pb-4 border-b border-gray-700">
                <div className="text-lg font-semibold text-purple-400 mb-1">Empresarial</div>
                <div className="inline-flex items-baseline mb-2">
                  <span className="text-3xl font-bold text-white">$1,499</span>
                  <span className="text-gray-400 ml-2">USD/mes</span>
                </div>
                <div className="text-gray-400 text-sm">Unidades ilimitadas</div>
              </div>
              <ul className="text-gray-400 text-sm space-y-3 grow mb-6">
                <li className="flex items-center">
                  <svg className="w-3 h-3 fill-current text-green-500 mr-3 shrink-0" viewBox="0 0 12 12"><path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" /></svg>
                  Todo del plan Profesional
                </li>
                <li className="flex items-center">
                  <svg className="w-3 h-3 fill-current text-green-500 mr-3 shrink-0" viewBox="0 0 12 12"><path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" /></svg>
                  Analytics avanzado
                </li>
                <li className="flex items-center">
                  <svg className="w-3 h-3 fill-current text-green-500 mr-3 shrink-0" viewBox="0 0 12 12"><path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" /></svg>
                  Notificaciones y alertas
                </li>
                <li className="flex items-center">
                  <svg className="w-3 h-3 fill-current text-green-500 mr-3 shrink-0" viewBox="0 0 12 12"><path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" /></svg>
                  API de integración
                </li>
                <li className="flex items-center">
                  <svg className="w-3 h-3 fill-current text-green-500 mr-3 shrink-0" viewBox="0 0 12 12"><path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" /></svg>
                  White-labeling
                </li>
                <li className="flex items-center">
                  <svg className="w-3 h-3 fill-current text-green-500 mr-3 shrink-0" viewBox="0 0 12 12"><path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" /></svg>
                  Soporte dedicado + onboarding
                </li>
              </ul>
              <a className="btn text-white bg-gray-700 hover:bg-gray-600 w-full" href="#contacto">Contactar ventas</a>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
