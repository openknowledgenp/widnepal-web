import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import { Menu, X } from 'lucide-react';
import { Link } from 'preact-router';


const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav
      class={`w-full fixed top-0 transition-all duration-300 z-50 ${scrolled
          ? 'bg-[#36a9e1]/60 backdrop-blur-sm shadow-sm py-2'
          : 'bg-[#36a9e1] py-2'
        }`}
    >
      <div class="container flex flex-wrap items-center justify-between mx-auto px-4">
        <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            // src="/images/icons/wid_name.png" 
            src="/images/icons/wid_name.png"
            class={`transition-all duration-300 ${scrolled ? 'h-12 md: h-16' : 'h-14 md:h-20'
              }`}
            alt="Logo"
          />
          <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
        </a>

        {/* Mobile menu button */}
        <button
          onClick={toggleMobileMenu}
          class="md:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-lg"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Menu */}
        <div class="hidden md:flex md:items-center md:w-auto">
          <ul class="flex space-x-8 items-center">
            <li>
              <a
                href="/"
                class="text-white 2xl:text-xl hover:text-blue-700 transition-colors"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              {/* <Link
                // href="/#about"
                class="text-white 2xl:text-xl hover:text-blue-700 transition-colors"
              > */}
                <a href='/#about'>
                About
                </a>
              {/* </Link> */}
            </li>
            <li>
              <Link
                href="#"
                class="text-white 2xl:text-xl hover:text-blue-700 transition-colors"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="#"
                class="text-white hover:text-blue-700 transition-colors"
              >
                <div class="flex flex-col md:flex-row justify-center gap-4">
                  <button
                    class="px-4 py-2 bg-[#FBBC0A] 2xl:text-xl hover:bg-[#FBBC0A]/80 rounded-lg font-semibold transform hover:scale-105 transition-transform focus:outline-none border-none text-white"
                    onClick={() => console.log('register clicked')}
                  >
                    Register
                  </button>
                </div>
              </Link>
            </li>
          </ul>
        </div>

        {/* Mobile Menu Overlay */}
        <div
        class={`fixed inset-0 bg-black bg-opacity-50 transition-opacity md:hidden ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          onClick={toggleMobileMenu}
        />

        {/* Mobile Menu Panel */}
        <div
          class={`fixed top-0 right-0 h-full w-64 bg-white transform transition-transform duration-300 ease-in-out md:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
        >
          <div class="p-6">
            <div class="flex justify-end">
              <button
                onClick={toggleMobileMenu}
                class="p-2 text-gray-700 hover:bg-gray-100 rounded-lg"
              >
                <X size={24} />
              </button>
            </div>
            <ul class="space-y-4 mt-8">
              <li>
                <Link
                  href="/"
                  class="block text-black hover:text-blue-700 transition-colors py-2"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/#about"
                  class="block text-gray-900 hover:text-blue-700 transition-colors py-2"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  class="block text-gray-900 hover:text-blue-700 transition-colors py-2"
                >
                  Contact
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  class="block text-gray-900 hover:text-blue-700 transition-colors py-2"
                >
                  Register
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;