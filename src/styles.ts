import styled, { createGlobalStyle } from 'styled-components'

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px'
}

export const cores = {
  vermelho: '#E66767',
  bege: '#FFEBD9',
  branco: '#FFFFFF',
  fundoClaro: '#FFF8F2'
}

export const GlobalCss = createGlobalStyle`
* {
margin:0;
padding:0;
box-sizing:border-box;
font-family: "Roboto", sans-serif;
}

body{
background-color: ${cores.fundoClaro};
color:${cores.vermelho};
}
`
export const Container = styled.div`
  max-width: 1024px;
  margin: 0 auto;

  @media (max-width: ${breakpoints.desktop}) {
    max-width: 80%;
  }
`
