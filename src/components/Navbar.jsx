import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Basket from '../pages/Basket'
import Office from '../pages/Office';


const Container = styled.div`
    height: 60px;
    background-color: grey;
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
       
    </Container>
  )
}


export default Navbar
