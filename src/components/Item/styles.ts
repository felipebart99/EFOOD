import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  background-color: ${cores.vermelho};
  max-width: 320px;
  height: 338px;
  margin-bottom: 40px;
  color: ${cores.branco};
  display: flex;
  flex-direction: column;
  align-items: center;

  h3,
  p {
    padding: 5px;
  }
  p {
    line-height: 22px;
  }
  button {
    width: 95%;
    font-size: 14px;
    font-weight: 700;
    background-color: ${cores.bege};
    color: ${cores.vermelho};
    border: none;
    height: 24px;
    cursor: pointer;
  }
  div {
    padding-left: 10px;
  }
  img {
    width: 304px;
    height: 167px;
    margin-top: 8px;
  }
`
