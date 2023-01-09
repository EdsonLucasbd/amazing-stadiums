import styled from 'styled-components'

export const Wrapper = styled.div`
  position: fixed;
  z-index: 1100;
  top: var(--xlarge);
  right: var(--medium);

  svg {
    transition: color 0.3s ease-in-out;

    &:hover {
      color: var(--highlight);
    }
  }

  button {
    color: var(--white);
    cursor: pointer;
    background-color: transparent;
    border: none;
  }
`

export const MenuContainer = styled.nav<{ open: boolean }>`
  width: 20rem;
  height: 22rem;
  padding: 2rem;
  top: 0;
  display: flex;
  flex-direction: column;
  position: absolute;
  right: -3rem;
  translate: ${(prop) => (prop.open ? 0 : 25)}rem;
  border-radius: 2rem 0 0 2rem;
  transition: translate 0.2s ease-in-out;

  background-color: var(--darken);

  -webkit-box-shadow: -4px 4px 5px -3px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: -4px 4px 5px -3px rgba(0, 0, 0, 0.15);
  box-shadow: -4px 4px 5px -3px rgba(0, 0, 0, 0.15);

  svg {
    position: absolute;
    left: 1rem;
  }
`

export const LanguageContainer = styled.div`
  margin-top: var(--large);
  display: flex;
  flex-direction: column;
  gap: var(--small);

  p {
    font-size: var(--small);
  }
`
export const ListWrapper = styled.ul`
  list-style: none;
`
export const ListItem = styled.li<{ current: boolean }>`
  cursor: pointer;
  font-size: 1.6rem;
  padding: 0.5rem;
  border-radius: 0.5rem;
  text-align: center;

  transition: all 0.3s ease;

  a {
    color: var(--white);
    text-decoration: none;
    display: block;
    padding: 1rem;
    border-left: ${(prop) => prop.current && '0.1rem solid var(--highlight)'};
  }

  &:hover {
    background-color: var(--highlight);
  }
`
