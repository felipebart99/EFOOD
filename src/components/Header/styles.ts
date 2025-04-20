import styled from 'styled-components'
import fundo from '../../assets/images/fundo.svg'

export const HeaderBar = styled.header`
  background-image: url(${fundo});
  background-size: contain;
  background-position: center;
  height: 384px;
  text-align: center;

  img {
    display: block;
    margin: 0 auto;
    padding: 40px 0 60px 0;
  }

  h1 {
    font-size: 36px;
    font-weight: 900;
    height: 84px;
    padding-top: 105px;
    margin-bottom: 40px;
  }
`
