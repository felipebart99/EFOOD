import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.8;
`
export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  z-index: 1;
`
export const Sidebar = styled.aside`
  background-color: ${cores.vermelho};
  color: ${cores.branco};
  z-index: 1;
  width: 360px;
  height: 1624px;
  padding: 32px 8px 0px 8px;

  h1 {
    margin-bottom: 24px;
    font-size: 16px;
    font-weight: 700;
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 330px;
  }
`
export const ButtonSubmit = styled.button`
  max-width: 100%;
  width: 344px;
  height: 24px;
  background-color: ${cores.bege};
  color: ${cores.vermelho};
  font-size: 14px;
  font-weight: 700;
  border: none;
  margin-bottom: 8px;
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &.disabled {
    background-color: #ccc;
    color: #666;
  }
`
export const SuccessMessage = styled.div`
  text-align: center;
  padding: 40px 0;

  h2 {
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 16px;
  }

  p {
    font-size: 14px;
    line-height: 22px;
  }
`

export const InputGroup = styled.div`
  label {
    font-size: 14px;
    font-weight: 700;
    margin-bottom: 8px;
    display: block;
  }

  input {
    width: 100%;
    max-width: 344px; /* Largura máxima padrão */
    height: 32px;
    background-color: ${cores.bege};
    color: #000;
    border: 1px solid ${cores.bege};
    margin-bottom: 8px;
    padding: 0 8px;
  }
`

export const Row = styled.div`
  display: flex;

  ${InputGroup} {
    flex: 1; /* Faz os inputs ocuparem espaço igual */

    input {
      width: 100%; /* Ocupa toda a largura disponível */
      max-width: 155px; /* Largura máxima para campos pequenos como CEP */
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    gap: 16px;

    ${InputGroup} input {
      max-width: 100%; /* Em mobile, ocupa toda a largura */
    }
  }
`
