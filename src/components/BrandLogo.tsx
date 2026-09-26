import { siteConfig } from '@/config/site';

const markSize = {
  nav: 'h-[4.75rem] w-auto sm:h-20 lg:h-[4.5rem]',
  hero: 'h-40 w-auto sm:h-52 lg:h-56',
  footer: 'h-20 w-auto',
} as const;

const markPx = {
  nav: { w: 76, h: 80 },
  hero: { w: 200, h: 224 },
  footer: { w: 76, h: 80 },
} as const;

interface BrandLogoProps {
  size?: keyof typeof markSize;
  priority?: boolean;
}

export default function BrandLogo({ size = 'nav', priority = false }: BrandLogoProps) {
  return (
    <img
      src="/logo.png"
      alt={siteConfig.name}
      width={markPx[size].w}
      height={markPx[size].h}
      className={`${markSize[size]} logo-glow shrink-0 object-contain`}
      decoding="async"
      fetchPriority={priority ? 'high' : 'auto'}
    />
  );
}
