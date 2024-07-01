import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import NotFound from './components/pages/NotFound.jsx'
import Home from './components/pages/Home.jsx'
import IniciarSesion from './components/pages/IniciarSesion.jsx'

const router = createBrowserRouter([
  {//Home
    path:"/",
    element:<Home/>,
    errorElement:<NotFound/>
  },
  {//IniciarSesion
    path: "/iniciarSesion",
    element: <IniciarSesion/>
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)