import { View, type ViewProps } from 'react-native';

import { useThemeColor } from '@/hooks/useThemeColor';

export type ICarProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
};

export function Card({ 
  style, 
  lightColor, 
  darkColor, 
  ...otherProps }: ICarProps
) {
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

  return <View style={[{ backgroundColor }, style]} {...otherProps} />;
}
