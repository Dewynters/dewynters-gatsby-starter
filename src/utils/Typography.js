import { css } from 'styled-components'

import GothamBookWOFF2 from 'utils/fonts/GothamBook.woff2'
import GothamBookWOFF from 'utils/fonts/GothamBook.woff'

const Typography = css`
  @font-face {
    font-family: 'Gotham';
    src: url(${GothamBookWOFF2}) format('woff2'),
      url(${GothamBookWOFF}) format('woff');
    font-weight: 400;
    font-style: normal;
  }
`

export default Typography
