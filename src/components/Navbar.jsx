import React from 'react'
import styled from 'styled-components'
import logo from './image/logo.png'
import SearchIcon from '@mui/icons-material/Search';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Basket from '../pages/Basket'
import Office from '../pages/Office';


const Container = styled.div`
    height: 60px;
    background-color: grey;
`


const Left = styled.div`
    flex: 1;
    text-align: center;
`  
const Center = styled.div`
    flex: 1;
    text-align: center;
`
const Right = styled.div`
    flex: 1;
    text-align: center;
`

const Wrapper = styled.div`
        padding: 10px 20px;
    display: flex ;
    justify-content: space-between;
`

const SearchContainre = styled.div`
   border: 1px solid lightgray;
   align-items: center;
   display: flex;
   padding: 5px;
`

const Input = styled.input`
    border: none;
`




const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>Каталог</Left>
           <Center>Кабинет</Center>
           <Center>
            <SearchContainre>
                <SearchIcon/> 
                <Input></Input>
            </SearchContainre>
           </Center>
           <Right>Корзина</Right>
        </Wrapper>
        <Router>
      <div>
          <Route path="/Basket">
            <Basket/>
          </Route>
          <Route path="/Office">
            <Office/>
          </Route>
      </div>
    </Router>
    <div>
        <div className="logo">
            <img src={logo} alt="" />
        </div>
    </div>
    </Container>
  )
}


export default Navbar
