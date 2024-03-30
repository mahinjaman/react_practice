import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Foods from './components/Foods/Foods.jsx';
import Home from './components/Home/Home.jsx';
import Contact from './components/Contact/Contact.jsx';
import About from './About/About.jsx';
import FoodDetails from './components/foodDetails/FoodDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      { 
        path: "/foods",
        loader: () => fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=A'),
        element:<Foods></Foods>
      },
      {
        path: "/contact",
        element: <Contact></Contact>
      },
      {
        path: "/about",
        element: <About></About>
      },
      {
        path: '/details/:idMeal',
        loader: (params) => fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.params.idMeal}`),
        element: <FoodDetails></FoodDetails>
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />

  </React.StrictMode>,
)
