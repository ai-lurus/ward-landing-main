export default function Hero() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">

        {/* Illustration behind hero content */}
        <div className="absolute left-0 bottom-0 -ml-20 hidden lg:block pointer-events-none" aria-hidden="true" data-aos="fade-up" data-aos-delay="400">
          <svg className="max-w-full" width="564" height="552" viewBox="0 0 564 552" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="illustration-02" x1="-3.766" y1="300.204" x2="284.352" y2="577.921" gradientUnits="userSpaceOnUse">
                <stop stopColor="#5D5DFF" stopOpacity=".01" />
                <stop offset="1" stopColor="#5D5DFF" stopOpacity=".32" />
              </linearGradient>
            </defs>
            <path fillRule="evenodd" clipRule="evenodd" d="M151.631 22.954c19.025-13.987 40.754-20.902 67.157-20.902 18.865 0 40.12 3.534 64.461 10.542 15.855 4.566 30.274 8.448 43.282 11.908-3.117-.73-6.316-1.474-9.604-2.238-13.789-3.205-29.419-6.84-46.941-11.331C153.37-18.963 125.867 40.456 75.939 148.322l-.003.006a7576.221 7576.221 0 01-7.711 16.624c-29.474 63.279-43.616 99.759-44.264 135.927-.659 36.738 12.251 72.311 47.633 131.253 35.391 58.957 60.19 86.192 91.501 100.484.962.439 1.93.865 2.905 1.279-9.73-2.472-18.561-5.625-26.916-9.633-32.753-15.71-57.88-43.982-92.714-104.315-34.834-60.333-46.755-96.23-43.984-132.449 2.732-35.713 20.082-71.213 55.526-132.603a7349.326 7349.326 0 009.317-16.2l.004-.007c29.787-51.892 53.315-92.88 84.398-115.734z" fill="url(#illustration-02)" />
          </svg>
        </div>

        {/* Hero content */}
        <div className="relative pt-32 pb-10 md:pt-40 md:pb-16">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h1 mb-4" data-aos="fade-up">
              Digitaliza y optimiza la operación de tu flota de transporte
            </h1>
            <p className="text-xl text-gray-400 mb-8" data-aos="fade-up" data-aos-delay="200">
              Comienza a digitalizar tu operación con nuestro módulo de inventario. Control de viajes, flota, operadores y más, en camino.
            </p>
            <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center">
              <div data-aos="fade-up" data-aos-delay="400">
                <a className="btn text-white bg-purple-600 hover:bg-purple-700 w-full mb-4 sm:w-auto sm:mb-0" href="#contacto">Ver demo del módulo de Inventario</a>
              </div>
              <div data-aos="fade-up" data-aos-delay="600">
                <a className="btn text-white bg-gray-700 hover:bg-gray-800 w-full sm:w-auto sm:ml-4" href="#caracteristicas">Conocer más</a>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 text-center" data-aos="fade-up" data-aos-delay="800">
            <div className="bg-gray-800 rounded p-4">
              <div className="text-2xl font-bold text-purple-500 mb-1">Menos papeleo</div>
              <div className="text-gray-400 text-sm">Reemplaza hojas de cálculo y registros manuales por un sistema centralizado</div>
            </div>
            <div className="bg-gray-800 rounded p-4">
              <div className="text-2xl font-bold text-purple-500 mb-1">Mayor precisión</div>
              <div className="text-gray-400 text-sm">Trazabilidad completa de cada movimiento de inventario, sin datos perdidos</div>
            </div>
            <div className="bg-gray-800 rounded p-4">
              <div className="text-2xl font-bold text-purple-500 mb-1">Menos faltantes</div>
              <div className="text-gray-400 text-sm">Alertas automáticas de stock mínimo antes de que afecten tu operación</div>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
