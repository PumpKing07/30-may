import React from 'react';
import styled from 'styled-components';
import gav from '../images/Gav.png';
import caat from '../images/cat.png';
import doog from '../images/dog.png';
import kot from '../images/cat2.png';
import Navbar from '../components/Navbar';



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
  position:fixed;
  position: absolute;
`

const Dooog = styled.div`
  width: 123px;
  height: 168.34px;

  margin: 1500px; 
  margin-top: -449px;
  position: fixed;
  position: absolute;
`

const Koot = styled.div`
  width: 123px;
  height: 168.34px;
  margin: 1650px; 
  margin-top: -429px;
  position: fixed;
  position: absolute;
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
  padding-top: 300px;
  display: flex;
  position: absolute;
  margin-left: 150px;
`
const Linka = styled.a`
  text-decoration: none;
`


function Home() {
  return (
    <div>
     <Linka href="/catalog">
           <Logo>Мир <br/>животных </Logo>
     </Linka>


     <H1>Самое лучшее -<br/>для животных</H1>
     <Gaav><img src= {gav} alt=""/></Gaav>
     <Caaat><img src= {caat} alt="" /></Caaat>
     <Dooog><img src={doog} alt="" /></Dooog>
     <Koot><img src={kot} alt="" /></Koot>
     <Navbar/>
    </div>
  );
}

export default Home;