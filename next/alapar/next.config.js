module.exports = {
  images: {
    domains: ['source.unsplash.com'],
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:5566/:path*' // Proxy to Backend
      }
    ]
  }
}