// Modal/styles.ts
import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`

export const ModalContainer = styled.div`
  position: relative;
  background-color: ${cores.vermelho};
  width: 90%;
  max-width: 1024px;
  width: 100%;
  height: 334px;
  overflow-y: none;
  @media (max-width: ${breakpoints.tablet}) {
    min-height: 420px;
  }
`

export const ModalContent = styled.div`
  padding: 24px;
  color: ${cores.branco};
  display: flex;

  img {
    max-width: 280px;
    width: 100%;
    height: 280px;
    object-fit: cover;
  }

  div {
    max-width: 656px;
    width: 100%;
    height: 176px;
    margin: 0 29.3px;
  }
  h2 {
    font-size: 18px;
    font-weight: 900;
    margin-bottom: 24px;
    line-height: 100%;
  }

  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    margin-bottom: 24px;
  }
`
export const Button = styled.button<{ variant?: string }>`
  background-color: ${({ variant }) =>
    variant === 'secondary' ? cores.vermelho : '#FFEBD9'};
  color: ${({ variant }) => (variant === 'secondary' ? cores.bege : '#E66767')};
  border: none;
  cursor: pointer;
  font-size: 14px;
  font-weight: 700;
  width: ${({ variant }) => (variant === 'secondary' ? '16px' : '218px')};
  height: ${({ variant }) => (variant === 'secondary' ? '16px' : '24px')};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;

  ${({ variant }) =>
    variant === 'secondary' &&
    `
    position: absolute;
    top: 8px;
    right: 8px;
    
    img {
      width: 16px;
      height: 16px;
    }
  `}
`
