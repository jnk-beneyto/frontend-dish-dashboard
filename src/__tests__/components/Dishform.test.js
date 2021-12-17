import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '../test-utils'
import { Dishform } from '../../components/Dishform'

describe('component <Dishform />', () => {
  test('it renders', () => {
    const form = {namePlaceholder: 'Dish name',  descriptionPlaceholder: 'Add a description'}

    const { getByPlaceholderText }= render(<Dishform />)

    expect(getByPlaceholderText(form.namePlaceholder)).toBeInTheDocument()
    expect(getByPlaceholderText(form.descriptionPlaceholder)).toBeInTheDocument()
  })
})