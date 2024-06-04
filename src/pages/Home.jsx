import React from 'react';
import styled from 'styled-components';
import gav from '../images/Gav.png';
import caat from '../images/cat.png';
import doog from '../images/dog.png';
import kot from '../images/cat2.png';



const Menu = styled.button`
  justify-content: space-around;
  grid-gap: 30px;
  width: 300;
  height: 400; 
  font-size: 16px;
  text-transform: uppercase;
  list-style-position: none;
  color: #C1AB81;
`


const Gaav = styled.div`
  width: 707px;
  height: 771px;
  display: flex;
  margin: 0 auto;
`

const Caaat = styled.div`
  width: 123px;
  height: 168.34px;
  display: flex;
  margin: 1358px; 
 margin-top: -460px;
`

const Dooog = styled.div`
  width: 123px;
  height: 168.34px;

  margin: 1517px; 
  margin-top: -1516px;
`

const Koot = styled.div`
  width: 123px;
  height: 168.34px;
  margin: 1676px; 
  margin-top: -1660px;
`

const Logo = styled.div`
    flex: 1;
    text-align: center;
    display: block;
    color: #C1AB81;
    font-size: 40px;
    font-weight: lighter;
`

const H1 = styled.div`
  color: #C1AB81;
  text-align: justify;
  font-size: 75px;
  font-weight: 300;
`



function Home() {
  return (
    <div>
     <Logo>Мир <br/>животных </Logo>
     <H1>Самое лучшее -<br/>для животных</H1>
     <Gaav><img src= {gav} alt=""/></Gaav>
     <Caaat><img src= {caat} alt="" /></Caaat>
     <Dooog><img src={doog} alt="" /></Dooog>
     <Koot><img src={kot} alt="" /></Koot>
     <Menu>о нас</Menu>
    </div>
  );
}

export default Home;