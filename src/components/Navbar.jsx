import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
    height: 60px;
    background-color: grey;
`

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
`

const Left = styled.div`
    flex: 1;
`  
const Center = styled.div`
    flex: 1;
`
const Right = styled.div`
    flex: 1;
`
const SearchContainer = styled.div`
    
`


const Navbar = () => {
  return (
    <Container>
        <Wrapper/>
           
           <Left>Каталог</Left>
           <Center>Кабинет</Center>
           <Right>Корзина</Right>
      <Wrapper/>
    </Container>
  )
}


export default Navbar