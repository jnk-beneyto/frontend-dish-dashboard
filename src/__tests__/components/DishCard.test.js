import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '../test-utils'
import { DishCard } from '../../components/DishCard'

describe('component <Card />', () => {
  test('it renders with data', () => {
    const dish = {name: 'dish1',  description: 'description1'}
    const index = 0
    const { getByText }= render(<DishCard dish={dish} key={index} />)

    expect(getByText(dish.name)).toBeInTheDocument()
    expect(getByText(dish.description)).toBeInTheDocument()
  })
})