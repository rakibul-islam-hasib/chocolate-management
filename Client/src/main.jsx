import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import AddCoffee from './components/AddCoffee.jsx'
import Coffees from './components/Coffees.jsx'
import Update from './components/Update.jsx'
import Details from './components/Details.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {path :'/' , element : <AddCoffee /> }, 
      {path : '/coffees' , element : <Coffees /> , loader : ()=> fetch('http://localhost:5000/coffees')}, 
      {path: '/coffees/:id', element: <Update /> , loader : ({params})=> fetch(`http://localhost:5000/coffees/${params.id}`)},
      {path: '/coffees/details/:id', element: <Details /> , loader : ({params})=> fetch(`http://localhost:5000/coffees/${params.id}`)}
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
