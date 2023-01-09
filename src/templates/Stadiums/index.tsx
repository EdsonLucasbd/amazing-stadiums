import { CloseOutline } from '@styled-icons/evaicons-outline'
import { LinkWrapper } from 'components/LinkWrapper'
import { SettingButton } from 'components/SettingButton'
import { NextSeo } from 'next-seo'
import Image from 'next/image'
import { useRouter } from 'next/router'

import * as S from './styles'

type ImageProps = {
  url: string
  height: number
  width: number
}

export type StadiumsTemplateProps = {
  stadium: {
    slug: string
    name: string
    description?: {
      html: string
      text: string
    }
    gallery: ImageProps[]
  }
}

export default function StadiumsTemplate({ stadium }: StadiumsTemplateProps) {
  const router = useRouter()

  if (router.isFallback) return null

  return (
    <>
      <NextSeo
        title={`${stadium.name} - Amazing Stadiums`}
        description={
          stadium.description?.text ||
          'A project to tour the most amazing stadiums around the world.'
        }
        canonical="https://amazing-stadiums.vercel.app"
        openGraph={{
          url: 'https://amazing-stadiums.vercel.app',
          title: `${stadium.name} - Amazing Stadiums`,
          description:
            stadium.description?.text ||
            'A project to tour the most amazing stadiums around the world.',
          images: [
            {
              url: stadium.gallery[0].url,
              width: stadium.gallery[0].width,
              height: stadium.gallery[0].height,
              alt: `${stadium.name}`
            }
          ]
        }}
      />
      <LinkWrapper href="/">
        <CloseOutline
          size={32}
          aria-label="Clique para retornar para o mapa."
        />
      </LinkWrapper>
      <SettingButton />

      <S.Wrapper>
        <S.Container>
          <S.Heading>
            <h1>{stadium.name}</h1>
          </S.Heading>

          <S.Body>
            <div
              dangerouslySetInnerHTML={{
                __html: stadium.description?.html || ''
              }}
            />
          </S.Body>

          <S.Gallery>
            {stadium.gallery.map((image, index) => (
              <Image
                key={`photo-${index}`}
                src={image.url}
                alt={`${stadium.name} image ${index}`}
                width={1000}
                height={600}
                quality={75}
              />
            ))}
          </S.Gallery>
        </S.Container>
      </S.Wrapper>
    </>
  )
}
