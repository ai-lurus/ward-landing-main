import Link from 'next/link'
import MobileMenu from './mobile-menu'
import wardLogo from '@/public/images/ward logo morado.png'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            <Link href="/" className="block" aria-label="Ward.io">
              <Image
                alt="Ward.io"
                src={wardLogo}
                style={{ width: 100 }}
              />
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <a
                  href="#caracteristicas"
                  className="font-medium text-gray-400 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Características
                </a>
              </li>
              {/* <li>
                <a
                  href="#precios"
                  className="font-medium text-gray-400 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Precios
                </a>
              </li> */}
              <li>
                <a
                  href="#faq"
                  className="font-medium text-gray-400 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#contacto"
                  className="font-medium text-gray-400 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Contacto
                </a>
              </li>
              <li>
                <a href="#contacto" className="btn-sm text-white bg-purple-600 hover:bg-purple-700 ml-3">
                  Solicitar Demo
                </a>
              </li>
            </ul>
          </nav>

          <MobileMenu />

        </div>
      </div>
    </header>
  )
}
