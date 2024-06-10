import React from 'react'
import jops from '../images/jops.png'
import styled from 'styled-components'


const Joppa = styled.div`
    color: #FFFDE2;
`



function Joppaa () {
  return (
    <a href="/">
        <Joppa><img src={jops} alt="" /></Joppa>
        </a>
  )
}

export default Joppaa
