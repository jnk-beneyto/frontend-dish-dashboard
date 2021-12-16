import React from 'react'
import {render} from '@testing-library/react'
import { ToastProvider } from 'react-toast-notifications'
import { DishProvider } from '../context/dishContext'

const AllTheProviders = ({children}) => {
  return (
    <ToastProvider placement="top-right">
    <DishProvider>
    {children}
    </DishProvider>
  </ToastProvider>
  )
}

const customRender = (ui, options) =>
  render(ui, {wrapper: AllTheProviders, ...options})

// re-export everything
export * from '@testing-library/react'

// override render method
export {customRender as render}