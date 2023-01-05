import client from 'graphql/client'
import { GetStadiumsQuery } from 'graphql/generated/graphql'
import { GET_STADIUMS } from 'graphql/queries'
import { getServerSideSitemap } from 'next-sitemap'
import { GetServerSideProps } from 'next'

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // Method to source urls from cms
  const { stadiums } = await client.request<GetStadiumsQuery>(GET_STADIUMS)

  const fields = stadiums.map(({ slug }) => ({
    loc: `https://amazing-stadiums.vercel.app/${slug}`,
    lastmod: new Date().toISOString()
  }))

  fields.push(
    {
      loc: `https://amazing-stadiums.vercel.app/`,
      lastmod: new Date().toISOString()
    },
    {
      loc: `https://amazing-stadiums.vercel.app/about`,
      lastmod: new Date().toISOString()
    }
  )

  return getServerSideSitemap(ctx, fields)
}

// Default export to prevent next.js errors
// eslint-disable-next-line @typescript-eslint/no-empty-function
export default function Sitemap() {}
