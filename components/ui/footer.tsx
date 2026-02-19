import React from 'react'
import Link from 'next/link'
import wardLogo from '@/public/images/ward logo morado.png'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer>
      <div className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">

          {/* Top area: Blocks */}
          <div className="grid md:grid-cols-12 gap-8 lg:gap-20 mb-8 md:mb-12">

            {/* 1st block */}
            <div className="md:col-span-4 lg:col-span-5">
              <div className="mb-2">
                <Link href="/" className="inline-block" aria-label="Ward">
                  <Image
                    alt="Ward"
                    src={wardLogo}
                    style={{ width: 100 }}
                  />
                </Link>
              </div>
              <div className="text-gray-400 text-sm">
                Plataforma SaaS para digitalizar la operación de flotas de transporte de carga. Empieza con inventario, crece con cada módulo.
              </div>
            </div>

            {/* 2nd, 3rd and 4th blocks */}
            <div className="md:col-span-8 lg:col-span-7 grid sm:grid-cols-3 gap-8">

              {/* Products */}
              <div className="text-sm">
                <h6 className="text-gray-200 font-medium mb-1">Productos</h6>
                <ul>
                  <li className="mb-1">
                    <Link href="/" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Ward App</Link>
                  </li>
                  <li className="mb-1">
                    <a href="#contacto" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Contacto</a>
                  </li>
                </ul>
              </div>

              {/* Resources */}
              <div className="text-sm">
                <h6 className="text-gray-200 font-medium mb-1">Recursos</h6>
                <ul>
                  <li className="mb-1">
                    <a href="#caracteristicas" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Características</a>
                  </li>
                  <li className="mb-1">
                    <a href="#faq" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">FAQ</a>
                  </li>
                </ul>
              </div>

              {/* Company */}
              <div className="text-sm">
                <h6 className="text-gray-200 font-medium mb-1">Empresa</h6>
                <ul>
                  <li className="mb-1">
                    <a href="#contacto" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Contacto</a>
                  </li>
                </ul>
              </div>

            </div>

          </div>

          {/* Bottom area */}
          <div className="md:flex md:items-center md:justify-between">

            {/* Social links */}
            <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
            </ul>

            {/* Copyrights note */}
            <div className="text-gray-400 text-sm mr-4">&copy; {new Date().getFullYear()} Ward - Todos los derechos reservados.</div>

          </div>

        </div>
      </div>
    </footer>
  )
}
