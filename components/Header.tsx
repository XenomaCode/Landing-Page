import Link from 'next/link';
import { useState } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="flex justify-between items-center px-8 py-4 bg-[#7F00F5] text-white">
      <div className="flex items-center">
        <div className='bg-[#fff] rounded-lg p-3 border border-transparent hover:border-gradient-to-r'>
          <h1 className="ml-3 text-xl font-bold italic text-black">Xenoma Code</h1>
        </div>
      </div>

      {/* Hamburger Button */}
      <button 
        className="lg:hidden z-50 space-y-1.5"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span className={`block w-8 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
        <span className={`block w-8 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
        <span className={`block w-8 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
      </button>

      {/* Navigation Menu */}
      <nav className={`
        fixed lg:relative top-0 right-0 h-screen lg:h-auto w-64 lg:w-auto
        bg-[#7F00F5] lg:bg-transparent
        transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} lg:translate-x-0
        transition-transform duration-300 ease-in-out
        flex items-center justify-center lg:justify-end
        z-40 lg:z-auto
      `}>
        <ul className="flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-8">
          <li>
            <Link href="#services" className="text-xl lg:text-base hover:text-gray-300" onClick={() => setIsMenuOpen(false)}>
              Servicios
            </Link>
          </li>
          
          <li>
            <Link href="#about" className="text-xl lg:text-base hover:text-gray-300" onClick={() => setIsMenuOpen(false)}>
              Acerca de
            </Link>
          </li>
          <li>
            <Link href="#contact" className="text-xl lg:text-base hover:text-gray-300" onClick={() => setIsMenuOpen(false)}>
              Contacto
            </Link>
          </li>
        </ul>
      </nav>

      {/* Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 lg:hidden z-30"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
    </header>
  );
};

export default Header;