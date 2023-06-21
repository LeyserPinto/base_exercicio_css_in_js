import TitleStyle from './Title'

export type Props = {
  children: string
  fontSize?: number
  textColor?: string
  fontFamily?: string
  marginBotton?: number | 0
}

const Title = (props: Props) => {
  return (
    <TitleStyle
      fontSize={props.fontSize}
      textColor={props.textColor}
      fontFamily={props.fontFamily}
      marginBotton={props.marginBotton}
    >
      {props.children}
    </TitleStyle>
  )
}

export default Title
