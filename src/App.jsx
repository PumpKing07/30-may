import React from 'react'
import Home from './pages/Home';
import Basket from './pages/Basket';
import fon from './images/BGback1.png';
import styled from 'styled-components';
import Block2 from './pages/Block2';
import Block3 from './pages/Block3';
import Block5 from './pages/Block5';
import Podval from './pages/Podval';

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
    <Block5/>
    <Podval/>
    </BackgroundImage>
    </div>
  )
}

export default App
