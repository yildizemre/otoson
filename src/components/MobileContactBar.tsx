import { Phone, MessageCircle, MapPin } from 'lucide-react';
import { siteConfig, mapsLink } from '@/config/site';

export default function MobileContactBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-ink-950/96 pb-[env(safe-area-inset-bottom)] backdrop-blur-xl lg:hidden">
      <div className="grid grid-cols-3 items-end">
        <a
          href={`tel:${siteConfig.phoneTel}`}
          className="flex flex-col items-center gap-1 py-3 text-gray-200 transition-colors active:bg-white/5"
        >
          <Phone className="h-5 w-5" />
          <span className="text-[11px] font-semibold">Ara</span>
        </a>
        <a
          href={siteConfig.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex flex-col items-center pb-2 text-[#25D366]"
        >
          <span className="absolute -top-6 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-green-700/40 ring-4 ring-ink-950">
            <MessageCircle className="h-7 w-7" />
          </span>
          <span className="mt-9 text-[11px] font-semibold">WhatsApp</span>
        </a>
        <a
          href={mapsLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-1 py-3 text-gray-200 transition-colors active:bg-white/5"
        >
          <MapPin className="h-5 w-5" />
          <span className="text-[11px] font-semibold">Yol Tarifi</span>
        </a>
      </div>
    </div>
  );
}
