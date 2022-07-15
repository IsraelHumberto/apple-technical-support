import React from 'react'
import styled from 'styled-components'

const CompWrapper = styled.div`
    max-width: 1100px;
    margin: 0 auto;
`

const Wrapper = ({children}) => {
  return (
    <CompWrapper>
        {children}
    </CompWrapper>
  )
}

export default Wrapper
