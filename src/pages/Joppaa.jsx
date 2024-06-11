import React from 'react'
import jops from '../images/jops.png'
import styled from 'styled-components'
import foon2 from '../images/fon2.png'
import cad from '../images/7 (1).png'

const Joppa = styled.div`
  background-image: url(${foon2});
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
      font-size: 42px;
      margin-left: 400px;
    }

    a {
        margin-left: 100px;
        text-decoration: none;
        color: black;
        margin-top: 11px;
        
    }
    p {
      text-align: center;
      font-size: 16px;
    }
`

const Jops = styled.div`
  
`

function Joppaa () {
  return (

    <Joppa>
      <A1>
        <div className='products'>
            <a href="/home">Вернутся на главную</a>
            <h1>То, что рекомендуем мы</h1>
        </div>
        <p>Мы собрали каталог, который понравился многим <br/>
            людям и решили поделиться с вами!</p>
      </A1>
      <Jops><img src={cad} alt="" /></Jops>
    </Joppa>
  )
}

export default Joppaa
