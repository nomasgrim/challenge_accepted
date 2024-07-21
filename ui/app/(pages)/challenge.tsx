import { StyleSheet, View } from 'react-native';

import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { InternalLink } from '@/common/InternalLink';

export default function ChallangeView(){
 return (
  <ParallaxScrollView
  headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Challenge View</ThemedText>
      </ThemedView>
      <ThemedView style={styles.bodyContainer}>
        <ThemedText type="default">
          This view will take the number of days entered, from createChallenge view. 
          It will list the number of days synchronously with a color representing its status.
          The status correlates to wether or not the represetend day's tasks were fulfilled.
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