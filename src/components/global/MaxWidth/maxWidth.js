import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const StyledMaxWidth = styled.section`
  width: 100%;
  .container-max {
    width: 90%;
    max-width: var(--maxWidth);
    margin: var(--auto);
  }
`
const MaxWidth = props => {
  const { children } = props
  return (
    <StyledMaxWidth>
      <div className="container-max">{children}</div>
    </StyledMaxWidth>
  )
}

MaxWidth.propTypes = {
  children: PropTypes.any,
}

export default MaxWidth
