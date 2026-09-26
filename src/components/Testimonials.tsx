import { Star, User } from 'lucide-react';
import { testimonials } from '@/config/site';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Testimonials() {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();

  return (
    <section className="bg-ink-900 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand-500">
            Müşteri Yorumları
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Müşterilerimiz Ne Diyor
          </h2>
        </div>

        <div
          ref={ref}
          className="grid grid-cols-1 gap-6 md:grid-cols-3"
        >
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`flex flex-col rounded-2xl border border-white/5 bg-ink-850 p-5 transition-all duration-300 hover:border-brand-500/20 sm:p-6 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="mb-4 flex gap-1">
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <Star
                    key={idx}
                    className="h-5 w-5 fill-brand-500 text-brand-500"
                  />
                ))}
              </div>
              <p className="mb-4 flex-1 text-base leading-relaxed text-gray-300">
                {t.text}
              </p>
              <div className="flex items-center gap-3 border-t border-white/5 pt-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-500/10 text-brand-500">
                  <User className="h-5 w-5" />
                </div>
                <span className="text-sm font-medium text-gray-400">
                  {t.name || 'İsim eklenecek'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
