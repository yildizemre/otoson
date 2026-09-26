import { useEffect, useState } from 'react';
import { Menu, X, Calendar } from 'lucide-react';
import { navLinks, siteConfig } from '@/config/site';
import BrandLogo from '@/components/BrandLogo';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 pt-[env(safe-area-inset-top)] transition-all duration-300 ${
        scrolled || open
          ? 'bg-ink-950/96 shadow-lg shadow-black/40 backdrop-blur-xl'
          : 'bg-gradient-to-b from-ink-950/80 to-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2.5 sm:px-6 sm:py-3 lg:px-8">
        <a href="#anasayfa" className="min-w-0" onClick={() => setOpen(false)}>
          <BrandLogo size="nav" priority />
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-300 transition-colors hover:text-brand-400"
            >
              {link.label}
            </a>
          ))}
          <a
            href={siteConfig.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-xl bg-brand-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-brand-500/30 transition-all hover:bg-brand-600 hover:shadow-brand-500/50 active:scale-95"
          >
            <Calendar className="h-4 w-4" />
            Randevu Al
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="flex h-12 w-12 items-center justify-center rounded-xl text-white transition-colors hover:bg-white/10 lg:hidden"
          aria-label="Menüyü aç/kapat"
          aria-expanded={open}
        >
          {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </nav>

      <div
        className={`overflow-hidden bg-ink-950/98 backdrop-blur-xl transition-all duration-300 lg:hidden ${
          open ? 'max-h-[100dvh] border-t border-white/10' : 'max-h-0'
        }`}
      >
        <div className="flex flex-col gap-1 px-4 py-4 sm:px-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3.5 text-lg font-medium text-gray-100 transition-colors hover:bg-white/5 hover:text-brand-400"
            >
              {link.label}
            </a>
          ))}
          <a
            href={siteConfig.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-brand-500 px-5 py-4 text-base font-semibold text-white shadow-lg shadow-brand-500/30 transition-all hover:bg-brand-600 active:scale-95"
          >
            <Calendar className="h-5 w-5" />
            Randevu Al
          </a>
        </div>
      </div>
    </header>
  );
}
