import React from 'react'
import styled from 'styled-components'
import yoyoo from '../images/yoyoyo.png'

const York = styled.div`
    background-color: #fae8c7;
    display: flex;
    margin-block-start: 100px;
    inline-size: -150px;
`


function Block2() {
  return (
    <div>
     <York><img src={yoyoo} alt="" /></York>
    </div>
  )
}

export default Block2
