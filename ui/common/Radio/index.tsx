import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Typography } from "../Typography";

export type IRadioProps = {
  text: string,
}

export const RadioButton = ({
  text,
}:IRadioProps) => {
  return (
    <Typography>
      <BouncyCheckbox text={text} onPress={(isChecked: boolean) => {}} />
      {text}
    </Typography>
  )
}
