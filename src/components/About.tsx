import { processSteps } from '@/config/site';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function About() {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="hakkimizda" className="bg-ink-900 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src="/about-detailing.jpg"
                alt="OTOSON profesyonel kaporta ve boya uygulaması"
                className="h-full w-full object-cover"
                width={1200}
                height={800}
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/60 to-transparent" />
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3 sm:absolute sm:-bottom-5 sm:-right-5 sm:mt-0 sm:block sm:rounded-2xl sm:border sm:border-brand-500/30 sm:bg-ink-850 sm:px-6 sm:py-4 sm:shadow-xl">
              <div className="rounded-2xl border border-brand-500/30 bg-ink-850 px-4 py-3 sm:border-0 sm:bg-transparent sm:p-0">
                <p className="text-3xl font-bold text-brand-500">Kaporta</p>
                <p className="text-sm text-gray-400">&amp; Boya uzmanlığı</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-ink-850 px-4 py-3 sm:hidden">
                <p className="text-3xl font-bold text-white">Kartal</p>
                <p className="text-sm text-gray-400">Kolay ulaşım</p>
              </div>
            </div>
          </div>

          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand-500">
              Hakkımızda
            </p>
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              OTOSON Hakkında
            </h2>
            <p className="text-base leading-relaxed text-gray-300 sm:text-lg">
              OTOSON Oto Yıkama &amp; Otomotiv, Kartal&apos;da kaporta ve boya
              ağırlıklı çalışan profesyonel bir otomotiv merkezidir. Hasarlı
              kaporta onarımı, parça değişimi ve orijinale yakın boya
              uygulamaları başlıca işimizdir. Göçük, çizik giderme, yüzey
              koruma ve yıkama hizmetlerini de aynı özenle sunuyoruz. Amacımız
              aracınızı güvenle teslim edebileceğiniz, işçilikten taviz
              vermeyen bir hizmet anlayışıdır.
            </p>
          </div>
        </div>

        <div className="mt-20">
          <h3 className="mb-10 text-center text-2xl font-bold text-white sm:text-3xl">
            Çalışma Sürecimiz
          </h3>
          <div
            ref={ref}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {processSteps.map((step, i) => (
              <div
                key={step.number}
                className={`relative flex flex-col items-center text-center transition-all duration-500 ${
                  visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                {i < processSteps.length - 1 && (
                  <div className="absolute left-1/2 top-8 hidden h-px w-full bg-gradient-to-r from-brand-500/40 to-transparent lg:block" />
                )}
                <div className="relative z-10 mb-4 flex h-16 w-16 items-center justify-center rounded-full border-2 border-brand-500/40 bg-ink-850 text-xl font-bold text-brand-500">
                  {step.number}
                </div>
                <p className="text-base font-medium text-white">{step.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
