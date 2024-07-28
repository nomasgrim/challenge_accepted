import { useThemeColor } from '@/hooks/useThemeColor';
import { TextInput, type TextInputProps, StyleSheet } from 'react-native';

type IInputTextProps = TextInputProps & {
  placeholder?: string
}

const InputText =({
  placeholder,
  style,
  ...rest
}: IInputTextProps) => {
  const color = useThemeColor({light:'#000', dark:'#fff'}, 'text');
  return (
    <TextInput placeholder={placeholder} style={[{color, borderColor:color},styles.input]} {...rest} />
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