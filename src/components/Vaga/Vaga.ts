import styled from 'styled-components'
import { GlobalVars } from '../../GlobalVars'

export const VagaLi = styled.li`
  border: thin solid ${GlobalVars.principalColor};
  background-color: ${GlobalVars.secondaryColor};
  color: ${GlobalVars.principalColor};
  padding: 1em;
  transition: all ease 0.3s;
  border: 8px;
  cursor: pointer;

  &:hover {
    background-color: ${GlobalVars.principalColor};
    color: ${GlobalVars.secondaryColor};

    & h2 {
      color: ${GlobalVars.secondaryColor};
    }

    & a {
      background-color: ${GlobalVars.secondaryColor};
      color: ${GlobalVars.principalColor};
    }
  }
`

export const VagaLink = styled.a`
  border-color: ${GlobalVars.secondaryColor};
  background-color: ${GlobalVars.principalColor};
  color: ${GlobalVars.secondaryColor};
  display: inline-block;
  padding: 8px 16px;
  text-decoration: none;
  margin-top: 16px;
  font-weight: bold;
  font-size: 14px;
  border-radius: 8px;
  text-align: center;

  @media (max-width: 768px) {
    display: block;
  }
`
