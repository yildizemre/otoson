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

export const siteConfig = {
  name: 'OTOSON Oto Yıkama & Otomotiv',
  shortName: 'OTOSON',
  slogan: 'Temizlikte özen, bakımda güven.',
  address: 'Çavuşoğlu Mah. Spor Cad. No:82 Kartal / İstanbul',
  phone: '0531 367 83 55',
  phoneTel: '+905313678355',
  instagram: '@otoson.kartal',
  instagramUrl: 'https://instagram.com/otoson.kartal',
  whatsappUrl:
    'https://wa.me/905313678355?text=Merhaba%2C%20OTOSON%20hizmetleri%20hakk%C4%B1nda%20bilgi%20ve%20randevu%20almak%20istiyorum.',
  whatsappShortMessage:
    'Merhaba, OTOSON hizmetleri hakkında bilgi ve randevu almak istiyorum.',
  mapsQuery: 'Çavuşoğlu Mah. Spor Cad. No:82 Kartal İstanbul',
  // Çalışma saatleri — buradan kolayca düzenlenebilir
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
  return `https://wa.me/905313678355?text=${encodeURIComponent(msg)}`;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const services: Service[] = [
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
    id: 'kaporta-boya',
    title: 'Kaporta ve Boya',
    description:
      'Kaporta hasarları ve boya işlemleri için profesyonel ve güvenilir çözümler.',
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
  { title: 'Özenli işçilik', icon: Sparkles },
  { title: 'Profesyonel uygulama', icon: Gauge },
  { title: 'Güvenilir hizmet', icon: Shield },
  { title: 'Kaliteli ürün kullanımı', icon: Layers },
  { title: 'Müşteri memnuniyeti', icon: Car },
  { title: 'Hızlı iletişim ve randevu', icon: Wrench },
  { title: 'Tek noktada kapsamlı hizmet', icon: Paintbrush },
  { title: "Kartal'da kolay ulaşılabilir konum", icon: CalendarClock },
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
    caption: 'Köpük Yıkama',
  },
  {
    src: 'https://images.pexels.com/photos/14908957/pexels-photo-14908957.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'OTOSON cilalama ve parlatma işlemi',
    caption: 'Pasta ve Cila',
  },
  {
    src: 'https://images.pexels.com/photos/6873191/pexels-photo-6873191.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'OTOSON lüks araç yıkama servisi',
    caption: 'Profesyonel Yıkama',
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
    text: 'İç dış detaylı temizlik sonrası araç bambaşka duruyor. Kartal’da aradığım özenli işçilik tam olarak burada.',
  },
  {
    name: 'Ayşe D.',
    rating: 5,
    text: 'Pasta cila için geldim, iletişim hızlı ve sonuç profesyoneldi. Randevuyu WhatsApp’tan kolayca ayarladık.',
  },
  {
    name: 'Can T.',
    rating: 5,
    text: 'Yıkama ve bakım işini aynı yerde hallettim. Hem vakit kazandım hem de teslim aldığım araçtan memnun kaldım.',
  },
];

export const navLinks = [
  { label: 'Ana Sayfa', href: '#anasayfa' },
  { label: 'Hizmetlerimiz', href: '#hizmetler' },
  { label: 'Hakkımızda', href: '#hakkimizda' },
  { label: 'Galeri', href: '#galeri' },
  { label: 'İletişim', href: '#iletisim' },
];
