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
            Ağırlığımız Kaporta ve Boya
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Kaporta onarımı ve boya uygulamaları başta olmak üzere göçük,
            çizik, yüzey koruma ve yıkama hizmetlerini tek çatı altında
            sunuyoruz.
          </p>
        </div>

        <div
          ref={ref}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {services.map((service, i) => {
            const Icon = service.icon;
            const featured = service.id === 'kaporta-boya';
            return (
              <div
                key={service.id}
                className={`group relative flex flex-col rounded-2xl border p-5 transition-all duration-300 hover:border-brand-500/40 hover:bg-ink-850 hover:shadow-xl hover:shadow-brand-500/10 sm:p-6 ${
                  featured
                    ? 'border-brand-500/40 bg-ink-850 sm:col-span-2'
                    : 'border-white/5 bg-ink-800'
                } ${
                  visible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-6'
                }`}
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500/10 text-brand-500 transition-colors group-hover:bg-brand-500 group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 flex flex-wrap items-center gap-2 text-lg font-semibold text-white">
                  {service.title}
                  {featured && (
                    <span className="rounded-full bg-brand-500 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">
                      Popüler
                    </span>
                  )}
                </h3>
                <p
                  className={`mb-4 flex-1 leading-relaxed text-gray-400 ${
                    featured ? 'text-base' : 'text-sm'
                  }`}
                >
                  {service.description}
                </p>
                <a
                  href={whatsappServiceLink(service.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-400 transition-colors hover:text-brand-300"
                >
                  WhatsApp&apos;tan Bilgi Al
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
