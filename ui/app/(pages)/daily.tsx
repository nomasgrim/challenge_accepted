import { StyleSheet } from 'react-native';

import ParallaxScrollView from "@/components/ParallaxScrollView";

import Card from "@/common/Card";
import LinkInternal from '@/common/LinkInternal';
import RadioButton from '@/common/Radio';
import Typography from "@/common/Typography";

import { useTaskContext } from '@/hooks/useTaskContext';

const DailyView = () => {
 const {state, dispatch}:any = useTaskContext();

 const toggleComplete = (id:any) => {
  dispatch({
    type: 'TOGGLE_TASK', 
    payload: id
  });
  
 };

 return (
  <ParallaxScrollView
  headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}>
    <Card style={styles.titleContainer}>
      <Typography type="title">Daily View</Typography>
    </Card>
    <Card>
      <Typography>THIS LIST COMES FROM CREATE CHALLENGE VIEW</Typography>
        { 
          state &&
          state.tasks.map((item:any) => item && (
            <Typography key={item.id}>
              <RadioButton text={item.text} onPress={()=>toggleComplete(item.id)} isChecked={item.completed} />
            </Typography>
          ))
        } 
    </Card>
    <Card>
      <Typography type="link">
        <LinkInternal href="/challenge" text="view the challenge" />
      </Typography>
      <Typography type="link">
        <LinkInternal href="/(tabs)" text="return home" />
      </Typography>
    </Card>
  </ParallaxScrollView>
 )
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  bodyContainer: {
    gap: 8,
    marginBottom: 8,
  }
});

export default DailyView;