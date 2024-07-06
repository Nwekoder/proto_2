import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import Camera from './pages/Camera'
import Profile from './pages/Profile'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/home',
    element: <Home />
  },
  {
    path: '/camera',
    element: <Camera />
  },
  {
    path: '/profile',
    element: <Profile />
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
