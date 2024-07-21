import { StyleSheet, View } from 'react-native';

import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { InternalLink } from '@/common/InternalLink';
import { ThemedCheckbox } from '@/components/ThemedCheckbox';

export default function DailyView(){
 return (
  <ParallaxScrollView
  headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}>
    <ThemedView style={styles.titleContainer}>
      <ThemedText type="title">Daily View</ThemedText>
    </ThemedView>
    <ThemedView style={styles.bodyContainer}>
      <ThemedText type="subtitle">Start componts for daily view</ThemedText>
    </ThemedView>
    <ThemedView>
      <ThemedText>
        <ThemedCheckbox text="start tasking out the project" />
      </ThemedText>
    </ThemedView>
    <ThemedView>
      <ThemedText>
        <ThemedCheckbox text="document whats left" />
      </ThemedText>
    </ThemedView>
    <ThemedView>
      <ThemedText type="link">
        <InternalLink href="/challenge" text="view the challenge" />
      </ThemedText>
      <ThemedText type="link">
        <InternalLink href="/(tabs)" text="return home" />
      </ThemedText>
    </ThemedView>
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