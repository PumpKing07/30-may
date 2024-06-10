import React from 'react'
import styled from 'styled-components'
import helpp from '../images/help.png'


const Heelp = styled.div`
    color: #222220;
`


function Help () {
  return (
    <Heelp><img src={helpp} alt="" /></Heelp>
  )
}


export default Help
