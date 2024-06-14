import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Joppaa from './pages/Joppaa';
import Help from './pages/Help';
import Home from './pages/Home';
import Products from './pages/Products';
import ReactPlayer from 'react-player';
import styled from 'styled-components';
import Basket from './pages/Basket';
import Tabar from './pages/Tabar';


 

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
  element: <Basket/>
 },
 {
  path: '/home',
  element: <Home/>
 },
 {
  path: '/lejj',
  element: <Tabar/>
 },
{
  path: '/vide',
  element: < ReactPlayer  url = 'https://www.youtube.com/watch?v=TFTf98E94fY' />
},
{
  path: '/mapss',
  element: <var a = 'HTTPS://yandex.ru/maps/213/moscow/house/sevastopolskiy_prospekt_5a/Z04YcAZhTEUHQFtvfXp4cH1mYg==/?ll=37.611500%2C55.691156&z=16'/>
},
]);


const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
