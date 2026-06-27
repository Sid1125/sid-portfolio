const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/sid-portfolio' : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
