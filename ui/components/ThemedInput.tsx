import { TextInput } from 'react-native';

export type IThemedInput = {
  placeholder?: string
}

export function ThemedInput({
  placeholder,
}: IThemedInput) {
  return (
    <TextInput placeholder={placeholder} />
  );
}