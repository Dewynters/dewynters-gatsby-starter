import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import { StaticImage } from 'gatsby-plugin-image'
import { media } from 'utils/Media'



const ButtonStyles = styled.button`
 
`
const StyledButton = ({
  text,
  external,
  internal,
  download,
  href,
  to,
  ...props
}) => {
  if (external) {
    return (
      <ButtonStyles>
        <a href={href} target="_blank" rel="noreferrer">
          <span>{text}</span>
        </a>
      </ButtonStyles>
    )
  }
  if (internal) {
    return (
      <ButtonStyles>
        <Link to={to}>
          <span>{text}</span>
        </Link>
      </ButtonStyles>
    )
  }
  if (download) {
    return (
      <ButtonStyles>
        <a href={to} download>
          <span>{text}</span>
        </a>
      </ButtonStyles>
    )
  }
  return (
    <ButtonStyles>
      <a href={to} {...props}>
        <span>{text}</span>
      </a>
    </ButtonStyles>
  )
}

StyledButton.propTypes = {
  download: PropTypes.string,
  external: PropTypes.bool,
  href: PropTypes.string,
  internal: PropTypes.bool,
  text: PropTypes.string,
  to: PropTypes.string,
}

export default StyledButton
