import { StyleSheet } from 'react-native';

import { Accordion } from '@/common/Accordion';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import Typography from '@/common/Typography';
import { Card } from '@/common/Card';
import { InputText } from '@/common/InputText';
import { useState } from 'react';
import PrimaryButton from '@/common/Button';
import { useTaskContext } from '@/hooks/useTaskContext';
import { useRouter } from 'expo-router';

const CreateChallenge = () => {
  const { state, dispatch }:any = useTaskContext();
  const [challengeName, setChallengeName] = useState('');
  const [challengeLength, setChallengelength] = useState('');

  const [task, setTask] = useState('');

  const addTask = ():void => {
    console.log(`tasks legnth ${state.tasks.length} & text: ${task}`);
    dispatch( {type: 'ADD_TASK', payload: {id:state.tasks.length, text:task}});
  };

  const router=  useRouter();
  
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
