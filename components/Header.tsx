import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center px-8 py-4 bg-[#7F00F5] text-white">
      <div className="flex items-center">
        <h1 className="ml-3 text-xl font-bold">Xenoma Code</h1>
      </div>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link href="#services" className="hover:text-gray-300">
              Servicios
            </Link>
          </li>
          <li>
            <Link href="#about" className="hover:text-gray-300">
              Acerca de
            </Link>
          </li>
          <li>
            <Link href="#contact" className="hover:text-gray-300">
              Contacto
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;