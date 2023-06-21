import CommonButton from './Button'

type Props = {
  children?: string
}

const Button = (props: Props) => {
  return <CommonButton>{props.children}</CommonButton>
}

export default Button
