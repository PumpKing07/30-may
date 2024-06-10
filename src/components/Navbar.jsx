import React from 'react'
import styled from 'styled-components'



const Container = styled.div`
    height: 60px;
    background-color: grey;
`

const H1 = styled.div`
  color: #C1AB81;
`

const Lord = styled.a`
  text-decoration: none;
`



const Navbar = () => {
  return (
    <Container>
       <div className='menu'>
        <a href="">Главная</a>
        <a href="">Каталог</a>
        <a href="">Продукты</a>
        <Lord href="/help">Помощь</Lord>
        <H1>Мир <br/> животных</H1>
        <a href="">Корзина</a>
       </div>
    </Container>
  )
}


export default Navbar
