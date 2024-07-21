import { StyleSheet, View } from 'react-native';

import ParallaxScrollView from "@/components/ParallaxScrollView";
import { Typography } from "@/common/Typography";
import { Card } from "@/common/Card";
import { LinkInternal } from '@/common/LinkInternal';
import { RadioButton } from '@/common/Radio';

export default function DailyView(){
 return (
  <ParallaxScrollView
  headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}>
    <Card style={styles.titleContainer}>
      <Typography type="title">Daily View</Typography>
    </Card>
    <Card style={styles.bodyContainer}>
      <Typography type="subtitle">Start componts for daily view</Typography>
    </Card>
    <Card>
      <Typography>
        <RadioButton text="start tasking out the project" />
      </Typography>
    </Card>
    <Card>
      <Typography>
        <RadioButton text="document whats left" />
      </Typography>
    </Card>
    <Card>
      <Typography type="link">
        <LinkInternal href="/challenge" text="view the challenge" />
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