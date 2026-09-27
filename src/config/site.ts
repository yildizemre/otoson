import {
  Droplets,
  Sparkles,
  Car,
  Shield,
  Wrench,
  Gauge,
  Paintbrush,
  Layers,
  CalendarClock,
  type LucideIcon,
} from 'lucide-react';

export const WHATSAPP_NUMBER = '905313678355';

export function whatsappLink(text: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

const whatsappShortMessage =
  'Merhaba, OTOSON Kaporta ve Boya hizmetleri hakkında bilgi ve randevu almak istiyorum.';

export const siteConfig = {
  name: 'OTOSON Oto Yıkama & Otomotiv',
  shortName: 'OTOSON',
  slogan: 'Kaporta ve boyada uzman işçilik.',
  address: 'Çavuşoğlu Mah. Spor Cad. No:82 Kartal / İstanbul',
  phone: '+90 531 367 83 55',
  phoneTel: '+905313678355',
  instagram: '@otoson.kartal',
  instagramUrl: 'https://instagram.com/otoson.kartal',
  whatsappShortMessage,
  whatsappUrl: whatsappLink(whatsappShortMessage),
  mapsQuery: 'Çavuşoğlu Mah. Spor Cad. No:82 Kartal İstanbul',
  workingHours: 'Pazartesi – Pazar: 08:00 – 20:00',
};

export const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  siteConfig.mapsQuery,
)}`;

export const mapsEmbed = `https://maps.google.com/maps?q=${encodeURIComponent(
  siteConfig.mapsQuery,
)}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

export function whatsappServiceLink(serviceName: string): string {
  const msg = `Merhaba, OTOSON hakkında "${serviceName}" hizmeti için bilgi ve randevu almak istiyorum.`;
  return whatsappLink(msg);
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const services: Service[] = [
  {
    id: 'kaporta-boya',
    title: 'Kaporta ve Boya',
    description:
      'Hasarlı kaporta onarımı, parça değişimi ve orijinal görünüme uygun boya uygulamaları. OTOSON’un ağırlıklı uzmanlık alanı.',
    icon: Car,
  },
  {
    id: 'boyasiz-gocuk',
    title: 'Boyasız Göçük Düzeltme',
    description:
      'Aracın orijinal boyasını koruyarak uygun göçüklerin düzeltilmesi.',
    icon: Wrench,
  },
  {
    id: 'derin-cizik',
    title: 'Derin Çizik Giderme',
    description:
      'Uygun yüzeylerde çizik görünümünü azaltmaya yönelik profesyonel uygulamalar.',
    icon: Paintbrush,
  },
  {
    id: 'pasta-cila',
    title: 'Pasta ve Cila',
    description:
      'Araç boyasının parlaklığını yeniden kazandıran yüzey bakım uygulamaları.',
    icon: Gauge,
  },
  {
    id: 'ppf-kaplama',
    title: 'PPF Kaplama',
    description:
      'Aracın boyasını dış etkenlere ve günlük kullanım izlerine karşı koruyan şeffaf kaplama.',
    icon: Shield,
  },
  {
    id: 'seramik-kaplama',
    title: 'Seramik Kaplama ve Boya Koruma',
    description:
      'Aracın yüzeyini korumaya ve uzun süreli parlaklık sağlamaya yönelik uygulamalar.',
    icon: Layers,
  },
  {
    id: 'oto-yikama',
    title: 'Oto Yıkama',
    description:
      'Aracınızın iç ve dış yüzeylerinde detaylı, özenli ve profesyonel temizlik.',
    icon: Droplets,
  },
  {
    id: 'ic-dis-temizlik',
    title: 'İç ve Dış Detaylı Temizlik',
    description:
      'Aracın koltuk, döşeme, torpido, bagaj ve dış yüzeylerinin kapsamlı temizliği.',
    icon: Sparkles,
  },
  {
    id: 'mekanik-bakim',
    title: 'Mekanik Bakım',
    description: 'Aracın temel mekanik bakım ve kontrol işlemleri.',
    icon: Wrench,
  },
  {
    id: 'periyodik-bakim',
    title: 'Periyodik Bakım',
    description:
      'Aracınızın kullanım ve üretici tavsiyelerine uygun düzenli bakım hizmetleri.',
    icon: CalendarClock,
  },
];

export interface Advantage {
  title: string;
  icon: LucideIcon;
}

export const advantages: Advantage[] = [
  { title: 'Kaporta ve boya uzmanlığı', icon: Car },
  { title: 'Orijinale yakın boya eşlemesi', icon: Paintbrush },
  { title: 'Özenli işçilik', icon: Sparkles },
  { title: 'Profesyonel uygulama', icon: Gauge },
  { title: 'Güvenilir hizmet', icon: Shield },
  { title: 'Kaliteli boya ve malzeme', icon: Layers },
  { title: 'Hızlı WhatsApp randevu', icon: Wrench },
  { title: "Kartal'da kolay ulaşım", icon: CalendarClock },
];

export interface ProcessStep {
  number: string;
  title: string;
}

export const processSteps: ProcessStep[] = [
  { number: '01', title: 'Hizmeti Seçin' },
  { number: '02', title: "WhatsApp'tan Bize Ulaşın" },
  { number: '03', title: 'Randevunuzu Oluşturalım' },
  { number: '04', title: 'Aracınızı Özenle Hazırlayalım' },
];

export interface GalleryImage {
  src: string;
  alt: string;
  caption: string;
}

export const galleryImages: GalleryImage[] = [
  {
    src: 'https://images.pexels.com/photos/6873174/pexels-photo-6873174.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'OTOSON oto yıkama - köpük yıkama işlemi',
    caption: 'Kaporta ve Boya',
  },
  {
    src: 'https://images.pexels.com/photos/14908957/pexels-photo-14908957.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'OTOSON cilalama ve parlatma işlemi',
    caption: 'Pasta ve Cila',
  },
  {
    src: 'https://images.pexels.com/photos/6873191/pexels-photo-6873191.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'OTOSON lüks araç yıkama servisi',
    caption: 'Boya Uygulaması',
  },
  {
    src: 'https://images.pexels.com/photos/14615262/pexels-photo-14615262.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'OTOSON detaylı cilalama makinesi ile parlatma',
    caption: 'Detaylı Cilalama',
  },
  {
    src: 'https://images.pexels.com/photos/6873179/pexels-photo-6873179.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'OTOSON çalışanı araç yıkama işlemi',
    caption: 'Özenli İşçilik',
  },
  {
    src: 'https://images.pexels.com/photos/14231678/pexels-photo-14231678.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'OTOSON jant ve tekerlek temizliği',
    caption: 'Jant Temizliği',
  },
  {
    src: 'https://images.pexels.com/photos/4489776/pexels-photo-4489776.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'OTOSON mekanik bakım ve onarım',
    caption: 'Mekanik Bakım',
  },
  {
    src: 'https://images.pexels.com/photos/6873129/pexels-photo-6873129.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'OTOSON lüks araç parlatma işlemi',
    caption: 'Yüzey Bakımı',
  },
  {
    src: 'https://images.pexels.com/photos/6872591/pexels-photo-6872591.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'OTOSON kar köpüğü ile araç yıkama',
    caption: 'Köpük Uygulaması',
  },
  {
    src: 'https://images.pexels.com/photos/14231684/pexels-photo-14231684.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'OTOSON siyah araç cilalama işlemi',
    caption: 'Parlatma İşlemi',
  },
  {
    src: 'https://images.pexels.com/photos/7154634/pexels-photo-7154634.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'OTOSON mikrofiber bez ile detaylı temizlik',
    caption: 'Detaylı Temizlik',
  },
  {
    src: 'https://images.pexels.com/photos/6873175/pexels-photo-6873175.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'OTOSON basınçlı su ile araç yıkama',
    caption: 'Basınçlı Yıkama',
  },
];

// Müşteri yorumları — buradan kolayca düzenlenebilir veya yeni yorum eklenebilir.
// İlk tasarımda yer tutucu olarak bırakılmıştır.
export interface Testimonial {
  name: string;
  rating: number;
  text: string;
}

export const testimonials: Testimonial[] = [
  {
    name: 'Mehmet K.',
    rating: 5,
    text: 'Kaporta ve boya işi için geldim. Hasar belli olmuyor, renk uyumu çok iyi. Kartal’da aradığım işçilik buymuş.',
  },
  {
    name: 'Ayşe D.',
    rating: 5,
    text: 'Çamurluk boyası ve küçük göçük için uğradım. İletişim hızlı, sonuç profesyoneldi. WhatsApp’tan randevu çok kolaydı.',
  },
  {
    name: 'Can T.',
    rating: 5,
    text: 'Kaporta onarımı sonrası araç ilk günkü gibi duruyor. Hem işçilik hem teslim süresi konusunda memnun kaldım.',
  },
];

export const navLinks = [
  { label: 'Ana Sayfa', href: '#anasayfa' },
  { label: 'Hizmetlerimiz', href: '#hizmetler' },
  { label: 'Hakkımızda', href: '#hakkimizda' },
  { label: 'Galeri', href: '#galeri' },
  { label: 'İletişim', href: '#iletisim' },
];
