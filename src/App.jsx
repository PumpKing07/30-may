import React from 'react'
import Navbar from './components/Navbar';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Joppaa from './pages/Joppaa';
import Help from './pages/Help';


const router = createBrowserRouter([, {
  path: '/',
  element: <Navbar/>
},

{
    path: '/catalog',
    element: <Joppaa />,

  },
 {
  path: '/help',
  element: <Help/>
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
