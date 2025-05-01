import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <h2>Money</h2>
    },
  ])

  return (
    <>
    <RouterProvider router={router} />
    </>    
  )
}

export default App
