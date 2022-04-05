const withPlugins = require('next-compose-plugins');
const withAntdLess = require('next-plugin-antd-less');

const pluginAntdLess = withAntdLess({
  // optional
  //modifyVars: { '@primary-color': '#04f' },
  // optional
  lessVarsFilePath: './styles/variables.less',
  // optional
  lessVarsFilePathAppendToEndOfContent: true,
  // optional https://github.com/webpack-contrib/css-loader#object
  cssLoaderOptions: {},
});

module.exports = withPlugins([/*pluginAntdLess]*/], {
  swcMinify: true,
  webpack(config, { defaultLoaders }) {
    return config;
  },
  images: {
    disableStaticImages: true,
    domains: ['192.168.1.103', '192.168.1.102', '192.168.1.101', '192.168.1.104', '192.168.1.108', "192.168.0.152", 'localhost'],
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:5566/:path*' // Proxy to Backend
      }
    ]
  }
})