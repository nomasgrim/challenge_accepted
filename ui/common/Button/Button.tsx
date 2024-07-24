import {
  StyleSheet,
  Pressable,
  Text,
  type PressableProps
} from 'react-native';
import Typography from '../Typography';
import { useThemeColor } from '@/hooks/useThemeColor';

type IButtonType = PressableProps & {
  title?: string,
  type?: string,
  textColor?:string,
}

const PrimaryButton = ({
  title,
  type='button',
  ...rest
}:IButtonType) => {
  const color = useThemeColor({ light: 'black', dark: 'white' }, 'text');
  const background = useThemeColor({ light: 'black', dark: 'white' }, 'background');
  return (
    // <Pressable style={[{background}, type==='button'?styles.button:styles.link]} {...rest}>
    <Pressable style={type==='button'?styles.button:styles.link} {...rest}>
      <Typography style={{color}}>{title}</Typography>
    </Pressable>
  )
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    borderWidth: 1,
    elevation: 3,
  },
  link: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    // backgroundColor: 'black',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});

export default PrimaryButton;