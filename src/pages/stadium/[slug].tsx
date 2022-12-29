import client from 'graphql/client'
import {
  GetStadiumBySlugQuery,
  GetStadiumsQuery
} from 'graphql/generated/graphql'
import { GET_STADIUMS, GET_STADIUM_BY_SLUG } from 'graphql/queries'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import StadiumsTemplate, { StadiumsTemplateProps } from 'templates/Stadiums'

export default function Stadium({ stadium }: StadiumsTemplateProps) {
  const router = useRouter()

  if (router.isFallback) return null

  return <StadiumsTemplate stadium={stadium} />
}

export async function getStaticPaths() {
  const { stadiums } = await client.request<GetStadiumsQuery>(GET_STADIUMS, {
    first: 3
  })

  const paths = stadiums.map(({ slug }) => ({
    params: { slug }
  }))

  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { stadium } = await client.request<GetStadiumBySlugQuery>(
    GET_STADIUM_BY_SLUG,
    {
      slug: `${params?.slug}`
    }
  )

  if (!stadium) return { notFound: true }

  return {
    props: {
      stadium
    }
  }
}
