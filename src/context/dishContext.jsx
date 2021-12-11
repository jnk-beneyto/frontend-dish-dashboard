import React, { createContext, useContext, useReducer } from 'react'
const DishContextState = createContext()
const DishContextDispatch = createContext()

const ACTIONS = {
  SET_MODAL: 'SET_MODAL',
  SET_LOADING: 'SET_LOADING',
  SET_FETCH_DATA: 'SET_FETCH_DATA',
  SET_DATA: 'SET_DATA',
  SET_DATA_FIXED: 'SET_DATA_FIXED',
  SET_DISH: 'SET_DISH',
  SET_SEARCH: 'SET_SEARCH'
}

const initialState = {
  showModal: false,
  isLoading: true,
  fetchData: true,
  dishes: [],
  dishesFixed: [],
  dish: { name: "", type: "", description: "" },
  search: ""
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.SET_MODAL:
      return { ...state, showModal: action.value }
    case ACTIONS.SET_LOADING:
      return { ...state, isLoading: action.value }
    case ACTIONS.SET_FETCH_DATA:
      return { ...state, fetchData: action.value }
    case ACTIONS.SET_DATA:
      return { ...state, dishes: action.value }
    case ACTIONS.SET_DATA_FIXED:
      return { ...state, dishesFixed: action.value }
    case ACTIONS.SET_DISH:
      const { id, value } = action
      return { ...state, dish: { ...state.dish, [id]: value } }
    case ACTIONS.SET_SEARCH:
      return { ...state, search: action.value }
    default:
      return state
  }
}

export const DishProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <DishContextState.Provider value={state}>
      <DishContextDispatch.Provider value={dispatch}>
        {children}
      </DishContextDispatch.Provider>
    </DishContextState.Provider>
  )
}

export const useDishDispatch = () => {
  const dispatch = useContext(DishContextDispatch)

  const actions = {
    setShowModal: (value) => dispatch({ type: ACTIONS.SET_MODAL, value }),
    setLoading: (value) => dispatch({ type: ACTIONS.SET_LOADING, value }),
    setToggleFetch: (value) => dispatch({ type: ACTIONS.SET_FETCH_DATA, value }),
    setDishes: (value) => dispatch({ type: ACTIONS.SET_DATA, value }),
    setDishesFixed: (value) => dispatch({ type: ACTIONS.SET_DATA_FIXED, value }),
    setDish: (id, value) => dispatch({ type: ACTIONS.SET_DISH, id, value }),
    setSearch: (value) => dispatch({ type: ACTIONS.SET_SEARCH, value }),
  }
  return { ...actions }
}

export const useDishState = () => {
  return useContext(DishContextState)
}