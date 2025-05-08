import styled from 'styled-components'
import { cores } from '../../styles'

export const BannerSection = styled.div`
  background-size: cover;
  background-position: center;
  height: 300px;
  color: ${cores.branco};
  position: relative;
  font-size: 32px;

  h2 {
    position: absolute;
    top: 20px;
    font-weight: 100;
    font-size: 32px;
  }
  h1 {
    position: absolute;
    bottom: 20px;
    font-weight: 900;
    font-size: 32px;
  }
`
