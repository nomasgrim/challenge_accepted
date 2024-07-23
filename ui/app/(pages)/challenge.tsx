import { StyleSheet, View } from 'react-native';

import ParallaxScrollView from "@/components/ParallaxScrollView";
import Typography from "@/common/Typography";
import { Card } from "@/common/Card";
import { LinkInternal } from '@/common/LinkInternal';

export default function ChallangeView(){
 return (
  <ParallaxScrollView
  headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}>
      <Card style={styles.titleContainer}>
        <Typography type="title">Challenge View</Typography>
      </Card>
      <Card style={styles.bodyContainer}>
        <Typography type="default">
          This view will take the number of days entered, from createChallenge view. 
          It will list the number of days synchronously with a color representing its status.
          The status correlates to wether or not the represetend day's tasks were fulfilled.
        </Typography>
        <Typography type="link">
          <LinkInternal href="/(tabs)" text="return home" />
        </Typography>
      </Card>
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