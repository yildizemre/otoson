import { advantages } from '@/config/site';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function WhyOtoson() {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();

  return (
    <section className="bg-ink-950 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand-500">
            Neden OTOSON
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Aracınız Güvenilir Ellerde
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-gray-400">
            OTOSON olarak her araca kendi aracımız gibi özen gösteriyoruz.
            Temizlikten kaporta ve boya işlemlerine, yüzey korumadan periyodik
            bakıma kadar ihtiyaç duyulan hizmetleri titizlikle sunuyoruz.
          </p>
        </div>

        <div
          ref={ref}
          className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4"
        >
          {advantages.map((adv, i) => {
            const Icon = adv.icon;
            return (
              <div
                key={adv.title}
                className={`flex flex-col items-center gap-3 rounded-2xl border border-white/5 bg-ink-850 p-4 text-center transition-all duration-300 hover:border-brand-500/30 hover:bg-ink-800 sm:p-5 ${
                  visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500/10 text-brand-500">
                  <Icon className="h-6 w-6" />
                </div>
                <span className="text-sm font-medium text-gray-200">
                  {adv.title}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
