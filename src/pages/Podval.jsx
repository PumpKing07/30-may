import React from 'react'
import pod from '../images/podval.png'
import styled from 'styled-components'


const Backk = styled.div`
    position: absolute;
width: 1920px;
height: 404px;
left: 0px;
top: 5088px;

`


function Podval ()  {
  return (
    <Backk><img src={pod} alt="" /></Backk>
  )
}

export default Podval
