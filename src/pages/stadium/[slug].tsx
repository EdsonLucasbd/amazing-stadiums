import client from 'graphql/client'
import {
  GetStadiumBySlugQuery,
  GetStadiumsQuery
} from 'graphql/generated/graphql'
import { GET_STADIUMS, GET_STADIUM_BY_SLUG } from 'graphql/queries'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import StadiumsTemplate, { StadiumsTemplateProps } from 'templates/Stadiums'

type StaticPathsProps = {
  locale: string
  locales: string[]
}

export default function Stadium({ stadium }: StadiumsTemplateProps) {
  const router = useRouter()

  if (router.isFallback) return null

  return <StadiumsTemplate stadium={stadium} />
}

export async function getStaticPaths({
  locales,
  locale = 'pt_BR'
}: StaticPathsProps) {
  let paths: unknown[] = []

  const { stadiums } = await client.request<GetStadiumsQuery>(GET_STADIUMS, {
    first: 3,
    locale
  })

  for (const locale of locales) {
    paths = [
      ...paths,
      ...stadiums.map(({ slug }) => ({
        params: { slug },
        locale
      }))
    ]
  }

  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async ({ params, locale }) => {
  const { stadium } = await client.request<GetStadiumBySlugQuery>(
    GET_STADIUM_BY_SLUG,
    {
      slug: `${params?.slug}`,
      locale
    }
  )

  if (!stadium) return { notFound: true }

  return {
    revalidate: 60,
    props: {
      stadium
    }
  }
}
