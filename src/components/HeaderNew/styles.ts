import styled from 'styled-components'
import fundo from '../../assets/images/fundo.svg'
import { cores } from '../../styles'
import { Link } from 'react-router-dom'

export const HeaderBar = styled.header`
  background-image: url(${fundo});
  background-size: contain;
  height: 186px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 40px 171px;
  font-size: 18px;
`
export const LinkEstilizado = styled(Link)`
  color: ${cores.vermelho};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`
export const Container = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between; /* ou center, start, etc. */
  align-items: center; /* alinha verticalmente no eixo cruzado */
  width: 100%;
`
export const CartButton = styled.button`
  color: ${cores.vermelho};
  border: none;
  background-color: transparent;
  font-weight: 900;
  font-size: 18px;
  max-width: 100%;
  width: 256px;
  height: 21px;
  cursor: pointer;
`
