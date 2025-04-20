import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  background-color: ${cores.branco};
  max-width: 472px;
  height: 398px;
  margin-bottom: 40px;
  position: relative;

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
`
export const Tag = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  background-color: ${cores.vermelho};
  color: ${cores.branco};
  padding: 5px;
  font-size: 12px;
  font-weight: 700;
`
