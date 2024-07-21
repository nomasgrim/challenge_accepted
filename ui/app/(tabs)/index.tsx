import { StyleSheet } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { ThemedInput } from '@/components/ThemedInput';
import { InternalLink } from '@/common/InternalLink';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Challenge Accepted</ThemedText>
      </ThemedView>
           
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 1: Create Account | Login</ThemedText>
        <ThemedText>
          Create an account to associate all your challenges and daily tasks to. Or login below with your credentials
        </ThemedText>
        <ThemedInput placeholder="username" />
        <ThemedInput placeholder="password" />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 2: Create your Challenge & Tasks</ThemedText>
        <ThemedText>
          You will name your challenge and define how long you will stay commited to it.
        </ThemedText>
        <ThemedText>
          You will create the tasks that you are committing yourself to everyday.
        </ThemedText>
      </ThemedView>
      <ThemedView>
        <ThemedText type="link">
          <InternalLink href="/createChallenge" text="Create Challange" />
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 3: Accept your Challenge</ThemedText>
        <ThemedText>
          This is the commitment to yourself, to complete the tasks you just made, every single day! Now manage it.
        </ThemedText>
        <ThemedText type="link">
          <InternalLink href="/daily" text="Daily View" />
        </ThemedText>
        <ThemedText type="link">
          <InternalLink href="/challenge" text="Challenge View" />
        </ThemedText>
      </ThemedView>
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
