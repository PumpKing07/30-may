import React from 'react'
import styled from 'styled-components'




const Container = styled.div`
  height: 150px;
  display: flex;
  justify-content: space-between;
  padding-top: 20px;
`

const H1 = styled.div`
  color: #C1AB81;
  text-align: center;
  flex: 1;
  display: block;
  font-size: 40px;
  font-weight: 200;
  margin-left: 110px;
  
`


const A1 = styled.a`
  color: #C1AB81;
  text-decoration: none;
  padding: 35px 35px;

`

const A2 = styled.a`
  color: #C1AB81;
  text-decoration: none;
  padding: 35px 35px;

`

const A3 = styled.a`
  color: #C1AB81;
  text-decoration: none;
  padding: 35px 35px;
`

const A4 = styled.a`
  color: #C1AB81;
  text-decoration: none;
  padding: 35px 35px;
`

const A5 = styled.a`
  color: #C1AB81;
  text-decoration: none; 
  padding: 35px 35px;
  box-shadow: none;
  margin-left: 1100px;
`


const Navbar = () => {
  return (
    <Container>
      <div className='Menu'>
          <A1 href="">Главная</A1>
          <A2 href="/catalog">Каталог</A2>
          <A3 href="/products">Продукты</A3>
          <A4 href="/help">Помощь</A4>
        <A5 href="/basket">Корзина</A5>
        <H1>Мир <br/> животных</H1>
      </div>
    </Container>

  )
}


export default Navbar
