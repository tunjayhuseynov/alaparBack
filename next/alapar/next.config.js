module.exports = {
  images: {
    disableStaticImages: true,
    domains: ['192.168.1.103', '192.168.1.102', 'localhost'],
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