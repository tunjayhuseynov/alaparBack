module.exports = {
  images: {
    domains: ['192.168.1.103'],
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