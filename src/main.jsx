import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from "./App"
import Submit from './pages/submit/Submit'
import Feed from './pages/feed/Feed'
import SignUp from './pages/signUp/SignUp'
import SignIn from './pages/signIn/SignIn'
import Profile from './pages/profile/Profile'
import About from './components/about/About'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
