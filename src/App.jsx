import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {
  const router = createBrowserRouter([
    {
      path: "/"
    },
  ])

  return (
    <>
    <RouterProvider router={router} />
    </>    
  )
}

export default App
