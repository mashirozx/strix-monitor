import localFont from 'next/font/local';

export const FontIceland = localFont({
  src: '../assets/fonts/Iceland-Regular.ttf',
  variable: '--font-label',
});

export const FontTektur = localFont({
  src: [
    {
      path: '../assets/fonts/Tektur-Regular.ttf',
      weight: '400',
      // style: 'normal',
    },
    {
      path: '../assets/fonts/Tektur-Medium.ttf',
      weight: '500',
    },
    {
      path: '../assets/fonts/Tektur-SemiBold.ttf',
      weight: '600',
    },
    {
      path: '../assets/fonts/Tektur-Bold.ttf',
      weight: '700',
    },
    {
      path: '../assets/fonts/Tektur-ExtraBold.ttf',
      weight: '800',
    },
    {
      path: '../assets/fonts/Tektur-Black.ttf',
      weight: '900',
    },
  ],
  variable: '--font-unit',
});

export const FontSegment = localFont({
  src: '../assets/fonts/Seven-Segment.ttf',
  variable: '--font-segment',
});

export const FontDigital7Mono = localFont({
  src: '../assets/fonts/Digital-7-Mono.ttf',
  variable: '--font-digital-7-mono',
});
