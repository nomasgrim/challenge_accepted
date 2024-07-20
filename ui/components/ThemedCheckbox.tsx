import BouncyCheckbox from "react-native-bouncy-checkbox";
import { ThemedText } from "./ThemedText";

export type IThemedChecbox = {
  text: string,
}

export const ThemedCheckbox = ({
  text,
}:IThemedChecbox) => {
  return (
    <ThemedText>
      <BouncyCheckbox text={text} onPress={(isChecked: boolean) => {}} />
      {text}
    </ThemedText>
  )
}
