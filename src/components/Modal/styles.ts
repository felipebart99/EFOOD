// Modal/styles.ts
import styled from 'styled-components'

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`

export const ModalContainer = styled.div`
  background-color: white;
  border-radius: 8px;
  width: 90%;
  max-width: 500px;
  max-height: 90vh;
  overflow-y: auto;
`

export const ModalContent = styled.div`
  padding: 24px;

  img {
    width: 100%;
    max-height: 200px;
    object-fit: cover;
    border-radius: 8px;
    margin-bottom: 16px;
  }

  h2 {
    font-size: 24px;
    margin-bottom: 12px;
  }

  p {
    margin-bottom: 8px;
  }
`

export const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 16px 24px;
  border-top: 1px solid #eee;
  gap: 16px;

  button {
    padding: 10px 16px;
    border-radius: 4px;
    cursor: pointer;
    font-weight: bold;
    border: none;

    &.secondary {
      background-color: #f5f5f5;
      color: #333;
    }

    &:not(.secondary) {
      background-color: #ff6b00;
      color: white;
    }
  }
`
