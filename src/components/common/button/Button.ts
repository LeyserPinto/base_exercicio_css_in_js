import styled from 'styled-components'
import { GlobalVars } from '../../../GlobalVars'

const CommonButton = styled.button`
  background-color: ${GlobalVars.principalColor};
  border: thin solid ${GlobalVars.principalColor};
  height: 40px;
  padding: 0 16px;
  font-size: 18px;
  color: ${GlobalVars.secondaryColor};
  margin-left: 8px;
  cursor: pointer;
`

export default CommonButton
