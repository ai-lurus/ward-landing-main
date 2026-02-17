export default function Newsletter() {
  return (
    <section id="contacto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* CTA box */}
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

          <div className="relative flex flex-col lg:flex-row justify-between items-center">

            {/* CTA content */}
            <div className="mb-6 lg:mr-16 lg:mb-0 text-center lg:text-left lg:w-1/2">
              <h3 className="h3 text-white mb-2">Empieza a optimizar tu operación hoy</h3>
              <p className="text-purple-200 text-lg">Solicita una demo personalizada y descubre cómo Ward.io puede reducir tus costos operativos hasta un 15%.</p>
            </div>

            {/* CTA form */}
            <form className="w-full lg:w-1/2">
              <div className="flex flex-col sm:flex-row justify-center max-w-xs mx-auto sm:max-w-md lg:max-w-none">
                <input type="email" className="w-full appearance-none bg-purple-700 border border-purple-500 focus:border-purple-300 rounded-sm px-4 py-3 mb-2 sm:mb-0 sm:mr-2 text-white placeholder-purple-400" placeholder="Tu correo electrónico..." aria-label="Tu correo electrónico" />
                <a className="btn text-purple-600 bg-purple-100 hover:bg-white shadow" href="#0">Solicitar Demo</a>
              </div>
            </form>

          </div>

        </div>

      </div>
    </section>
  )
}
