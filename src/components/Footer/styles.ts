import styled from 'styled-components'
import { cores } from '../../styles'

export const Rodape = styled.footer`
  background-color: ${cores.bege};
  height: 298px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    display: block;
    margin: 0 auto;
  }
  div {
    display: flex;
    flex-direction: column;
    justify-content: center; /* opcional: centraliza horizontalmente */
    gap: 30px;
    padding: 40px 0 60px 0;
  }

  p {
    font-size: 10px;
    font-weight: 400;
  }
`
