import nextPwa from 'next-pwa';

const withPWA = nextPwa({
  dest: 'public',
  register: false,
  dest: '.next',
});

/** @type {import('next').NextConfig} */
const nextConfig = withPWA({
  webpack: (config) => {
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.('.svg'),
    );

    config.module.rules.push(
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        resourceQuery: { not: /url/ }, // exclude if *.svg?url
        use: ['@svgr/webpack'],
      },
    );

    fileLoaderRule.exclude = /\.svg$/i;
    return config;
  },
});

export default nextConfig;
