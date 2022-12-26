import { render, screen } from '@testing-library/react'
import Map from '.'

describe('<Map />', () => {
  it('should render without any marker', () => {
    render(<Map />)

    expect(
      screen.getByRole('link', {
        name: /a js library for interactive maps/i
      })
    ).toBeInTheDocument()
  })
  it('should render with the marker in correct place', () => {
    const place = {
      id: '1',
      name: 'Salvador',
      slug: 'salvador',
      location: {
        latitude: -12.9704,
        longitude: -38.5124
      }
    }

    const secoundPlace = {
      id: '2',
      name: 'Manchester',
      slug: 'manchester',
      location: {
        latitude: 53.467,
        longitude: -2.233
      }
    }

    render(<Map places={[place, secoundPlace]} />)

    expect(screen.getByTitle(/salvador/i)).toBeInTheDocument()
    expect(screen.getByTitle(/manchester/i)).toBeInTheDocument()
  })
})
