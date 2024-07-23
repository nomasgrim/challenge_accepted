import { StyleSheet } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import Typography from '@/common/Typography';
import { Card } from '@/common/Card';
import { InputText } from '@/common/InputText';
import { LinkInternal } from '@/common/LinkInternal';
import { Icon } from '@/common/Icon';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
    >
      <Card style={styles.titleContainer}>
        <Typography type="title">Challenge Accepted</Typography>
      </Card>
           
      <Card style={styles.stepContainer}>
        <Typography type="subtitle">Step 1: Create Account | Login</Typography>
        <Typography>
          Create an account to associate all your challenges and daily tasks to. Or login below with your credentials
        </Typography>
        <InputText placeholder="username" />
        <InputText placeholder="password" />
        <Icon name='home' color='#ff0000' />
      </Card>
      <Card style={styles.stepContainer}>
        <Typography type="subtitle">Step 2: Create your Challenge & Tasks</Typography>
        <Typography>
          You will name your challenge and define how long you will stay commited to it.
        </Typography>
        <Typography>
          You will create the tasks that you are committing yourself to everyday.
        </Typography>
      </Card>
      <Card>
        <Typography type="link">
          <LinkInternal href="/createChallenge" text="Create Challange" />
        </Typography>
      </Card>
      <Card style={styles.stepContainer}>
        <Typography type="subtitle">Step 3: Accept your Challenge</Typography>
        <Typography>
          This is the commitment to yourself, to complete the tasks you just made, every single day! Now manage it.
        </Typography>
        <Typography type="link">
          <LinkInternal href="/daily" text="Daily View" />
        </Typography>
        <Typography type="link">
          <LinkInternal href="/challenge" text="Challenge View" />
        </Typography>
      </Card>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  }
});
