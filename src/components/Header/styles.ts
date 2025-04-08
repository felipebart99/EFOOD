import styled from 'styled-components'
import fundo from '../../assets/images/fundo.svg'

export const HeaderBar = styled.header`
  background-image: url(${fundo});
  background-size: cover;
  background-position: center;
  height: 250px;
  text-align: center;

  img {
    display: block;
    margin: 0 auto;
    padding: 40px 0 60px 0;
  }

  h1 {
    font-size: 36px;
    font-weight: 900;
  }
`
