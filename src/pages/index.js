import React from 'react'
import styled from 'styled-components'
import Layout from 'utils/Layout'
import { StaticImage } from 'gatsby-plugin-image'

const BodyStyles = styled.div`
  width: 100%;
  height: 100vh;
  background-color: var(--black);
  display: flex;
  align-items: center;
  section {
    display: flex;
    text-align: center;
    justify-content: center;
    flex-direction: column;
    max-width: var(--maxWidth);
    width: 90%;
    margin: var(--auto);
    h1 {
      color: var(--white);
      font-size: clamp(1rem, 0.1471rem + 4.2647vw, 2.8125rem);
    }
    .gatsby-image-wrapper {
      width: 60%;
      margin: 0 auto;
    }
  }
`
const IndexPage = () => {
  return (
    <Layout>
      <BodyStyles>
        <section>
          <h1>Dewynters Gatsby Starter</h1>
          <StaticImage src="../images/Dewynters-Share.jpg" alt="" />
        </section>
      </BodyStyles>
    </Layout>
  )
}

export default IndexPage
