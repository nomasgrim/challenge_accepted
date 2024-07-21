import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { ThemedInput } from '@/components/ThemedInput';

export default function CreateChallenge() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Create Challenge</ThemedText>
      </ThemedView>
      <ThemedView>
        <ThemedInput placeholder="Name your challenge" />
      </ThemedView>
      <ThemedView>
        <ThemedInput placeholder="how many days" />
      </ThemedView>
      <ThemedText>
        testing some application behaviours below:
      </ThemedText>
      <Collapsible title="File-based routing">
        <ThemedText>
          This app has 4 views:{' '}
          <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> and{' '}
          <ThemedText type="defaultSemiBold">app/(tabs)/createChallenge.tsx</ThemedText> and{' '}
          <ThemedText type="defaultSemiBold">app/(pages)/daily.tsx</ThemedText> and{' '}
          <ThemedText type="defaultSemiBold">app/(pages)/challenge.tsx</ThemedText>
        </ThemedText>
        <ThemedText>
          The layout file in <ThemedText type="defaultSemiBold">app/(tabs)/_layout.tsx</ThemedText>{' '}
          sets up the tab navigator.
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/router/introduction">
          <ThemedText type="link">Learn more</ThemedText>
        </ExternalLink>
      </Collapsible>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
