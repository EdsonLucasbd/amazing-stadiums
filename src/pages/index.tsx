import { MapProps } from 'components/Map'
import client from 'graphql/client'
import { GetStadiumsQuery } from 'graphql/generated/graphql'
import { GET_STADIUMS } from 'graphql/queries'
import HomeTemplate from 'templates/Home'

export default function Home({ stadiums }: MapProps) {
  return <HomeTemplate stadiums={stadiums} />
}

export const getStaticProps = async () => {
  const { stadiums } = await client.request<GetStadiumsQuery>(GET_STADIUMS)

  return {
    props: {
      stadiums
    }
  }
}
