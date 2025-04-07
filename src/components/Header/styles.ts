import styled from 'styled-components'
import { cores } from '../../styles'

export const HeaderBar = styled.header`
  background-color: ${cores.bege};
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
