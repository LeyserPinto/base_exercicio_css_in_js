import styled from 'styled-components'
import { Props } from '.'
import { GlobalVars } from '../../../GlobalVars'

const Title = styled.h2<Props>`
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'em' : '1em')};
  color: ${(props) =>
    props.textColor ? props.textColor : GlobalVars.principalColor};
  font-family: ${(props) =>
    props.fontFamily ? props.fontFamily : 'Lato,san-serif'};
  margin-bottom: ${(props) => props.marginBotton + 'em'};
`

export default Title
