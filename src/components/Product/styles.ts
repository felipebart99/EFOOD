import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'

export const Card = styled.div`
  background-color: ${cores.branco};
  max-width: 472px;
  width: 100%; // Adicione isso para garantir responsividade
  height: 398px;
  margin-bottom: 40px;
  position: relative;
  border: 1px solid ${cores.vermelho};
  overflow: hidden; // Isso previne que a imagem vaze do container

  img {
    width: 100%; // Faz a imagem ocupar 100% da largura do card
    height: 217px; // Altura fixa para as imagens
    object-fit: cover; // Mantém a proporção e cobre o espaço
    display: block; // Remove espaços embaixo da imagem
  }

  h3,
  p {
    padding: 10px;
    font-size: 14px;
  }
  p {
    line-height: 22px;
    padding-top: 0px;
  }
  button {
    margin-left: 10px;
    width: 82px;
    font-size: 14px;
    font-weight: 700;
    background-color: ${cores.vermelho};
    color: ${cores.branco};
    border: none;
    height: 24px;
    margin-bottom: 8px;
    cursor: pointer;
  }
  .principal {
    display: flex;
    justify-content: space-between;
    padding: 0 10px 0 0;

    h3 {
      font-weight: 700;
      font-size: 18px;
    }
  }
  .secundaria {
    display: flex;
    align-items: center;
    right: 5px;

    p {
      font-size: 18px;
      font-weight: 700;
      padding-top: 10px;
    }

    img {
      width: 21px;
      height: 21px;
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    min-height: 450px;
  }
`
export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  gap: 8px;
`
export const Tag = styled.div`
  background-color: ${cores.vermelho};
  color: ${cores.branco};
  padding: 5px;
  font-size: 12px;
  font-weight: 700;
`
