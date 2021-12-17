import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '../test-utils'
import { ShowIcon } from '../../components/ShowIcon'

describe('component <ShowIcon />', () => {
  test('it renders each icon depending on type', () => {
    const type= {main: 'main', starter: 'starter', dessert: 'dessert'}

    render(<ShowIcon type={type.main} />)
    expect(screen.getByAltText('main')).toBeInTheDocument()

    render(<ShowIcon type={type.starter} />)
    expect(screen.getByAltText('starter')).toBeInTheDocument()

    render(<ShowIcon type={type.dessert} />)
    expect(screen.getByAltText('dessert')).toBeInTheDocument()
  })
})