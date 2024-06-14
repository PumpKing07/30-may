import React from 'react'
import styled from 'styled-components'
import products from '../images/prod.png'
import prod from '../images/1.png'

const Wrapper = styled.div`
    background-image: url(${products}) ;
    background-size: cover;
    background-position: center;
    background-position: 50% 15%;
    height: 953px;

`



const PRod = styled.div`
    margin-left: 160px;
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
        margin-left: 500px;
        font-weight: 400;
    }

    a {
        margin-left: 100px;
        text-decoration: none;
        color: black;
        margin-top: 11px;
    }
`

function Products() {
  return (
    <Wrapper>
        <A1>
            <div className='products'>
                <a href="/home">Вернутся на главную</a>
                <h1>Продукты</h1>
                
            </div>
        </A1>
        <PRod><img src={prod} alt="" /></PRod>
    </Wrapper>
  )
}

export default Products
 