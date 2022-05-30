import React from 'react'
import styled from 'styled-components'

import { BackgroundImage, MaxWidth, StyledButton } from 'components/global'
import { media } from 'utils/Media'

const IndexHeaderStyles = styled.header`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;

  .title {
    position: relative;
    z-index: 5;
    color: var(--white);
    font-weight: 700;
    p {
      font-weight: 400;
      font-size: 1.2rem;
      &:nth-child(1) {
        color: var(--main);
        font-weight: 700;
      }
    }
    h1 {
      @media ${media.ls} {
        font-size: ${props => props.theme.font.size.h3};
      }
      margin: 0.5rem 0;
      /* line-height: 2rem; */
      @media ${media.ls} {
      }
      span {
        display: inline-block;
        text-decoration: underline 3px var(--main);
        text-underline-offset: 0.25rem;
      }
    }
    a {
      margin-top: 1rem;
    }
  }
`
const IndexHeader = () => {
  const i = true
  return (
    <IndexHeaderStyles>
      <MaxWidth>
        <div className="title">
          <p>Hi, i'm Nick</p>
          <h1>
            I build <span>Websites</span> and other cool things for the web!
          </h1>
          <p>
            I’m a self-taught UI/UX designer and Front-end Developer based in
            London, UK.
          </p>
          <StyledButton text="Get in touch" to="/privacy" />
        </div>
      </MaxWidth>
      <BackgroundImage />
    </IndexHeaderStyles>
  )
}

export default IndexHeader
