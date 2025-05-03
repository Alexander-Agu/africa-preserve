import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/home/Home'
import Submit from './pages/submit/Submit'
import Feed from './pages/feed/Feed'
import SignUp from './pages/signUp/SignUp'
import SignIn from './pages/signIn/SignIn'
import Profile from './pages/profile/Profile'

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
    },
    {
      path: "/signup",
      element: <SignUp />
    },
    {
      path: "signin",
      element: <SignIn />
    },
    {
      path: "/profile/:profileId",
      element: <Profile />
    }
  ])

  return (
    <>
    <RouterProvider router={router} />
    </>    
  )
}

export default App
