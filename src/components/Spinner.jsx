import React from 'react'

export const Spinner = () => {
  return (
    <div className='flex justify-center my-20'>
      <div Style='border-top-color:transparent'
        className='w-16 h-16 border-4 border-blue-400 border-solid rounded-full animate-spin'></div>
    </div>
  )
}
