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
      name: 'Arena Fonte Nova',
      slug: 'arena-fonte-nova',
      location: {
        latitude: -12.9704,
        longitude: -38.5124
      }
    }

    const secoundPlace = {
      id: '2',
      name: 'Old trafford',
      slug: 'old-trafford',
      location: {
        latitude: 53.467,
        longitude: -2.233
      }
    }

    render(<Map stadiums={[place, secoundPlace]} />)

    expect(screen.getByTitle(/Arena Fonte Nova/i)).toBeInTheDocument()
    expect(screen.getByTitle(/old trafford/i)).toBeInTheDocument()
  })
})
