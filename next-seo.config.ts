import { DefaultSeoProps } from 'next-seo'

const config: DefaultSeoProps = {
  openGraph: {
    type: 'website',
    locale: 'pt_BR' /* 'en_US' */,
    url: 'https://amazing-stadiums.vercel.app',
    siteName: 'Amazing Stadiums',
    description: 'A project to tour the most amazing stadiums around the world.'
  },
  twitter: {
    handle: '@EdLucaas',
    site: '@site',
    cardType: 'summary_large_image'
  }
}

export default config
