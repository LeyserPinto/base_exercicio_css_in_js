import styled from 'styled-components'
import { GlobalVars } from '../../GlobalVars'

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  padding: 32px;
  border-radius: 12px;
  margin-top: 40px;
  background-color: ${GlobalVars.secondaryColor};

  & input {
    padding: 0 1em;
    outline-color: ${GlobalVars.principalColor};
  }
`
