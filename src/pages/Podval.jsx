import React from 'react'
import pod from '../images/podval.png'
import styled from 'styled-components'


const Backk = styled.div`
    color: #222220;
`


function Podval ()  {
  return (
    <Backk><img src={pod} alt="" /></Backk>
  )
}

export default Podval
