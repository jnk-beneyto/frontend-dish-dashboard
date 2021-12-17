import React from 'react'
import { useEffect } from 'react'
import { useToasts } from 'react-toast-notifications'
import { DishCard } from './DishCard'
import { dishService } from '../services'
import { useDishDispatch, useDishState } from '../context/dishContext'

export const DishList = () => {
  const { search, fetchData, dishes, error, errorMessage, isLoading, dishesFixed } = useDishState()
  const { setToggleFetch, setDishes, setLoading, setDishesFixed } = useDishDispatch()
  const { addToast } = useToasts()

  useEffect(() => {
    if (fetchData) {
      setLoading(true)
      dishService.getAll()
        .then(data => {
          setLoading(false)
          setDishes(data.message)
          setDishesFixed(data.message)
          setToggleFetch(false)
        })
        .catch(e => addToast(e.message || 'Some error happened', { appearance: 'error', autoDismiss: true }))
    }
  }, [fetchData])

  useEffect(() => {
    if (search !== '') {
      const filteredDishes = dishesFixed.filter(dish => dish.name.toLowerCase().includes(search.toLowerCase()))
      setDishes(filteredDishes)
    } else {
      setDishes(dishesFixed)
    }
  }, [search])

  // const { addToast } = useToasts()

  if (error) {
    console.log(errorMessage)
    return (
      <div className='bg-red-400 container mx-auto grid grid-cols-1 rounded-md'>
        <h4 className='text-center py-4 text-white uppercase'> Error found</h4>
      </div>
    )
  } else {
    return (
      <>
        {isLoading && !error && <div>Loading...</div>}
        {!isLoading && !error && dishes.length ? (
          <div className='grid grid-cols-1 sm:grid-cols-2'>
            {dishes.map((dish, index) => {
              return (
                <DishCard dish={dish} key={index} />
              )
            })}
          </div>
        ) : (
          <div className='bg-gray-400 container mx-auto grid grid-cols-1 rounded-md'>
            <h4 className='text-center py-4 text-white uppercase'> No dishes to show</h4>
          </div>
        )}
      </>
    )
  }
}
