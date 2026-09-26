import { useEffect, useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { siteConfig } from '@/config/site';

export default function FloatingWhatsApp() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 300);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <a
      href={siteConfig.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp'tan yazın"
      className={`group fixed bottom-24 right-4 z-50 hidden h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-green-600/40 transition-all duration-300 hover:scale-110 hover:shadow-green-600/60 lg:bottom-6 lg:right-6 lg:flex ${
        show ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0 pointer-events-none'
      }`}
    >
      <MessageCircle className="h-7 w-7" />
      <span className="pointer-events-none absolute right-16 whitespace-nowrap rounded-lg bg-ink-900 px-3 py-1.5 text-sm font-medium text-white opacity-0 shadow-lg transition-all duration-200 group-hover:opacity-100">
        WhatsApp'tan yazın
      </span>
      <span className="absolute -top-0.5 -right-0.5 flex h-3 w-3">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-300 opacity-75" />
        <span className="relative inline-flex h-3 w-3 rounded-full bg-green-400" />
      </span>
    </a>
  );
}
