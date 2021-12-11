import { useToasts } from 'react-toast-notifications'
import { ShowIcon } from './ShowIcon'
import { dishService } from '../services'
import { useDishDispatch, useDishState } from '../context/dishContext'

export const DishCard = ({ dish, index }) => {
  const { addToast } = useToasts()
  const { dishes } = useDishState()
  const { setToggleFetch, setDish, setEditMode } = useDishDispatch()

  const handleDelete = (id) => {
    dishService.delete(id).then(data => {
      if (data.status === 200) {
        addToast("Dish deleted", { appearance: 'success', autoDismiss: true })
        setToggleFetch(true)
      }
    }).catch(e => addToast(e.message || 'Some error happened', { appearance: 'error', autoDismiss: true })
    )
  }

  const handleEdit = (id) => {
    const dishSelected = dishes.find(d => d._id === id)
    setDish(dishSelected)
    setEditMode(true)
  }

  return (
    <section key={index} className=' mx-2 mb-2 border-solid border-2 border-black rounded-md shadow-xl'>
      <div className='flex-col'>
        <header>
          <div className='flex justify-between items-center'>
            <span className='ml-2 py-1 text-bold'>{dish.name}</span>
            <span className='mr-2 py-1'>
              <ShowIcon type={dish.type} />
            </span>
          </div>
        </header>
        <div className='pl-2 h-16 border-solid border-2 border-gray-200'>{dish.description}</div>
        <footer>
          <div className='flex justify-between py-1'>
            <button
              className='ml-2 my-1 py-1 px-2 bg-green-600 hover:bg-green-900 hover:text-white rounded-md'
              onClick={() => handleEdit(dish._id)}
            >
              <div className='flex flex-nowrap'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square mt-1" viewBox="0 0 16 16">
                  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                  <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                </svg>
              </div>
            </button>
            <button
              className='mr-2 my-1 py-1 px-2 bg-red-600 hover:bg-red-900 hover:text-white rounded-md'
              onClick={() => handleDelete(dish._id)}
            >
              <div className='flex flex-nowrap'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash mt-1" viewBox="0 0 16 16">
                  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                  <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                </svg>
              </div>
            </button>
          </div>
        </footer>
      </div>
    </section>
  )
}
