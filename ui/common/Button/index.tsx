import {
  Button,
  type ButtonProps
} from 'react-native';

type IButtonType = ButtonProps & {
  text?: string,
}

const PrimaryButton = ({
  ...rest
}:IButtonType) => {
  return (
    <Button {...rest} />
  )
};

export default PrimaryButton;
