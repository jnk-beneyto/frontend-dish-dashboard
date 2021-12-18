import React from 'react'
import { DishCard } from './DishCard'
import { useFetch } from '../hooks/useFetch'

export const DishList = () => {
  const { error, isLoading, dishes } = useFetch()

  if (error) {

    return (
      <div className='bg-red-400 container mx-auto grid grid-cols-1 rounded-md'>
        <h4 className='text-center py-4 text-white uppercase'> Error found</h4>
      </div>
    )
  } else {
    return (
      <>
        {isLoading && <div>Loading...</div>}
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
