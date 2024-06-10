import React from 'react'
import Home from './pages/Home';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Joppaa from './pages/Joppaa';
import Help from './pages/Help';

const router = createBrowserRouter([, {
  path: '/',
  element: <Home />
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
