import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/home/Home'
import Submit from './pages/submit/Submit'
import Feed from './pages/feed/Feed'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/submit",
      element: <Submit />
    },
    {
      path: "/feed",
      element: <Feed />
    }
  ])

  return (
    <>
    <RouterProvider router={router} />
    </>    
  )
}

export default App
