import { useEffect } from 'react'
import { useToasts } from 'react-toast-notifications'
import { dishService } from '../services'
import { useDishDispatch, useDishState } from '../context/dishContext'

export const useFetch = () => {
  const { dishes, error, isLoading, dishesFixed, search, fetchData } = useDishState()
  const { setToggleFetch, setDishes, setLoading, setDishesFixed } = useDishDispatch()
  const { addToast } = useToasts()

  useEffect(() => {

    setLoading(true)
    dishService.getAll()
      .then(data => {
        setLoading(false)
        setDishes(data.message)
        setDishesFixed(data.message)
        setToggleFetch(false)
      })
      .catch(e => addToast(e.message || 'Some error happened', { appearance: 'error', autoDismiss: true }))

  }, [fetchData])

  useEffect(() => {
    if (search !== '') {
      const filteredDishes = dishesFixed.filter(dish => dish.name.toLowerCase().includes(search.toLowerCase()))
      setDishes(filteredDishes)
    } else {
      setDishes(dishesFixed)
    }
  }, [search])

  return {
    dishes, error, isLoading
  }

}