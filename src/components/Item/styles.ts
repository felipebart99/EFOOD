import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  background-color: ${cores.vermelho};
  max-width: 320px;
  height: 338px;
  margin-bottom: 40px;
  color: ${cores.branco};

  h3,
  p {
    padding: 5px;
  }
`
