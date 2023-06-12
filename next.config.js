// const path = require('path')
// const { default: DevServer } = require('next/dist/server/dev/next-dev-server')

// const withMDX = require('@next/mdx')({
//   extension: /\.mdx?$/,
//   options: {
//     remarkPlugins: [],
//     rehypePlugins: [],
//   },
//   sassOptions: {
//     includePaths: [path.join(__dirname, 'styles')]
//   },
//   webpack: (config, options) => {
//     config.devServer = {
//       proxy: {
//         '/json1/': {
//           target: 'https://ipapi.co/',
//           changeOrigin: true,
//           pathRewrite: { '^/json1/': '/json/' },
//         }
//       },
//     }
//     return config
//   },
// })
// module.exports = withMDX({
//   pageExtensions: ['js', 'jsx', 'tsx', 'md', 'mdx'],
// })

const withMDX = require('@next/mdx')({
  extension: /\.(mdx)?$/,

})
module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'tsx', 'mdx'],
  compress: process.env.NODE_ENV === 'production',
  // images: {
  //   unoptimized: true
  // },
  env: {
    customKey: '1243'
  }
})