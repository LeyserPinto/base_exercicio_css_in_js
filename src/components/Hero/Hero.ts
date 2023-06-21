import styled from 'styled-components'
import { GlobalVars } from '../../GlobalVars'

type HeroProps = {
  backgroundImage: string
}
export const Hero = styled.div<HeroProps>`
  height: 360px;
  width: 100%;
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${GlobalVars.principalColor};
    content: '';
    opacity: 0.7;
  }
`
export const ContainerSection = styled.section`
  position: relative;
  color: ${GlobalVars.ligthTextColor};
  text-align: center;
`
