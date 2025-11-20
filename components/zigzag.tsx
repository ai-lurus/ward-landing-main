import Image from 'next/image'

import FeatImage01 from '@/public/images/procesos.webp'
import FeatImage02 from '@/public/images/qrtruck.webp'
import FeatImage03 from '@/public/images/notification.webp'
import visibilidad from '@/public/images/visibilidad.png'
import optimizacion from '@/public/images/optimizacion.png'
import seguridad from '@/public/images/seguridad.png'
import decisiones from '@/public/images/decisiones.png'

export default function Zigzag() {
  return (
    <>
      <section>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-12 md:py-20 border-t border-gray-800">

            {/* Section header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
              <h1 className="h2 mb-4">Monitoreo y Geolocalización Avanzada de Camiones</h1>
              <p className="text-xl text-gray-400">
              Optimice su flota con nuestra solución de vanguardia para el monitoreo y geolocalización de camiones. Utilizando dispositivos GPS de alta precisión, nuestro sistema ofrece una visión detallada del estado y ubicación exacta de cada vehículo en tiempo real.
              </p>
            </div>

            {/* Items */}
            <div className="grid gap-20">

              {/* 1st item */}
              <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
                {/* Image */}
                <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                  <Image className="max-w-full mx-auto md:max-w-none h-auto" src={visibilidad} style={{maxWidth: 500, width: "100%"}} alt="Features 01" />
                </div>
                {/* Content */}
                <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                  <div className="md:pr-4 lg:pr-12 xl:pr-16">
                    {/* <div className="font-architects-daughter text-xl text-purple-600 mb-2">More speed. Less spend</div> */}
                    <h3 className="h3 mb-3">
                    Visibilidad Total
                    </h3>
                    <p className="text-xl text-gray-400 mb-4">
                    Mantenga un control constante sobre su flota, con información actualizada de la ubicación y estado de los camiones.
                    </p>
                  </div>
                </div>
              </div>

              {/* 2nd item */}
              <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
                {/* Image */}
                <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl" data-aos="fade-up">
                  <Image className="max-w-full mx-auto md:max-w-none h-auto" src={optimizacion} style={{maxWidth: 500, width: "100%"}} alt="Features 02" />
                </div>
                {/* Content */}
                <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-left">
                  <div className="md:pl-4 lg:pl-12 xl:pl-16">
                    {/* <div className="font-architects-daughter text-xl text-purple-600 mb-2">More speed. Less spend</div> */}
                    <h3 className="h3 mb-3">Optimización de Rutas</h3>
                    <p className="text-xl text-gray-400 mb-4">
                    Mejore la eficiencia de combustible y reduzca tiempos de entrega con análisis inteligente de rutas.
                    </p>
                  </div>
                </div>
              </div>

              {/* 3rd item */}
              <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
                {/* Image */}
                <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                  <Image className="max-w-full mx-auto md:max-w-none h-auto" src={seguridad} style={{maxWidth: 500, width: "100%"}} alt="Features 03" />
                </div>
                {/* Content */}
                <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                  <div className="md:pr-4 lg:pr-12 xl:pr-16">
                    {/* <div className="font-architects-daughter text-xl text-purple-600 mb-2">More speed. Less spend</div> */}
                    <h3 className="h3 mb-3">Seguridad Mejorada</h3>
                    <p className="text-xl text-gray-400 mb-4">
                    Refuerce la seguridad de sus activos y conductores con seguimiento continuo y alertas inmediatas ante cualquier incidencia.
                    </p>
                  </div>
                </div>
              </div>

              {/* 4th item */}
              <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
                {/* Image */}
                <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl" data-aos="fade-up">
                  <Image className="max-w-full mx-auto md:max-w-none h-auto" src={decisiones} style={{maxWidth: 500, width: "100%"}} alt="Features 02" />
                </div>
                {/* Content */}
                <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-left">
                  <div className="md:pl-4 lg:pl-12 xl:pl-16">
                    {/* <div className="font-architects-daughter text-xl text-purple-600 mb-2">More speed. Less spend</div> */}
                    <h3 className="h3 mb-3">Toma de Decisiones Informada</h3>
                    <p className="text-xl text-gray-400 mb-4">
                    Utilice datos precisos para tomar decisiones estratégicas que mejoren la productividad y la rentabilidad.
                    </p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>
      <section>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-12 md:py-20 border-t border-gray-800">

            {/* Section header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
              <h1 className="h2 mb-4">Sincronización Perfecta en Carga y Descarga</h1>
              <p className="text-xl text-gray-400">
              Optimice sus procesos, reduzca los tiempos de espera y mejore significativamente la utilización de sus espacios de carga y descarga.
              </p>
            </div>

            {/* Items */}
            <div className="grid gap-20">

              {/* 1st item */}
              <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
                {/* Image */}
                <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                  <Image className="max-w-full mx-auto md:max-w-none h-auto" src={FeatImage01} style={{maxWidth: 500, width: "100%"}} alt="Features 01" />
                </div>
                {/* Content */}
                <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                  <div className="md:pr-4 lg:pr-12 xl:pr-16">
                    {/* <div className="font-architects-daughter text-xl text-purple-600 mb-2">More speed. Less spend</div> */}
                    <h3 className="h3 mb-3">
                    Automatización de Procesos con Tecnología QR
                    </h3>
                    <p className="text-xl text-gray-400 mb-4">
                    Transforme la administración de su patio con códigos QR para un seguimiento rápido y preciso de vehículos y cargas. Esta innovación reduce tiempos de procesamiento, minimiza errores y mejora la toma de decisiones, llevando la eficiencia operativa a un nuevo nivel
                    </p>
                    <ul className="text-lg text-gray-400 -mb-2">
                      <li className="flex items-center mb-2">
                        <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                        <span>
                        Agilidad Operativa
                        </span>
                      </li>
                      <li className="flex items-center mb-2">
                        <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                        <span>Precisión de Datos</span>
                      </li>
                      <li className="flex items-center">
                        <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                        <span>Visibilidad Mejorada</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 2nd item */}
              <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
                {/* Image */}
                <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl" data-aos="fade-up">
                  <Image className="max-w-full mx-auto md:max-w-none h-auto" src={FeatImage02} style={{maxWidth: 500, width: "100%"}} alt="Features 02" />
                </div>
                {/* Content */}
                <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-left">
                  <div className="md:pl-4 lg:pl-12 xl:pl-16">
                    {/* <div className="font-architects-daughter text-xl text-purple-600 mb-2">More speed. Less spend</div> */}
                    <h3 className="h3 mb-3">Seguridad y Eficiencia Costeable</h3>
                    <p className="text-xl text-gray-400 mb-4">
                    Nuestra solución con códigos QR garantiza la protección de datos y optimiza la seguridad operacional, reduciendo costes asociados con errores y demoras. Mejore la seguridad de sus datos y operaciones, mientras incrementa la rentabilidad
                    </p>
                    <ul className="text-lg text-gray-400 -mb-2">
                      <li className="flex items-center mb-2">
                        <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                        <span>Seguridad Mejorada</span>
                      </li>
                      <li className="flex items-center mb-2">
                        <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                        <span>Reducción de Costes</span>
                      </li>
                      <li className="flex items-center">
                        <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                        <span>Eficiencia Operativa</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 3rd item */}
              <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
                {/* Image */}
                <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                  <Image className="max-w-full mx-auto md:max-w-none h-auto" src={FeatImage03} style={{maxWidth: 500, width: "100%"}} alt="Features 03" />
                </div>
                {/* Content */}
                <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                  <div className="md:pr-4 lg:pr-12 xl:pr-16">
                    {/* <div className="font-architects-daughter text-xl text-purple-600 mb-2">More speed. Less spend</div> */}
                    <h3 className="h3 mb-3">Notificaciones Instantáneas para una Gestión de Patio Eficiente</h3>
                    <p className="text-xl text-gray-400 mb-4">
                    Manténgase siempre informado con actualizaciones en tiempo real sobre el estatus de las operaciones en su patio. Nuestro sistema de códigos QR proporciona alertas instantáneas, asegurando una respuesta rápida y eficaz a cualquier cambio o necesidad operativa, mejorando así la coordinación y eficiencia general de las actividades en el patio
                    </p>
                    <ul className="text-lg text-gray-400 -mb-2">
                      <li className="flex items-center mb-2">
                        <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                        <span>Respuesta Rápida</span>
                      </li>
                      <li className="flex items-center mb-2">
                        <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                        <span>Coordinación Optimizada</span>
                      </li>
                      <li className="flex items-center">
                        <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                        <span>Mejora en la Toma de Decisiones</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>
    </>
  )
}
