import { Footer } from 'components/Footer'
import client from 'graphql/client'
import { GetPageBySlugQuery, GetPagesQuery } from 'graphql/generated/graphql'
import { GET_PAGES, GET_PAGE_BY_SLUG } from 'graphql/queries'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import PageTemplate, { PageTemplateProps } from 'templates/Pages'

export default function Page({ heading, body }: PageTemplateProps) {
  const router = useRouter()

  if (router.isFallback) return null

  return (
    <>
      <PageTemplate heading={heading} body={body} />
      <Footer>
        <p>
          Developed with 💜 {''}
          <a
            href="https://github.com/EdsonLucasbd"
            target="_blank"
            rel="noreferrer"
          >
            Edson Lucas
          </a>
        </p>
      </Footer>
    </>
  )
}

export async function getStaticPaths() {
  const { pages } = await client.request<GetPagesQuery>(GET_PAGES, {
    first: 3
  })

  const paths = pages.map(({ slug }) => ({
    params: { slug }
  }))

  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async ({ params, locale }) => {
  const { page } = await client.request<GetPageBySlugQuery>(GET_PAGE_BY_SLUG, {
    slug: `${params?.slug}`,
    locale
  })

  if (!page) return { notFound: true }

  return {
    props: {
      heading: page.heading,
      body: page.body.html
    }
  }
}
