import { Hero as HeroSection } from './Hero'
import { ContainerSection } from './Hero'
import Title from '../common/title'
import { GlobalVars } from '../../GlobalVars'

const Hero = () => (
  <HeroSection backgroundImage={GlobalVars.HeroImage}>
    <ContainerSection>
      <Title
        fontFamily="Gloock, serif"
        textColor={GlobalVars.ligthTextColor}
        fontSize={3}
      >
        As melhores vagas para tecnologia, design e artes visuais.
      </Title>
    </ContainerSection>
  </HeroSection>
)

export default Hero
