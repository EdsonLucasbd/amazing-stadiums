import styled from 'styled-components'

export const Footer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 2rem;
  background-color: var(--darken);
  color: var(--white);
  text-align: center;

  a,
  p {
    font-size: 1.6rem;
    line-height: 1.3;
  }

  a {
    text-decoration: none;
    color: var(--white);
    transition: all 0.3s ease;

    &:hover {
      color: var(--highlight);
      text-decoration: underline;
    }
  }
`
