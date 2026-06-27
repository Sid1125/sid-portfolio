// next.config.mjs or next.config.js
const nextConfig = {
  output: 'export',               // Required for GitHub Pages static hosting
  basePath: '/sid-portfolio',     // Matches your GitHub repository name
  images: {
    unoptimized: true,            // Disables the Node.js server image optimizer
  },
};

export default nextConfig;
