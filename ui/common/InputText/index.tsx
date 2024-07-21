import { TextInput, type TextInputProps, StyleSheet } from 'react-native';

export type IInputTextProps = TextInputProps & {
  placeholder?: string
}

export function InputText({
  placeholder,
  style,
  ...rest
}: IInputTextProps) {
  return (
    <TextInput placeholder={placeholder} style={styles.input} />
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