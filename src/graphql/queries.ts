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
  query getPageBySlug($slug: String!) {
    page(where: { slug: $slug }) {
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
    stadiums {
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
  query getStadiumBySlug($slug: String!) {
    stadium(where: { slug: $slug }) {
      id
      slug
      name
      location {
        latitude
        longitude
      }
      description {
        html
        text
      }
      gallery {
        url
        height
        width
      }
    }
  }
`
