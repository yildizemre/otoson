import { MessageCircle, Phone } from 'lucide-react';
import { siteConfig } from '@/config/site';

export default function CTA() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-700 via-brand-600 to-ink-950" />
      <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_20%_50%,white_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
          Kaporta ve Boyayı Ertelemeyin
        </h2>
        <p className="mb-8 text-lg text-white/90">
          Hasar, göçük veya boya ihtiyacı için WhatsApp&apos;tan yazın, hemen
          randevu oluşturalım.
        </p>
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          <a
            href={siteConfig.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-white px-6 py-4 text-base font-semibold text-brand-700 shadow-lg transition-all hover:bg-gray-100 active:scale-95 sm:w-auto"
          >
            <MessageCircle className="h-5 w-5" />
            WhatsApp'tan Randevu Al
          </a>
          <a
            href={`tel:${siteConfig.phoneTel}`}
            className="flex w-full items-center justify-center gap-2 rounded-xl border-2 border-white/40 bg-white/10 px-6 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20 active:scale-95 sm:w-auto"
          >
            <Phone className="h-5 w-5" />
            {siteConfig.phone}'i Ara
          </a>
        </div>
      </div>
    </section>
  );
}
