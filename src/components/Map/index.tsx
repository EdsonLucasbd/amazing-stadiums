import { useRouter } from 'next/router'
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet'
import { mapView } from './config'
import * as S from './styles'

type Stadium = {
  id: string
  name: string
  slug: string
  location: {
    latitude: number
    longitude: number
  }
}

export type MapProps = {
  stadiums?: Stadium[]
}

const MAPBOX_API_KEY = process.env.NEXT_PUBLIC_MAPBOX_API_KEY
const MAPBOX_USERID = process.env.NEXT_PUBLIC_MAPBOX_USERID
const MAPBOX_STYLEID = process.env.NEXT_PUBLIC_MAPBOX_STYLEID

const CustomTileLayer = () => {
  return MAPBOX_API_KEY ? (
    <TileLayer
      attribution='© <a href="https://apps.mapbox.com/feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      url={`https://api.mapbox.com/styles/v1/${MAPBOX_USERID}/${MAPBOX_STYLEID}/tiles/256/{z}/{x}/{y}@2x?access_token=${MAPBOX_API_KEY}`}
    />
  ) : (
    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
  )
}

const MyMapConosumer = () => {
  const map = useMap()
  const width =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth

  if (width < 768) {
    map.setMinZoom(2)
  }

  map.addEventListener('dragend', () => {
    mapView.setView(map.getCenter())
  })
  map.addEventListener('zoomend', () => {
    mapView.setView(map.getCenter(), map.getZoom())
  })
  return null
}

const Map = ({ stadiums }: MapProps) => {
  const router = useRouter()
  return (
    <S.MapWrapper>
      <MapContainer
        center={mapView.center}
        zoom={mapView.zoom}
        minZoom={3}
        maxBounds={[
          [-180, 180],
          [180, -180]
        ]}
        maxBoundsViscosity={1.0}
        style={{ height: '100%', width: '100%' }}
      >
        <MyMapConosumer />
        <CustomTileLayer />
        {stadiums?.map(({ id, name, slug, location }) => {
          const { latitude, longitude } = location

          return (
            <Marker
              key={`place-${id}`}
              position={[latitude, longitude]}
              title={name}
              eventHandlers={{
                click: () => {
                  router.push(`/stadium/${slug}`, undefined, {
                    locale: 'pt_BR'
                  })
                }
              }}
            />
          )
        })}
      </MapContainer>
    </S.MapWrapper>
  )
}

export default Map
