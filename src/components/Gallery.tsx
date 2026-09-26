import { useEffect, useState } from 'react';
import { X, ChevronLeft, ChevronRight, Instagram } from 'lucide-react';
import { galleryImages, siteConfig } from '@/config/site';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Gallery() {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();
  const [lightbox, setLightbox] = useState<number | null>(null);

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightbox(null);
      if (e.key === 'ArrowRight')
        setLightbox((v) => (v === null ? v : (v + 1) % galleryImages.length));
      if (e.key === 'ArrowLeft')
        setLightbox((v) =>
          v === null ? v : (v - 1 + galleryImages.length) % galleryImages.length,
        );
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [lightbox]);

  return (
    <section id="galeri" className="bg-ink-950 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand-500">
            Galeri
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Çalışmalarımızdan Kareler
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Servis alanımız, araç yıkama ve bakım uygulamalarımızdan kareler.
          </p>
        </div>

        <div
          ref={ref}
          className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4"
        >
          {galleryImages.map((img, i) => (
            <button
              key={i}
              onClick={() => setLightbox(i)}
              className={`group relative aspect-square overflow-hidden rounded-xl bg-ink-800 transition-all duration-300 hover:ring-2 hover:ring-brand-500/50 ${
                visible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
              style={{ transitionDelay: `${i * 40}ms` }}
              aria-label={`${img.caption} - büyütmek için tıklayın`}
            >
              <img
                src={img.src}
                alt={img.alt}
                width={470}
                height={470}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink-950/90 via-ink-950/40 to-transparent p-2.5 sm:p-3">
                <p className="text-left text-xs font-medium text-white sm:text-sm">
                  {img.caption}
                </p>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href={siteConfig.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-brand-500/40 bg-brand-500/10 px-6 py-3.5 text-base font-semibold text-brand-300 transition-all hover:bg-brand-500 hover:text-white active:scale-95"
          >
            <Instagram className="h-5 w-5" />
            Instagram&apos;da Bizi Takip Edin
          </a>
        </div>
      </div>

      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/92 px-3 backdrop-blur-sm animate-fade-in"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute right-3 top-[max(0.75rem,env(safe-area-inset-top))] rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20"
            onClick={() => setLightbox(null)}
            aria-label="Kapat"
          >
            <X className="h-6 w-6" />
          </button>
          <button
            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20 sm:left-4"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((v) =>
                v === null
                  ? v
                  : (v - 1 + galleryImages.length) % galleryImages.length,
              );
            }}
            aria-label="Önceki"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <figure
            className="max-h-[80vh] max-w-[90vw]"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={galleryImages[lightbox].src}
              alt={galleryImages[lightbox].alt}
              className="max-h-[72vh] max-w-[90vw] rounded-xl object-contain"
            />
            <figcaption className="mt-3 text-center text-sm text-gray-300">
              {galleryImages[lightbox].caption}
            </figcaption>
          </figure>
          <button
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20 sm:right-4"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((v) =>
                v === null ? v : (v + 1) % galleryImages.length,
              );
            }}
            aria-label="Sonraki"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      )}
    </section>
  );
}
