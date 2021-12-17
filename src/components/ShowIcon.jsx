import React from 'react'

export const ShowIcon = ({ type }) => {
  switch (type) {
    case 'starter':
      return (
        <div>
          <img src="https://img.icons8.com/wired/32/000000/salad.png" alt='starter' />
        </div>
      )
    case 'main':
      return (
        <div>
          <img src="https://img.icons8.com/wired/32/000000/paella.png" alt='main' />
        </div>
      )
    default:
      return (
        <div>
          <img src="https://img.icons8.com/wired/32/000000/cherry-cheesecake.png" alt='dessert' />
        </div>
      )
  }
}
