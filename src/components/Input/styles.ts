import styled from 'styled-components'

export const Container = styled.div`
  background-color: #232129;
  border-radius: 10px;
  border: 1px solid #232129;
  padding: 16px;
  width: 100%;
  color: #666360;
  display: flex;
  align-items: center;

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
