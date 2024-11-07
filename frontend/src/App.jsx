import Navbar from './components/shared/Navbar'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/auth/login'
import Signup from './components/auth/signup'
import Jobs from './components/Jobs'
import Browse from './components/Browse'

const appRouter = createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/login',
    element:<Login/>
  },
  {
    path:'/signup',
    element:<Signup/>
  },
  {
    path:'/jobs',
    element:<Jobs/>
  },
  {
    path:'/browse',
    element:<Browse/>
  }

])
function App() {

  return (
    <>
      <RouterProvider router = {appRouter}/>
    </>
  )
}

export default App
