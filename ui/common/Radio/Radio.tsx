import BouncyCheckbox from "react-native-bouncy-checkbox";
import Typography from "../Typography";

type IRadioProps = {
  text?: string,
  onPress: ((checked: boolean) => void) | undefined,
  isChecked: boolean
}

const RadioButton = ({
  text,
  ...rest
}:IRadioProps) => {
  return (
      <BouncyCheckbox text={text} {...rest} />
  )
}

export default RadioButton;