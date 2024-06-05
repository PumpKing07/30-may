import React from 'react'
import reec from '../images/rec.png'
import styled from 'styled-components'

const Jora = styled.div`
    background-color: #fae8c7;
    display: flex;
`

function Block3 () {
  return (
    <div>
      <Jora><img src={reec} alt="" /></Jora>
      {/* <BIg><img src="" alt="" /></BIg> */}
    </div>
  )
}

export default Block3
