import styled from 'styled-components'
import fundo from '../../assets/images/fundo.svg'
import { breakpoints, cores } from '../../styles'
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
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media (max-width: ${breakpoints.desktop}) {
    flex-direction: column;
    gap: 10px;
    white-space: nowrap;
    align-items: center;
    justify-content: center;
  }
`
export const CartButton = styled.button`
  color: ${cores.vermelho};
  border: none;
  background-color: transparent;
  font-weight: 900;
  font-size: 18px;
  width: 256px;
  height: 21px;
  cursor: pointer;
`
