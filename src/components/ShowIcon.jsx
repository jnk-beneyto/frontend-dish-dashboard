import React from 'react'

export const ShowIcon = ({ type }) => {
  switch (type) {
    case 'starter':
      return (
        <div>
          <img src="https://img.icons8.com/wired/32/000000/salad.png" />
        </div>
      )
    case 'main':
      return (
        <div>
          <img src="https://img.icons8.com/wired/32/000000/paella.png" />
        </div>
      )
    default:
      return (
        <div>
          <img src="https://img.icons8.com/wired/32/000000/cherry-cheesecake.png" />
        </div>
      )
  }
}
