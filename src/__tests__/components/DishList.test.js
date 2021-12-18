import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '../test-utils'
import { DishList } from '../../components/DishList'
import { useFetch } from '../../hooks/useFetch'
jest.mock('../../hooks/useFetch')

describe('component <DishList />', () => {

  test('it renders message when there is no data', () => {
    useFetch.mockReturnValue({
      dishes:[], error:null, isLoading:false
    })
    const { getByText }= render(<DishList />)
    expect(getByText('No dishes to show')).toBeInTheDocument()
  })

  test('it renders data', () => {
    useFetch.mockReturnValue({
      dishes:[{name:'dishShown', type:'main', description:'description'}], error:null, isLoading:false
    })
    const { getByText }= render(<DishList />)
    expect(getByText('dishShown')).toBeInTheDocument()
  })
    
})