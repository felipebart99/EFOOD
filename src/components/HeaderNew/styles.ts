import styled from 'styled-components'
import fundo from '../../assets/images/fundo.svg'
import { cores } from '../../styles'
import { Link } from 'react-router-dom'

export const HeaderBar = styled.header`
  background-image: url(${fundo});
  height: 150px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 171px;
  font-size: 18px;
`
export const LinkEstilizado = styled(Link)`
  color: ${cores.vermelho};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`
