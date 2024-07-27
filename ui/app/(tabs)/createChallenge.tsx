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
import Icon from '@/common/Icon';

type ITask = {
  id: number,
  text: string,
  completed: boolean
};

const CreateChallenge = () => {
  const router =  useRouter();

  const [challengeLength, setChallengelength] = useState('');
  const [challengeName, setChallengeName] = useState('');
  const [task, setTask] = useState('');

  const { state, dispatch }:any = useTaskContext();

  const addTask = ():void => {
    const entry:ITask = {
      id: state.tasks.length,
      text: task,
      completed: false
    };

    dispatch( {
      type: 'ADD_TASK', 
      payload: entry
    });

    // clear input field now task is in state
    setTask('');
  };

  const removeTask = (id:any):void => {
    dispatch({
      type: 'REMOVE_TASK',
      payload: id
    });
  }

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
        <PrimaryButton type="link" onPress={()=>addTask()}>
          <Typography>
            <Icon name='add' color='#ff0000' /> Add task
          </Typography>
        </PrimaryButton>
      </Card>
      <Accordion title={`List of tasks for ${challengeName?challengeName:'new challenge'}`}>
        {challengeLength && (<Typography type="defaultSemiBold">Committing myself to the following tasks for {challengeLength} days</Typography>)}
        { 
          state &&
          state.tasks.map((item:any) => item && (
            <PrimaryButton type="link" key={item.id} onPress={()=>removeTask(item.id)}>
              <Typography key={item.id}>
                {item?.text} <Icon name='trash' color='#ff0000' />
              </Typography>
            </PrimaryButton>
          ))
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
