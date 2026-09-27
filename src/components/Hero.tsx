import { MessageCircle, Phone, MapPin, ShieldCheck, Clock, MapPinned } from 'lucide-react';
import { siteConfig, mapsLink } from '@/config/site';
import BrandLogo from '@/components/BrandLogo';

export default function Hero() {
  return (
    <section
      id="anasayfa"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <img
          src="/hero-carwash.jpg"
          alt="OTOSON profesyonel kaporta ve boya servisi"
          className="h-full w-full object-cover"
          width={1920}
          height={1280}
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950/85 via-ink-950/72 to-ink-950" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950/75 to-ink-950/20" />
        <div className="absolute left-1/2 top-[28%] h-64 w-64 -translate-x-1/2 rounded-full bg-brand-500/20 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 pb-28 pt-32 text-center sm:px-6 sm:pt-40 lg:px-8 lg:pt-36">
        <div className="mb-4 flex justify-center animate-scale-in sm:mb-6">
          <BrandLogo size="hero" priority />
        </div>

        <p className="mb-5 inline-block rounded-full border border-brand-500/40 bg-brand-500/10 px-4 py-1.5 text-sm font-medium text-brand-300 animate-fade-in">
          {siteConfig.slogan}
        </p>
        <h1 className="mb-5 text-[1.85rem] font-bold leading-tight tracking-tight text-white animate-fade-up sm:text-5xl lg:text-6xl">
          Kartal&apos;da <span className="text-brand-500">Kaporta ve Boya</span>{' '}
          Uzmanı
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-gray-300 animate-fade-up [animation-delay:0.1s] sm:text-lg">
          OTOSON olarak ağırlıklı işimiz kaporta onarımı ve boyadır. Hasar,
          göçük, çizik ve boya işlemlerinde aracınızı özenle teslim ediyoruz.
        </p>

        <div className="flex flex-col items-center justify-center gap-3 animate-fade-up [animation-delay:0.2s] sm:flex-row sm:gap-4">
          <a
            href={siteConfig.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-brand-500 px-6 py-4 text-base font-semibold text-white shadow-lg shadow-brand-500/35 transition-all hover:bg-brand-600 hover:shadow-brand-500/50 active:scale-95 sm:w-auto"
          >
            <MessageCircle className="h-5 w-5" />
            WhatsApp&apos;tan Randevu Al
          </a>
          <div className="grid w-full grid-cols-2 gap-3 sm:flex sm:w-auto">
            <a
              href={`tel:${siteConfig.phoneTel}`}
              className="flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-4 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/10 active:scale-95 sm:px-6 sm:text-base"
            >
              <Phone className="h-5 w-5" />
              Hemen Ara
            </a>
            <a
              href={mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-4 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/10 active:scale-95 sm:px-6 sm:text-base"
            >
              <MapPin className="h-5 w-5" />
              Yol Tarifi
            </a>
          </div>
        </div>

        <div className="mx-auto mt-8 grid max-w-xl grid-cols-3 gap-2 animate-fade-up [animation-delay:0.3s] sm:mt-10 sm:gap-4">
          <div className="rounded-2xl border border-white/10 bg-white/5 px-2 py-3 backdrop-blur-sm sm:px-3">
            <ShieldCheck className="mx-auto mb-1.5 h-5 w-5 text-brand-400" />
            <p className="text-[11px] font-medium text-gray-200 sm:text-sm">Kaporta &amp; Boya</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 px-2 py-3 backdrop-blur-sm sm:px-3">
            <MapPinned className="mx-auto mb-1.5 h-5 w-5 text-brand-400" />
            <p className="text-[11px] font-medium text-gray-200 sm:text-sm">Kartal / İst.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 px-2 py-3 backdrop-blur-sm sm:px-3">
            <Clock className="mx-auto mb-1.5 h-5 w-5 text-brand-400" />
            <p className="text-[11px] font-medium text-gray-200 sm:text-sm">08:00–20:00</p>
          </div>
        </div>
      </div>
    </section>
  );
}
