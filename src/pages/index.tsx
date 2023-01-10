import { MapProps } from 'components/Map'
import { getCookie, hasCookie } from 'cookies-next'
import client from 'graphql/client'
import { GetStadiumsQuery } from 'graphql/generated/graphql'
import { GET_STADIUMS } from 'graphql/queries'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import HomeTemplate from 'templates/Home'

export default function Home({ stadiums }: MapProps) {
  const router = useRouter()

  useEffect(() => {
    const { pathname, asPath, query, locale } = router

    if (hasCookie('selected-language')) {
      const savedLanguage = JSON.stringify(
        getCookie('selected-language')
      ).replace(/["]/g, '')

      locale !== savedLanguage &&
        router.push({ pathname, query }, asPath, { locale: savedLanguage })
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return <HomeTemplate stadiums={stadiums} />
}

export const getStaticProps = async () => {
  const { stadiums } = await client.request<GetStadiumsQuery>(GET_STADIUMS)

  return {
    revalidate: 60,
    props: {
      stadiums
    }
  }
}
