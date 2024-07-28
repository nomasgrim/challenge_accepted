import { StyleSheet } from 'react-native';

import ParallaxScrollView from "@/components/ParallaxScrollView";

import Card from "@/common/Card";
import LinkInternal from '@/common/LinkInternal';
import RadioButton from '@/common/Radio';
import Typography from "@/common/Typography";

import { useGlobalContext } from '@/hooks/useGlobalContext';
import { useEffect } from 'react';

const DailyView = () => {
 const {state, dispatch}:any = useGlobalContext();

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
      {state.challenge && (<Typography type="subtitle">{state.challenge.name}</Typography>)}
      { 
        state &&
        state.tasks.map((item:any) => item && (
          <Card key={item.id} style={styles.taskBody}>
            <RadioButton onPress={()=>toggleComplete(item.id)} isChecked={item.completed} />
            <Typography type="default">
              {item.text}
            </Typography>
          </Card>
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
    justifyContent: 'center'
  },
  taskBody: {
    flex:1,
    flexDirection:'row',
    justifyContent:'flex-start',
  },
  bodyContainer: {
    gap: 8,
    marginBottom: 8,
  }
});

export default DailyView;