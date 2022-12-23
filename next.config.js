/** @type {import('next').NextConfig} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa')

module.exports = withPWA({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development'
})
