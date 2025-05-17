import styled from 'styled-components'
import { breakpoints } from '../styles'

export const Container = styled.section`
  padding-top: 60px;
`
export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* 2 colunas iguais */
  gap: 76px; /* opcional: espaço entre os itens */
  list-style: none; /* tira as bolinhas */
  padding: 0;
  margin: 0;
  max-width: 100%;

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: repeat(1, 1fr);
  }
`
