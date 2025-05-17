import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const Container = styled.section`
  padding-top: 60px;
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  padding: 0;
  margin: 0;
  list-style: none;

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: repeat(2, minmax(300px, 1fr));
  }

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: minmax(250px, 600px);
    justify-content: center;
  }
`
