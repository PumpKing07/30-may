import React from 'react'
import styled from 'styled-components'
import bask from '../images/basket.png'
import smal from '../images/smal.png'
import zak from '../images/zakaz.png'
import yell from '../images/yellow.png'


const Wrapper = styled.div`
  background-image: url(${bask});
  height: 953px;
`



const A1 = styled.a`
    text-align: left;
    padding: 50px 20px;
    margin-left: 100px;
    margin-top: 200px;
    
    .products {
        display: flex;
        
    }
    h1 {
      text-align: center;
      font-size: 60px;
      margin-left: 490px;
    }

    a {
        margin-left: 100px;
        text-decoration: none;
        color: black;
        margin-top: 11px;
        
    }
    p {
      text-align: center;
      font-size: 40px;
      margin-right: 100px;
    }
   
`

const A0 = styled.div`
  margin-left: 800px;
`


const A3 = styled.div`
margin-top: -300px;
`



const A2 = styled.a`
position: absolute;
width: 400px;
height: 60px;
left: 600px;
top: 800px;
margin-left: 800px;
`



const Basket = () => {
  return (
    <Wrapper>
      <A1>
        <div className='products'>
            <a href="/home">Вернутся на главную</a>     
            <h1>Корзина</h1>
        </div>
        <p>На данный момент корзина пуста</p>
        </A1>
        <A0><img src={smal} alt="" /></A0>
        <A3><img src={yell} alt="" /></A3>
        <A2 href=""><img src={zak} alt="" /></A2>
      
    </Wrapper>
  )
}

export default Basket
