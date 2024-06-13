import React from 'react'


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
      font-size: 40px;
    }
`



const Basket = () => {
  return (
    <A1>
        <div className='products'>
            <a href="/home">Вернутся на главную</a>
            <h1>Каталог</h1>
        </div>
        <p>На данный момент корзина пуста</p>
      </A1>

  )
}

export default Basket
