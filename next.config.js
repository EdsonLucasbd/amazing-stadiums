/** @type {import('next').NextConfig} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development'
})

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['media.graphassets.com']
  },
  withPWA
}
