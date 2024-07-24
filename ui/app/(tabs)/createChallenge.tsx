import { useState } from 'react';
import { StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

import ParallaxScrollView from '@/components/ParallaxScrollView';

import Accordion from '@/common/Accordion';
import PrimaryButton from '@/common/Button';
import Card from '@/common/Card';
import InputText from '@/common/InputText';
import Typography from '@/common/Typography';

import { useTaskContext } from '@/hooks/useTaskContext';

const CreateChallenge = () => {
  const router =  useRouter();

  const [challengeLength, setChallengelength] = useState('');
  const [challengeName, setChallengeName] = useState('');
  const [task, setTask] = useState('');

  const { state, dispatch }:any = useTaskContext();

  const addTask = ():void => {
    dispatch( {
      type: 'ADD_TASK', 
      payload: {id:state.tasks.length, text:task}
    });

    // clear input field now task is in state
    setTask('');
  };

  
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}>
      <Card style={styles.titleContainer}>
        <Typography type="title">Create Challenge</Typography>
      </Card>
      <Card>
        <InputText placeholder="Name your challenge" onChangeText={(text)=>setChallengeName(text)} />
        <InputText keyboardType="numeric" placeholder="how many days" onChangeText={(number)=>setChallengelength(number)} />
      </Card>
      <Card>
        <InputText placeholder='create new task' onChangeText={(text)=>setTask(text)} value={task} />
        <PrimaryButton title='Add task' type="link" onPress={()=>addTask()} />
      </Card>
      <Accordion title={`List of tasks for ${challengeName?challengeName:'new challenge'}`}>
        {challengeLength && (<Typography type="defaultSemiBold">Committing myself to the following tasks for {challengeLength} days</Typography>)}
        { 
          state &&
          state.tasks.map((item:any) => item && (<Typography key={item.id}>{item?.text}</Typography>))
        } 
      </Accordion>
      <Card>
        <PrimaryButton title='accept challenge' onPress={()=>router.push("/daily")} />
      </Card>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});

export default CreateChallenge;
