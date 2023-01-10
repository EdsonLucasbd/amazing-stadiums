import { LinkWrapper } from 'components/LinkWrapper'
import { InfoOutline } from '@styled-icons/evaicons-outline'
import dynamic from 'next/dynamic'
import { MapProps } from 'components/Map'
import { NextSeo } from 'next-seo'
import { SettingButton } from 'components/SettingButton'

const Map = dynamic(() => import('components/Map'), { ssr: false })

export default function HomeTemplate({ stadiums }: MapProps) {
  return (
    <>
      <NextSeo
        title="Amazing Stadiums"
        description="A project to tour the most amazing stadiums around the world."
        canonical="https://amazing-stadiums.vercel.app"
        openGraph={{
          url: 'https://amazing-stadiums.vercel.app',
          title: 'Amazing Stadiums',
          description:
            'A project to tour the most amazing stadiums around the world.',
          images: [
            {
              url: 'https://my-trips.willianjusten.com.br/img/cover.png',
              width: 1280,
              height: 720,
              alt: 'Amazing Stadiums'
            }
          ],
          site_name: 'Amazing Stadiums'
        }}
      />
      <LinkWrapper href="/about">
        <InfoOutline
          size={32}
          aria-label="Clique para ir à pagina de detalhes deste projeto"
        />
      </LinkWrapper>
      <SettingButton />

      <Map stadiums={stadiums} />
    </>
  )
}
