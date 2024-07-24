import { TextInput, type TextInputProps, StyleSheet } from 'react-native';

type IInputTextProps = TextInputProps & {
  placeholder?: string
}

const InputText =({
  placeholder,
  style,
  ...rest
}: IInputTextProps) => {
  return (
    <TextInput placeholder={placeholder} style={styles.input} {...rest} />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default InputText;