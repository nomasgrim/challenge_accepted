import { router } from 'expo-router';
import { StyleSheet } from 'react-native';

import PrimaryButton from '@/common/Button';
import Card from '@/common/Card';
import Typography from '@/common/Typography';

import ParallaxScrollView from '@/components/ParallaxScrollView';

const HomeScreen = () => {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
    >
      <Card style={styles.titleContainer}>
        <Typography type="title">Emperic</Typography>
      </Card>

      <Card>
        <Typography type="default">
          The majority of gains in life, come through practical experience, and consinstency. 
          The purpose of "Emperic", is to build habits, that contribute to building consistency,
          so you can achieve your gains.
        </Typography>
      </Card>

      <Card>
        <Typography type="default">
          Welcome to the "Emperic" app. Where you create a challenge for yourself. 
          Made up of whatever tasks you believe you can accomplish every single day.
        </Typography>
      </Card>
           
      <Card style={styles.titleContainer}>
        <PrimaryButton onPress={()=>router.push('/createChallenge')} title="Create Challenge" />
      </Card>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  }
});

export default HomeScreen
