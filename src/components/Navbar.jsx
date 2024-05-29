import React from "react";
import './App.css'
// import LOGO from './image/LOGO.svg'

const Navbar = () => {
    return (
        <div className="navbar-main">
            <ul>
                <li><a href="">Каталог</a></li>
                <li><a href="">Кабинет</a></li>
                <li><a href="">Избанное</a></li>  
                <li><a href="">Корзина</a></li>
            </ul>
                
            {/* <div className="LOGO">
             <img src={LOGO} alt="" />
            </div> */}
            <div className="navbar">
            <ul>
                <li><a href="">Качество продуктов</a></li>
                <li><a href="">Лёгкий закакз</a></li>
                <li><a href="">Доставка до двери</a></li>  
                <li><a href="">Выбор покупателя</a></li>
            </ul>
            </div>
        </div>
          
    )
}


export default Navbar
