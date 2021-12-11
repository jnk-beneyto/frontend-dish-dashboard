import { useState } from "react"

const useField = (initialState = {}) => {
  const [state, setState] = useState(initialState)

  const handleChange = (e) => {
    setState({ ...state, [e.target.id]: e.target.value })
  }

  const resetState = () => {
    setState(initialState)
  }

  return {
    state,
    handleChange,
    resetState
  }
}

export default useField

