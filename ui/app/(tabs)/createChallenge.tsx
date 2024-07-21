import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform, NativeSyntheticEvent } from 'react-native';

import { Accordion } from '@/common/Accordion';
import { LinkExternal } from '@/common/LinkExternal';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { Typography } from '@/common/Typography';
import { Card } from '@/common/Card';
import { InputText } from '@/common/InputText';
import { useState } from 'react';
import PrimaryButton from '@/common/Button';

export default function CreateChallenge() {
  type ITask = {
    id: number,
    text: string,
  };

  const [challengeName, setChallengeName] = useState('');
  const [challengeLength, setChallengelength] = useState('');

  const [tasks, setTasks] = useState<Array<ITask>>([]);
  const [task, setTask] = useState('');

  const addTask = ():void => {
    setTask('');
    setTasks([{id:tasks.length,text:task}, ...tasks]);
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
      {/*
        TODO: Create a task. Show an input field, with an icon.
              when icon is clicked, whatever was enter into input field
              gets added into list of tasks to show below
      */}
      <Card>
        <InputText placeholder='create new task' onChangeText={(text)=>setTask(text)} value={task} />
        <PrimaryButton title='Add task' onPress={()=>addTask()} />
      </Card>
      <Accordion title={`List of tasks for ${challengeName?challengeName:'new challenge'}`}>
        {challengeLength && (<Typography type="defaultSemiBold">Committing myself to the following tasks for {challengeLength} days</Typography>)}
        {
          tasks.map(item => item && (<Typography key={item.id}>{item?.text}</Typography>))
        }
      </Accordion>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
