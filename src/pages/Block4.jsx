import React from 'react'
import kck from '../images/kckc.png'
import styled from 'styled-components'
import foon from '../images/back2.png'

const Background2 = styled.div`
    background: url(${foon}) no-repeat;
    background-color: #222220;
    padding: 786px  725px;
    
`

const Kc = styled.div`
    

`

function Block4 () {
  return (
    <div>
      <Background2>
        <Kc><img src={kck} alt="" /></Kc>
      </Background2>
    </div>
  )
}

export default Block4
