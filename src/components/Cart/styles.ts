import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'
import lixeira from '../../assets/images/lixeira.png'

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
`

export const Prices = styled.p`
  width: 344px;
  height: 16px;
  font-weight: 700;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  margin: 32px 0 16px 0;

  @media (max-width: ${breakpoints.tablet}) {
    width: 300px;
  }
`
export const CartItem = styled.li`
  display: flex;
  background-color: ${cores.bege};
  padding: 8px;
  color: ${cores.vermelho};
  margin-bottom: 16px;
  position: relative;

  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
    margin-right: 8px;
  }
  h3 {
    font-weight: 900;
    font-size: 18px;
    margin-bottom: 16px;
  }
  button {
    background-image: url(${lixeira});
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    width: 16px;
    height: 16px;
    border: none;
    position: absolute;
    bottom: 8px;
    right: 8px;
    cursor: pointer;
  }
`
