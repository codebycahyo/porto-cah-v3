import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const links = [
    { name: 'Work', href: '#work' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-bg-primary/90 backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex w-full max-w-container items-center justify-between px-6 md:px-8 h-16" aria-label="Main navigation">
        {/* Wordmark */}
        <a
          href="#"
          className="font-serif italic text-xl text-text-primary transition-opacity hover:opacity-60"
          aria-label="Cahyo"
        >
          Cahyo
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(link => (
            <a
              key={link.name}
              href={link.href}
              className="text-[13px] font-sans font-medium uppercase tracking-[0.08em] text-text-secondary transition-colors hover:text-text-primary"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="flex h-9 w-9 items-center justify-center rounded-full text-text-secondary transition-colors hover:text-text-primary"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex md:hidden h-9 w-9 items-center justify-center text-text-secondary"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            <div className="relative w-5 h-4 flex flex-col justify-between">
              <span
                className={`block h-[1.5px] bg-current transition-all duration-300 origin-center ${
                  mobileOpen ? 'rotate-45 translate-y-[7px]' : ''
                }`}
              />
              <span
                className={`block h-[1.5px] bg-current transition-all duration-300 ${
                  mobileOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block h-[1.5px] bg-current transition-all duration-300 origin-center ${
                  mobileOpen ? '-rotate-45 -translate-y-[7px]' : ''
                }`}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 top-16 bg-bg-primary z-40 transition-all duration-300 ${
          mobileOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-start px-6 pt-12 gap-8">
          {links.map((link, i) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`font-serif text-4xl text-text-primary transition-all duration-300 hover:opacity-60 ${
                mobileOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: mobileOpen ? `${(i + 1) * 80}ms` : '0ms' }}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
