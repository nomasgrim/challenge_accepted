import BouncyCheckbox from "react-native-bouncy-checkbox";
import Typography from "../Typography";

type IRadioProps = {
  text: string,
}

const RadioButton = ({
  text,
}:IRadioProps) => {
  return (
    <Typography>
      <BouncyCheckbox text={text} onPress={(isChecked: boolean) => {}} />
      {text}
    </Typography>
  )
}

export default RadioButton;