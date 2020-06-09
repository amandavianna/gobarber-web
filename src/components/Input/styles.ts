import styled, { css } from 'styled-components'

import Tooltip from '../Tooltip'

interface ContainerPorps {
  isFocused: boolean
  isFilled: boolean
  isErrored: boolean
}

export const Container = styled.div<ContainerPorps>`
  background-color: #232129;
  border-radius: 10px;
  padding: 16px;
  width: 100%;

  border: 1px solid #232129;
  color: #666360;

  display: flex;
  align-items: center;

  ${props =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}

  ${props =>
    props.isFocused &&
    css`
      border-color: #ff9000;
      color: #ff9000;
    `}

  ${props =>
    props.isFilled &&
    css`
      color: #ff9000;
    `}

  & + div {
    margin-top: 8px;
  }

  input {
    background-color: transparent;
    flex: 1;
    border: 0;
    color: #f4ede8;

    &::placeholder {
      color: #666360;
    }

    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus {
      -webkit-text-fill-color: #f4ede8;
      transition: background-color 5000s ease-in-out 0s;
    }
  }

  > svg {
    margin: 0 16px 0 0;
  }
`

export const Error = styled(Tooltip)`
  height: 20px;
  margin: 0 0 0 16px;

  > svg {
    margin: 0;
  }

  span {
    background-color: #c53030;
    color: #fff;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`
