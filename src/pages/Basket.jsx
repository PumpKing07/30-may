import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const Left = styled.div`
  color: #C1AB81;
  flex: 1;
`

const Right = styled.div`
  flex: 0;
  color: #C1AB81;
`

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
`

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-right: 30px;
  display: inline-flex;
`

function Basket() {
  return (
      <Wrapper>
      <Left>
         <MenuItem>Главная</MenuItem>
         <MenuItem>Каталог</MenuItem>
         <MenuItem>Продукты</MenuItem>
         <MenuItem>Помощь</MenuItem>
      </Left>
      <Right>
        <MenuItem>Корзина</MenuItem>
      </Right>
      </Wrapper>
  );
}

export default Basket;