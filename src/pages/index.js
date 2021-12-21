import Layout from 'components/global/layout'
import React from 'react'
import styled from 'styled-components'

const BodyStyles = styled.div`
  width: 100%;
  section {
    width: 90%;
    margin: var(--auto);
  }
`
const IndexPage = () => {
  return (
    <Layout>
      <BodyStyles>
        <section>
          <h1>Dewynters Gatsby Starter</h1>
        </section>
      </BodyStyles>
    </Layout>
  )
}

export default IndexPage
