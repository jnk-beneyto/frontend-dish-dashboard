import React from 'react'

export const ShowIcon = ({ type }) => {
  switch (type) {
    case 'starter':
      return (
        <div>
          <img src="https://img.icons8.com/wired/32/ff6384/salad.png" alt='starter' />
        </div>
      )
    case 'main':
      return (
        <div>
          <img src="https://img.icons8.com/wired/32/36a2e6/paella.png" alt='main' />
        </div>
      )
    default:
      return (
        <div>
          <img src="https://img.icons8.com/wired/32/ffc256/cherry-cheesecake.png" alt='dessert' />
        </div>
      )
  }
}
