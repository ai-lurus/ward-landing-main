export default function Features() {
  return (
    <section id="caracteristicas">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Pain Points */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h2 className="h2 mb-4" data-aos="fade-up">¿Tu operación enfrenta estos problemas?</h2>
            <p className="text-xl text-gray-400" data-aos="fade-up" data-aos-delay="100">
              La mayoría de las empresas de transporte de carga operan con herramientas que no fueron diseñadas para sus necesidades.
            </p>
          </div>

          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-3 lg:gap-12 items-start md:max-w-none mb-20" data-aos-id-problems>
            {/* Problem 1 */}
            <div className="relative flex flex-col items-center p-6 bg-gray-800 rounded" data-aos="fade-up" data-aos-anchor="[data-aos-id-problems]">
              <div className="w-14 h-14 mb-4 rounded-full bg-red-500/10 flex items-center justify-center">
                <svg className="w-7 h-7 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h4 className="h4 mb-2 text-center text-lg">Gestión manual con Excel y papel</h4>
              <p className="text-gray-400 text-center">Hojas de cálculo dispersas, datos duplicados y horas perdidas reconciliando información de viajes y costos.</p>
            </div>

            {/* Problem 2 */}
            <div className="relative flex flex-col items-center p-6 bg-gray-800 rounded" data-aos="fade-up" data-aos-delay="100" data-aos-anchor="[data-aos-id-problems]">
              <div className="w-14 h-14 mb-4 rounded-full bg-red-500/10 flex items-center justify-center">
                <svg className="w-7 h-7 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="h4 mb-2 text-center text-lg">Sin visibilidad de costos reales</h4>
              <p className="text-gray-400 text-center">No sabes cuánto cuesta realmente cada viaje. Casetas, combustible y viáticos se calculan a ojo, erosionando tu margen.</p>
            </div>

            {/* Problem 3 */}
            <div className="relative flex flex-col items-center p-6 bg-gray-800 rounded" data-aos="fade-up" data-aos-delay="200" data-aos-anchor="[data-aos-id-problems]">
              <div className="w-14 h-14 mb-4 rounded-full bg-red-500/10 flex items-center justify-center">
                <svg className="w-7 h-7 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h4 className="h4 mb-2 text-center text-lg">Inventario descontrolado</h4>
              <p className="text-gray-400 text-center">Refacciones, llantas y consumibles sin trazabilidad. Compras duplicadas, faltantes inesperados y pérdidas silenciosas.</p>
            </div>
          </div>

          {/* Modules / Features */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h2 className="h2 mb-4" data-aos="fade-up">Todo lo que necesitas en una sola plataforma</h2>
            <p className="text-xl text-gray-400" data-aos="fade-up" data-aos-delay="100">
              6 módulos integrados que cubren cada aspecto de tu operación logística.
            </p>
          </div>

          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none" data-aos-id-blocks>

            {/* Module 1 */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="fill-current text-purple-600" width="64" height="64" rx="32" />
                <path className="stroke-current text-purple-100" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" d="M22 24h20v16H22zM32 24v16M22 30h20" />
              </svg>
              <h4 className="h4 mb-2 text-center">Control de Viajes y Costos</h4>
              <p className="text-lg text-gray-400 text-center">
                Cálculo automático de casetas, combustible, seguro y viáticos. Conoce el costo real de cada viaje antes de que salga la unidad.
              </p>
            </div>

            {/* Module 2 */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="100" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="fill-current text-purple-600" width="64" height="64" rx="32" />
                <g transform="translate(20 20)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" fill="none">
                  <path className="stroke-current text-purple-100" d="M2 12h20M6 8l-4 4 4 4" />
                  <path className="stroke-current text-purple-300" d="M22 12H2M18 16l4-4-4-4" />
                  <rect className="stroke-current text-purple-100" x="8" y="2" width="8" height="6" rx="1" />
                  <rect className="stroke-current text-purple-300" x="8" y="16" width="8" height="6" rx="1" />
                </g>
              </svg>
              <h4 className="h4 mb-2 text-center">Gestión de Flota</h4>
              <p className="text-lg text-gray-400 text-center">
                Estados de unidades, mantenimiento preventivo y correctivo, disponibilidad en tiempo real y documentación al día.
              </p>
            </div>

            {/* Module 3 */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="200" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="fill-current text-purple-600" width="64" height="64" rx="32" />
                <path className="stroke-current text-purple-100" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" d="M21 23h22v18H21zM21 29h22M27 29v12M37 29v12" />
              </svg>
              <h4 className="h4 mb-2 text-center">Inventario</h4>
              <p className="text-lg text-gray-400 text-center">
                Entradas, salidas y trazabilidad completa. Alertas de stock mínimo y máximo para refacciones, llantas y consumibles.
              </p>
            </div>

            {/* Module 4 */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="300" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="fill-current text-purple-600" width="64" height="64" rx="32" />
                <path className="stroke-current text-purple-100" strokeWidth="2" strokeLinecap="square" fill="none" d="M35 39.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M35 39.128v-.003c0-1.113-.285-2.16-.786-3.07M35 39.128v.106A12.318 12.318 0 0128.624 41c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M32 26.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
              </svg>
              <h4 className="h4 mb-2 text-center">Operadores</h4>
              <p className="text-lg text-gray-400 text-center">
                Disponibilidad, asignación inteligente, documentación vigente (licencias, certificaciones) y historial de viajes.
              </p>
            </div>

            {/* Module 5 */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="400" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="fill-current text-purple-600" width="64" height="64" rx="32" />
                <g transform="translate(21 21)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" fill="none">
                  <ellipse className="stroke-current text-purple-300" cx="11" cy="11" rx="5.5" ry="11" />
                  <path className="stroke-current text-purple-100" d="M11 0v22M0 11h22" />
                  <circle className="stroke-current text-purple-100" cx="11" cy="11" r="11" />
                </g>
              </svg>
              <h4 className="h4 mb-2 text-center">Rutas</h4>
              <p className="text-lg text-gray-400 text-center">
                Parametrización de casetas por tipo de unidad y ejes. Costos de ruta pre-calculados para cotizaciones precisas.
              </p>
            </div>

            {/* Module 6 */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="500" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <circle className="fill-current text-purple-600" cx="32" cy="32" r="32" />
                <path className="stroke-current text-purple-100" strokeWidth="2" strokeLinecap="square" d="M21 23h22v18H21z" fill="none" />
                <path className="stroke-current text-purple-300" d="M26 28h12M26 32h12M26 36h5" strokeWidth="2" strokeLinecap="square" />
              </svg>
              <h4 className="h4 mb-2 text-center">Reportes y Analytics</h4>
              <p className="text-lg text-gray-400 text-center">
                Dashboard de KPIs, rentabilidad por ruta, costos por kilómetro y reportes ejecutivos para tomar mejores decisiones.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
