import { MapPin, Phone, Instagram, MessageCircle } from 'lucide-react';
import { navLinks, services, siteConfig, mapsLink } from '@/config/site';
import BrandLogo from '@/components/BrandLogo';

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-ink-950 pb-28 pt-16 lg:pb-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="mb-4">
              <BrandLogo size="footer" />
            </div>
            <p className="text-sm italic text-brand-400">{siteConfig.slogan}</p>
            <p className="mt-3 text-sm leading-relaxed text-gray-500">
              Kartal&apos;da profesyonel oto yıkama, bakım ve otomotiv
              hizmetleri.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Hızlı Menü
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 transition-colors hover:text-brand-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Hizmetler
            </h3>
            <ul className="space-y-2">
              {services.slice(0, 6).map((s) => (
                <li key={s.id}>
                  <a
                    href="#hizmetler"
                    className="text-sm text-gray-400 transition-colors hover:text-brand-400"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              İletişim
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 text-sm text-gray-400 transition-colors hover:text-brand-400"
                >
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                  {siteConfig.address}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.phoneTel}`}
                  className="flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-brand-400"
                >
                  <Phone className="h-4 w-4 shrink-0" />
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-brand-400"
                >
                  <Instagram className="h-4 w-4 shrink-0" />
                  {siteConfig.instagram}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-brand-400"
                >
                  <MessageCircle className="h-4 w-4 shrink-0" />
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/5 pt-6 text-center">
          <p className="text-sm text-gray-500">
            © 2026 OTOSON Oto Yıkama &amp; Otomotiv. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
}
