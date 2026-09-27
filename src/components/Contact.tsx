import { useState } from 'react';
import { MapPin, Phone, Instagram, Clock, Send, User, MessageSquare } from 'lucide-react';
import { siteConfig, mapsLink, mapsEmbed, services, whatsappLink } from '@/config/site';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Contact() {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();
  const [form, setForm] = useState({
    name: '',
    phone: '',
    service: 'Kaporta ve Boya',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};
    if (!form.name.trim()) newErrors.name = 'Ad soyad gerekli';
    if (!form.phone.trim()) newErrors.phone = 'Telefon gerekli';
    if (!form.service) newErrors.service = 'Hizmet seçimi gerekli';
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    const text = `Merhaba, OTOSON Kaporta ve Boya hakkında bilgi ve randevu almak istiyorum.

Ad Soyad: ${form.name}
Telefon: ${form.phone}
Hizmet: ${form.service}
Mesaj: ${form.message}`;
    window.open(whatsappLink(text), '_blank');
  };

  const contactItems = [
    { icon: MapPin, label: 'Adres', value: siteConfig.address, href: mapsLink },
    { icon: Phone, label: 'Telefon', value: siteConfig.phone, href: `tel:${siteConfig.phoneTel}` },
    { icon: Instagram, label: 'Instagram', value: siteConfig.instagram, href: siteConfig.instagramUrl },
    { icon: Clock, label: 'Çalışma Saatleri', value: siteConfig.workingHours, href: null },
  ];

  return (
    <section id="iletisim" className="bg-ink-950 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand-500">
            İletişim
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Bize Ulaşın
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Contact info + map */}
          <div
            ref={ref}
            className={`transition-all duration-500 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <div className="space-y-4">
              {contactItems.map((item) => {
                const Icon = item.icon;
                const content = (
                  <div className="flex items-start gap-4 rounded-2xl border border-white/5 bg-ink-850 p-4 transition-colors hover:border-brand-500/20">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-500/10 text-brand-500">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">{item.label}</p>
                      <p className="text-base font-medium text-white">{item.value}</p>
                    </div>
                  </div>
                );
                return item.href ? (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="block"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={item.label}>{content}</div>
                );
              })}
            </div>

            {/* Map */}
            <div className="mt-4 overflow-hidden rounded-2xl border border-white/5">
              <iframe
                src={mapsEmbed}
                title="OTOSON konum haritası"
                className="h-64 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Form */}
          <div
            className={`transition-all duration-500 [transition-delay:100ms] ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <form
              onSubmit={handleSubmit}
              className="space-y-5 rounded-2xl border border-white/5 bg-ink-850 p-6 sm:p-8"
            >
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-gray-300">
                  Ad Soyad
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500" />
                  <input
                    id="name"
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    autoComplete="name"
                    className={`w-full rounded-xl border bg-ink-800 py-3.5 pl-11 pr-4 text-base text-white placeholder-gray-500 outline-none transition-colors focus:border-brand-500 focus:ring-1 focus:ring-brand-500 ${
                      errors.name ? 'border-brand-500' : 'border-white/10'
                    }`}
                    placeholder="Adınız Soyadınız"
                  />
                </div>
                {errors.name && <p className="mt-1 text-xs text-brand-400">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-gray-300">
                  Telefon
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500" />
                  <input
                    id="phone"
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    autoComplete="tel"
                    inputMode="tel"
                    className={`w-full rounded-xl border bg-ink-800 py-3.5 pl-11 pr-4 text-base text-white placeholder-gray-500 outline-none transition-colors focus:border-brand-500 focus:ring-1 focus:ring-brand-500 ${
                      errors.phone ? 'border-brand-500' : 'border-white/10'
                    }`}
                    placeholder="05XX XXX XX XX"
                  />
                </div>
                {errors.phone && <p className="mt-1 text-xs text-brand-400">{errors.phone}</p>}
              </div>

              <div>
                <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-gray-300">
                  İlgilenilen Hizmet
                </label>
                <select
                  id="service"
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                  className={`w-full rounded-xl border bg-ink-800 px-4 py-3.5 text-base text-white outline-none transition-colors focus:border-brand-500 focus:ring-1 focus:ring-brand-500 ${
                    errors.service ? 'border-brand-500' : 'border-white/10'
                  }`}
                >
                  <option value="">Bir hizmet seçin</option>
                  {services.map((s) => (
                    <option key={s.id} value={s.title}>
                      {s.title}
                    </option>
                  ))}
                </select>
                {errors.service && <p className="mt-1 text-xs text-brand-400">{errors.service}</p>}
              </div>

              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-gray-300">
                  Mesaj
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3.5 h-5 w-5 text-gray-500" />
                  <textarea
                    id="message"
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full rounded-xl border border-white/10 bg-ink-800 py-3.5 pl-11 pr-4 text-base text-white placeholder-gray-500 outline-none transition-colors focus:border-brand-500 focus:ring-1 focus:ring-brand-500"
                    placeholder="Mesajınız (isteğe bağlı)"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-brand-500 px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-brand-500/30 transition-all hover:bg-brand-600 hover:shadow-brand-500/50 active:scale-95"
              >
                <Send className="h-5 w-5" />
                Gönder
              </button>
              <p className="text-center text-xs text-gray-500">
                Form gönderildiğinde bilgiler WhatsApp üzerinden +90 531 367 83 55 numarasına yönlendirilir.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
