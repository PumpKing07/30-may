import React from 'react'
import Home from './pages/Home';
import Basket from './pages/Basket';
import fon from './images/BGback1.png';
import styled from 'styled-components';

const BackgroundImage = styled.div`
  background: url(${fon});
`
const App = () => {
  return (
    <div>
    <BackgroundImage>
    <Basket/>
    <Home/>
    </BackgroundImage>
    </div>
  )
}


export default App
