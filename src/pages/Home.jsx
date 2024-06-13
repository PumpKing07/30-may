import React from 'react';
import styled from 'styled-components';
import gav from '../images/Gav.png';
import caat from '../images/cat.png';
import doog from '../images/dog.png';
import kot from '../images/cat2.png';
import Navbar from '../components/Navbar';
import fon from '../images/BGback1.png'
import yoyoo from '../images/yoyoyo.png'
import kon from '../images/b5.png'
import kck from '../images/b4.png'
// import foon from '../images/back2.png'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import first from '../images/1s.png'
import second from '../images/2s.png'
import third from '../images/3s.png'
import Slider from 'react-slick';
import pod from '../images/podval.png'
import vid from '../images/video.png'
import maps from '../images/maps.png'




const Wrapper = styled.div`
  background-image: url(${fon});
  background-size: cover;
`

const Gaav = styled.div`
  width: 707px;
  height: 771px;
  display: flex;
  margin: 0 auto;
`

const Caaat = styled.div`
  width: 123px;
  height: 168.34px;
  display: flex;
  margin: 1358px; 
  margin-top: -460px;
  position: fixed;
  position: absolute;
`

const Dooog = styled.div`
  width: 123px;
  height: 168.34px;
  margin: 1500px; 
  margin-top: -449px;
  position: fixed;
  position: absolute;
`

const Koot = styled.div`
  width: 123px;
  height: 168.34px;
  margin: 1650px; 
  margin-top: -429px;
  position: fixed;
  position: absolute;
`


const H1 = styled.div`
  color: #C1AB81;
  text-align: justify;
  font-size: 75px;
  font-weight: 300;
  padding-top: 300px;
  display: flex;
  position: absolute;
  margin-left: 150px;
`

const York = styled.div`
  background-color: #EFE9DD;
  display: flex;
  /* margin-block-start: 100px; */
  inline-size: -150px;
  justify-content: center;
  align-items: center;
  padding-top: 100px;
`


// const Background2 = styled.div`
//     background: url(${foon}) no-repeat;
//     background-color: #222220;
// `

const Kc = styled.div`
background-color: #C1AB81;
`


const Kon = styled.div`
  background-color: #EFE9DD;   
  
`

const A0 = styled.a`
  position: absolute;
  width: 220px;
  height: 219.22px;
  left: 162px;
  top: 3384px;
  display: flex;
`

const A9 = styled.a`
  position: absolute;
  right: 600px;
  top: 3770px;
`



const SimpleCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };



  return (
    <Slider {...settings}>
      <div>
        <img src={first} alt='slide-1' />
      </div>
      <div>
        <img src={second} alt='slide-2' />
      </div>
      <div>
        <img src={third} alt='slide-3' />
      </div>
    </Slider>
  );
};




const Backk = styled.div`
    color: #222220;
`




function Home() {
  return (
    <div>
      <Wrapper>
      <Navbar/>
     <H1>Самое лучшее -<br/>для животных</H1>
     <Gaav><img src= {gav} alt=""/></Gaav>
     <Caaat><img src= {caat} alt="" /></Caaat>
     <Dooog><img src={doog} alt="" /></Dooog>
     <Koot><img src={kot} alt="" /></Koot>
    </Wrapper>
    <York><img src={yoyoo} alt="" /></York>
    <Kc><img src={kck} alt="" /></Kc>
    <Kon>
      <img src={kon} alt="" /> 
    <A0 href="/vide"><img src={vid} alt="" /></A0>
    <A9 href="mapss"><img src={maps} alt="" /></A9>
    </Kon>
    <SimpleCarousel/>
    <Backk><img src={pod} alt="" /></Backk>
    </div>
  );
}

export default Home;