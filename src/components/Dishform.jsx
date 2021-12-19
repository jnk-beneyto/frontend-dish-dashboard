import React from 'react'
import { useEffect } from 'react'
import { useToasts } from 'react-toast-notifications'
import { dishService } from '../services'
import { useDishDispatch, useDishState } from '../context/dishContext'

export const Dishform = () => {
  const { editMode, dish } = useDishState()
  const { setToggleFetch, setDish, setEditMode, resetDish } = useDishDispatch()
  const { addToast } = useToasts()
  const { name, type, description } = dish

  useEffect(() => {
    if (editMode) {
      setDish(dish)
    }
  }, [editMode, dish])

  const handleChange = (e) => {
    const { id, value } = e.target
    setDish({ ...dish, [id]: value })
  }

  const validate = (dish) => {
    if (
      dish.name.trim() === "" ||
      dish.type.trim() === "" ||
      dish.description.trim() === ""
    ) {
      return false
    }
    return true
  }

  const handleCancel = () => {
    resetDish()
    setEditMode(false)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const isValid = validate(dish)
    if (!isValid) {
      addToast('Missing some field', { appearance: 'error', autoDismiss: true })
      return
    }

    if (editMode) {
      dishService.update(dish._id, dish)
        .then(response => {
          if (response.status === 200) {
            addToast("Dish edited", { appearance: 'success', autoDismiss: true })
            setEditMode(false)
            resetDish()
            setToggleFetch(true)
          }
        })
        .catch(e => addToast(e.message || 'Some error happened', { appearance: 'error', autoDismiss: true }))


    } else {
      dishService.create(dish)
        .then(response => {
          if (response.status === 200) {
            addToast("Dish created", { appearance: 'success', autoDismiss: true })
            resetDish()
            setToggleFetch(true)
          }
        })
        .catch(e => addToast(e.message || 'Some error happened', { appearance: 'error', autoDismiss: true }))
    }
  }


  return (
    <section className='flex justify-center mb-5'>
      <div>
        <form className='flex flex-col border-solid border-2 rounded-md border-black mt-5 shadow-xl'>
          <input
            id="name"
            className='pt-2 pl-2 mx-2 mt-3 border-solid border-2 border-gray rounded-md'
            type="text"
            value={name}
            placeholder="Dish name"
            onChange={handleChange}
          />
          <select className='m-2 py-2 pl-2 rounded-md bg-blue-300 border-solid border-gray border-blue-900' id="type" value={type} onChange={handleChange}>
            <option className='flex flex-col justify-center items-center' value="">-- type --</option>
            <option value="starter">starter</option>
            <option value="main">main</option>
            <option value="dessert">dessert</option>
          </select>
          <textarea
            id="description"
            className='pt-2 pl-2 mx-2 border-solid border-2 border-gray rounded-md'
            value={description}
            placeholder="Add a description"
            onChange={handleChange}
          />
          <div className='flex justify-center'>
            {editMode && <button
              className={`m-2 py-2 w-full uppercase rounded-md bg-red-300 border-solid border-2 border-blue-900 hover:text-white`}
              onClick={handleCancel}>Cancel</button>}
            <button
              className={`m-2 py-2 w-full uppercase rounded-md ${editMode ? 'bg-green-300' : 'bg-gradient-to-r from-blue-300 to-blue-600'} border-solid border-2 border-blue-900 hover:text-white`}
              onClick={handleSubmit}>{editMode ? 'Edit' : 'Add'} dish</button>
          </div>
        </form>
      </div>
    </section >
  )
}
