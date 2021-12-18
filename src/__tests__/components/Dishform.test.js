import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import {fireEvent} from '@testing-library/react'
import { render } from '../test-utils'
import { Dishform } from '../../components/Dishform'

describe('component <Dishform />', () => {

  const setup = () => {
    const utils = render(<Dishform />)
    const form = { namePlaceholder: 'Dish name',  descriptionPlaceholder: 'Add a description' }
    const dish = { name: 'dish1',  description: 'description1' }
    const inputName = utils.getByPlaceholderText(form.namePlaceholder)
    const inputDescription = utils.getByPlaceholderText(form.descriptionPlaceholder)
    return {
      dish,
      form,
      inputName,
      inputDescription,
      ...utils,
    }
  }
  
  test('Input changes data', () => {
    const { inputName, inputDescription } = setup()

    expect(inputName).toBeInTheDocument()
    expect(inputDescription).toBeInTheDocument()
  })


  test('checking Name form input', () => {
    const {inputName, inputDescription, dish} = setup()

    fireEvent.change(inputName, {target: {value: dish.name}})
    expect(inputName.value).toBe(dish.name)

    fireEvent.change(inputDescription, {target: {value: dish.description}})
    expect(inputDescription.value).toBe(dish.description)
  })
})