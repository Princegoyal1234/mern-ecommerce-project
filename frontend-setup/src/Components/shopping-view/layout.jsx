import React from 'react'
import { Outlet } from 'react-router-dom'
import ShoppingHeader from './header'
const layout = () => {
  return (
    <div>
      <ShoppingHeader />
      <Outlet />
    </div>
  )
}

export default layout
