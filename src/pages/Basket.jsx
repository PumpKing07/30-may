import React from 'react';
import styled from 'styled-components';
import fon from '../images/BGback1.png';

const Left = styled.div`
  color: #C1AB81;
  flex: 1;
`
const Center = styled.div`
  flex: 1;
  color: #C1AB81;
`
const Right = styled.div`
  flex: 0;
  color: #C1AB81;
`

// const BackgroundImage = styled.div`
//   background: url(${fon});
// `

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
`

const Logo = styled.div`
  font-weight: bold;
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