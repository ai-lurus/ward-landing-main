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
                <Link href="/" className="inline-block" aria-label="Ward.io">
                  <Image
                    alt="Ward.io"
                    src={wardLogo}
                    style={{ width: 100 }}
                  />
                </Link>
              </div>
              <div className="text-gray-400 text-sm">
                Plataforma SaaS de gestión logística integral para empresas de transporte de carga. Digitaliza tu operación y toma decisiones basadas en datos.
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
                    <a href="#precios" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Precios</a>
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
              <li>
                <Link href="/" className="flex justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out" aria-label="LinkedIn">
                  <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.3 8H8.7c-.4 0-.7.3-.7.7v14.7c0 .3.3.6.7.6h14.7c.4 0 .7-.3.7-.7V8.7c-.1-.4-.4-.7-.8-.7zM12.7 21.6h-2.3V14h2.4v7.6h-.1zM11.6 13c-.8 0-1.4-.7-1.4-1.4 0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4-.1.7-.7 1.4-1.4 1.4zm10 8.6h-2.4v-3.7c0-.9 0-2-1.2-2s-1.4 1-1.4 2v3.8h-2.4V14h2.3v1c.3-.6 1.1-1.2 2.2-1.2 2.4 0 2.8 1.6 2.8 3.6v4.2h.1z" />
                  </svg>
                </Link>
              </li>
            </ul>

            {/* Copyrights note */}
            <div className="text-gray-400 text-sm mr-4">&copy; {new Date().getFullYear()} Ward.io - Todos los derechos reservados.</div>

          </div>

        </div>
      </div>
    </footer>
  )
}
