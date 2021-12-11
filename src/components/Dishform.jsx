import useField from "../hooks/useField"
import { dishService } from "../services"
import { useDishDispatch } from "../context/dishContext"
import { useToasts } from 'react-toast-notifications'

export const Dishform = () => {
  const { setToggleFetch, setError, setErrorMessage, setDishes } = useDishDispatch()
  const { addToast } = useToasts()
  const { state, handleChange, resetState } = useField({ name: "", type: "", description: "" })
  const { name, type, description } = state

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

  const handleSubmit = async (e) => {
    e.preventDefault()
    const isValid = validate(state)
    if (!isValid) {
      setError(true)
      setErrorMessage("Missing some field")
      return
    }
    dishService.create(state)
      .then(response => {
        if (response.status === 200) {
          addToast("Dish created", { appearance: 'success', autoDismiss: true })
          resetState()
          setToggleFetch(true)
        }
      })
      .catch(e => addToast(e.message || 'Some error happened', { appearance: 'error', autoDismiss: true }))
  }


  return (
    <section className='flex justify-center mb-5'>
      <div>
        <form className='flex flex-col border-solid border-2 rounded-md border-black mt-5 shadow-xl'>
          <input
            id="name"
            className='pt-2 mx-2 mt-3 border-solid border-b-2 border-black rounded-md'
            type="text"
            value={name}
            placeholder=" Dish name"
            onChange={handleChange}
          />
          <select className='m-2 py-2 rounded-md bg-indigo-300  border-solid border-b-2 border-indigo-900' id="type" value={type} onChange={handleChange}>
            <option className='flex flex-col justify-center items-center' value="">-- type --</option>
            <option value="starter">starter</option>
            <option value="main">main</option>
            <option value="dessert">dessert</option>
          </select>
          <textarea
            id="description"
            className='pt-2 mx-2 mt-2 border-solid border-2 border-black rounded-md'
            value={description}
            placeholder=" Add a description"
            onChange={handleChange}
          />
          <button
            className='m-2 py-2 uppercase rounded-md bg-gradient-to-r from-indigo-300 to-indigo-600 border-solid border-2 border-indigo-900 hover:text-white'
            onClick={handleSubmit}>Add dish</button>
        </form>
      </div>
    </section>
  )
}
