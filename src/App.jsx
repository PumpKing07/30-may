import React from 'react'
import Navbar from './components/Navbar';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Joppaa from './pages/Joppaa';
import Help from './pages/Help';
import Home from './pages/Home';
import Products from './pages/Products';


const router = createBrowserRouter([, {
  path: '/',
  element: <Home/>
},


{
    path: '/catalog',
    element: <Joppaa />,

  },
{
  path: '/products',
  element: <Products/>
},


 {
  path: '/help',
  element: <Help/>
 },
 {
  path: '/basket',
  element: <Help/>
 },
 {
  path: '/home',
  element: <Home/>
 }
]);




const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
