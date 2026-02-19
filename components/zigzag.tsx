import Image from 'next/image'

import step1Img from '@/public/images/Gemini_Generated_Image_2nqsha2nqsha2nqs.png'
import step2Img from '@/public/images/Gemini_Generated_Image_ihdx0cihdx0cihdx.png'
import step3Img from '@/public/images/Gemini_Generated_Image_y1kqevy1kqevy1kq.png'
import step4Img from '@/public/images/Gemini_Generated_Image_oaeo0soaeo0soaeo.png'

export default function Zigzag() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h2 className="h2 mb-4" data-aos="fade-up">Cómo Funciona</h2>
            <p className="text-xl text-gray-400" data-aos="fade-up" data-aos-delay="100">
              En 4 pasos simples, toma el control del inventario de tu flota.
            </p>
          </div>

          {/* Items */}
          <div className="grid gap-20">

            {/* Step 1 */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                <Image className="max-w-full mx-auto md:max-w-none h-auto" src={step1Img} style={{ maxWidth: 500, width: '100%' }} alt="Registra tu empresa" />
              </div>
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <div className="font-architects-daughter text-xl text-purple-600 mb-2">Paso 1</div>
                  <h3 className="h3 mb-3">Configura tu almacén</h3>
                  <p className="text-xl text-gray-400 mb-4">
                    Define tus categorías, registra tu catálogo de refacciones, llantas y consumibles. El sistema se adapta a tu operación, no al revés.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl" data-aos="fade-up">
                <Image className="max-w-full mx-auto md:max-w-none h-auto" src={step2Img} style={{ maxWidth: 500, width: '100%' }} alt="Planifica viajes" />
              </div>
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-left">
                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                  <div className="font-architects-daughter text-xl text-purple-600 mb-2">Paso 2</div>
                  <h3 className="h3 mb-3">Registra movimientos</h3>
                  <p className="text-xl text-gray-400 mb-4">
                    Registra entradas y salidas de inventario en segundos. Cada movimiento queda trazado con fecha, responsable y motivo, sin papel ni Excel.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                <Image className="max-w-full mx-auto md:max-w-none h-auto" src={step3Img} style={{ maxWidth: 500, width: '100%' }} alt="Controla operaciones" />
              </div>
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <div className="font-architects-daughter text-xl text-purple-600 mb-2">Paso 3</div>
                  <h3 className="h3 mb-3">Controla tu stock</h3>
                  <p className="text-xl text-gray-400 mb-4">
                    Recibe alertas automáticas cuando el stock baja del mínimo. Evita faltantes inesperados y compras duplicadas con visibilidad en tiempo real.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl" data-aos="fade-up">
                <Image className="max-w-full mx-auto md:max-w-none h-auto" src={step4Img} style={{ maxWidth: 500, width: '100%' }} alt="Analiza resultados" />
              </div>
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-left">
                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                  <div className="font-architects-daughter text-xl text-purple-600 mb-2">Paso 4</div>
                  <h3 className="h3 mb-3">Analiza tu inventario</h3>
                  <p className="text-xl text-gray-400 mb-4">
                    Consulta reportes de consumo por unidad, historial de movimientos y valor del inventario. Toma decisiones de compra basadas en datos reales.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
