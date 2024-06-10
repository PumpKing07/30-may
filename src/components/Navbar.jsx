import React from 'react'
import styled from 'styled-components'
import fon from '../images/BGback1.png'



const Container = styled.div`
  height: 150px;
  display: flex;
  justify-content: space-between;
  background: url(${fon}) no-repeat;
`

const H1 = styled.div`
  color: #C1AB81;
  text-align: center;
`


const A1 = styled.a`
  color: #C1AB81;
  text-decoration: none;
  padding: 20px 30px;
  margin-top: 20px;
`

const A2 = styled.a`
  color: #C1AB81;
  text-decoration: none;
  margin-top: 20px;
  padding: 20px 30px;

`

const A3 = styled.a`
  color: #C1AB81;
  text-decoration: none;
  margin-top: 20px;
  padding: 30px 30px;
`

const A4 = styled.a`
  color: #C1AB81;
  text-decoration: none;
  margin-top: 20px;
  padding: 40px 30px;
`

const A5 = styled.a`
  color: #C1AB81;
  text-decoration: none; 
  margin-top: 20px;
  padding: 50px 30px;
`



const Navbar = () => {
  return (
    <Container>
       <div className='Menu'>
        <A1 href="">Главная</A1>
        <A2 href="">Каталог</A2>
        <A3 href="/catalog">Продукты</A3>
        <A4 href="/help">Помощь</A4>
        <H1>Мир <br/> животных</H1>
        <A5 href="">Корзина</A5>
       </div>
    </Container>
  )
}


export default Navbar
