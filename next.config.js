const StringReplacePlugin = require('string-replace-webpack-plugin');

const withMDX = require('@next/mdx')({
  extension: /\.(mdx)?$/,
})
module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'tsx', 'mdx'],
  compress: process.env.NODE_ENV === 'production',
  env: {
    customKey: '1243'
  },
  swcMinify: true,
  publicRuntimeConfig: {
    env: {
      S3_KEY: process.env.photoenhancer_S3_KEY,
      S3_SECRET: process.env.photoenhancer_S3_KEY
    }
  },
  async rewrites(){
    return {
      fallback: [
        {
          source: '/:api*',
          destination: 'https://testserver.easeus.com:44339/:api*'
        }
      ]
    }
  },
  webpack: (config, options) => {
    config.devServer = {
      port: '3000',
      client: {
        overlay: {
          errors: true,
          warnings: false,
        },
      },
      proxy: {
        '/apipdf/': {
          target: 'https://pdf.easeus.com',
          changeOrigin: true,
          pathRewrite: { '^/apipdf/': '/api/' },
        },
      },
    }
    config.module.
      rules.push({
        test: /\.(mdx|md)$/,
        use: [
          {
            loader: StringReplacePlugin.replace({
              replacements: [
                {
                  pattern: /<img[^>]*>(.*?<\/\1>)?/g,
                  replacement: function (match, p1, offset, string) {
                    return match
                      .replace(/(\.\.\/)/g, '')
                      .replace('assets/', "/imgs/");
                  },
                }
              ],
            }),
          },
        ],
      })
    // config.module.rules.push({
    //   test: /\.(c|sc|sa)ss$/i,
    //   use: [
    //     {
    //       loader: 'style-loader',
    //       options: { injectType: 'styleTag' }
    //     },
    //     {
    //       loader: 'css-loader'
    //     },
    //     'sass-loader'
    //   ]
    // })
    return config
  },
})