import React from 'react';
import styled from 'styled-components';
import fon from '../images/BGback1.png'
import gav from '../images/Gav.png'
import caat from '../images/cat.png'
import doog from '../images/dog.png'
import kot from '../images/cat2.png'




const BackgroundImage = styled.div`
  background: url(${fon});
`
const Gaav = styled.div`
  width: 707px;
  height: 771px;
  display: block;
  margin: 0 auto; 
`

const Caaat = styled.div`
  width: 123px;
  height: 168.34px;
  display: block;
  margin: 1358px; 
 margin-top: -460px;
`

const Dooog = styled.div`
  width: 123px;
  height: 168.34px;
  display: block;
  margin: 1517px; 
  margin-top: -1516px;
`

const Koot = styled.div`
  width: 123px;
  height: 168.34px;
  display: block;
  margin: 1676px; 
  margin-top: -1660px;
`


const Left = styled.div`
    flex: 1;
    text-align: left;
    color: #C1AB81;
`  
const Logo = styled.div`
    flex: 1;
    text-align: center;
    color: #C1AB81;
`
const Right = styled.div`
    flex: 1;
    text-align: right;
    color: #C1AB81;
`
const H1 = styled.div`
  color: #C1AB81;
`

const Button = styled.div`
  color: #C1AB81;
`


function Home() {
  return (
    <BackgroundImage >
     <Left>Главная Каталог Продукты Помощь</Left>
     <Logo>Мир <br/>животных </Logo>
     <Right>Войти Корзина Контакты </Right>
     <H1>Самое лучшее -<br/>для животных</H1>
     <Gaav><img src= {gav} alt=""/></Gaav>
     <Caaat><img src= {caat} alt="" /></Caaat>
     <Dooog><img src={doog} alt="" /></Dooog>
     <Koot><img src={kot} alt="" /></Koot>
     <Button>о нас</Button>
    </BackgroundImage>
  );
}

export default Home;