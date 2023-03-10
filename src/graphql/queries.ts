import { gql } from 'graphql-request'

export const GET_PAGES = gql`
  query getPages($first: Int) {
    pages(first: $first) {
      heading
      id
      slug
      body {
        html
      }
    }
  }
`

export const GET_PAGE_BY_SLUG = gql`
  query getPageBySlug($slug: String!, $locale: Locale!) {
    page(where: { slug: $slug }, locales: [$locale]) {
      id
      heading
      slug
      body {
        html
      }
    }
  }
`

export const GET_STADIUMS = gql`
  query getStadiums {
    stadiums(locales: en) {
      id
      slug
      name
      location {
        latitude
        longitude
      }
      description {
        html
      }
      gallery {
        url
        height
        width
      }
    }
  }
`
export const GET_STADIUM_BY_SLUG = gql`
  query getStadiumBySlug($slug: String!, $locale: Locale!) {
    stadium(where: { slug: $slug }, locales: [$locale]) {
      id
      slug
      name
      location {
        latitude
        longitude
      }
      description {
        html
      }
      gallery(locales: en) {
        url
        height
        width
      }
    }
  }
`
