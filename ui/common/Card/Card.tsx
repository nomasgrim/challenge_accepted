import { View, type ViewProps } from 'react-native';

import { useThemeColor } from '@/hooks/useThemeColor';

type ICarProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
};

const Card = ({ 
  style, 
  lightColor, 
  darkColor, 
  ...otherProps }: ICarProps
) => {
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

  return <View style={[{ backgroundColor }, style]} {...otherProps} />;
}

export default Card;
