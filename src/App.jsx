import React from 'react'
import Home from './pages/Home';
import Basket from './pages/Basket';
import fon from './images/BGback1.png';
import styled from 'styled-components';
import Block2 from './pages/Block2';
import Block3 from './pages/Block3';
import Block4 from './pages/Block4';

const BackgroundImage = styled.div`
  background: url(${fon}) no-repeat;
`
const App = () => {
  return (
    <div>
    <BackgroundImage>
    <Basket/>
    <Home/>
    <Block2/>
    <Block3/>
    <Block4/>
    </BackgroundImage>
    </div>
  )
}

export default App
