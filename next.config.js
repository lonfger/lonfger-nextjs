const path = require('path')
const { default: DevServer } = require('next/dist/server/dev/next-dev-server')

module.exports = (phase, { defaultConfig }) => {
  /**
   * @type {import('next').NextConfig}
   */
  const nextConfig = {
    ...defaultConfig,
    // async rewrites() {
    //   return [
    //     {
    //       source: '/api',
    //       destination: 'https://ipapi.co/json/',
    //     },
    //   ]
    // },

    sassOptions: {
      includePaths: [path.join(__dirname, 'styles')]
    },
    webpack: (config, options) => {
      config.devServer = {
        proxy: {
          '/json1/': {
            target: 'https://ipapi.co/',
            changeOrigin: true,
            pathRewrite: { '^/json1/': '/json/' },
          }
        },

      }
      return config
    },
  }

  return nextConfig
}