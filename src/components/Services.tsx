import { ArrowRight } from 'lucide-react';
import { services, whatsappServiceLink } from '@/config/site';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Services() {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="hizmetler" className="bg-ink-900 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand-500">
            Hizmetlerimiz
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Aracınız İçin Kapsamlı Hizmet
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Oto yıkamadan kaporta ve boya işlemlerine, yüzey korumadan
            periyodik bakıma kadar tüm ihtiyaçlarınız tek çatı altında.
          </p>
        </div>

        <div
          ref={ref}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className={`group relative flex flex-col rounded-2xl border border-white/5 bg-ink-800 p-5 transition-all duration-300 hover:border-brand-500/40 hover:bg-ink-850 hover:shadow-xl hover:shadow-brand-500/10 sm:p-6 ${
                  visible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-6'
                }`}
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500/10 text-brand-500 transition-colors group-hover:bg-brand-500 group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 flex items-center gap-2 text-lg font-semibold text-white">
                  {service.title}
                  {i === 0 && (
                    <span className="rounded-full bg-brand-500/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-brand-400">
                      Popüler
                    </span>
                  )}
                </h3>
                <p className="mb-4 flex-1 text-sm leading-relaxed text-gray-400">
                  {service.description}
                </p>
                <a
                  href={whatsappServiceLink(service.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-400 transition-colors hover:text-brand-300"
                >
                  Bilgi Al
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
