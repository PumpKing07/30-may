import React from 'react'
import styled from 'styled-components'
import yoyoo from '../images/yoyoyo.png'
import Home from '../pages/Home'

const York = styled.div`
  background-color: #EFE9DD;
  display: flex;
  margin-block-start: 100px;
  inline-size: -150px;
  justify-content: center;
  align-items: center;
  padding-top: 100px;
`


function Block2() {
  return (
    <div>

    <York><img src={yoyoo} alt="" /></York>
     
    </div>
  )
}

export default Block2
 