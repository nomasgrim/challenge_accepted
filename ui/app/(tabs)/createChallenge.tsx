import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform } from 'react-native';

import { Accordion } from '@/common/Accordion';
import { LinkExternal } from '@/common/LinkExternal';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { Typography } from '@/common/Typography';
import { Card } from '@/common/Card';
import { InputText } from '@/common/InputText';

export default function CreateChallenge() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}>
      <Card style={styles.titleContainer}>
        <Typography type="title">Create Challenge</Typography>
      </Card>
      <Card>
        <InputText placeholder="Name your challenge" />
      </Card>
      <Card>
        <InputText placeholder="how many days" />
      </Card>
      <Typography>
        testing some application behaviours below:
      </Typography>
      <Accordion title="File-based routing">
        <Typography>
          This app has 4 views:{' '}
          <Typography type="defaultSemiBold">app/(tabs)/index.tsx</Typography> and{' '}
          <Typography type="defaultSemiBold">app/(tabs)/createChallenge.tsx</Typography> and{' '}
          <Typography type="defaultSemiBold">app/(pages)/daily.tsx</Typography> and{' '}
          <Typography type="defaultSemiBold">app/(pages)/challenge.tsx</Typography>
        </Typography>
        <Typography>
          The layout file in <Typography type="defaultSemiBold">app/(tabs)/_layout.tsx</Typography>{' '}
          sets up the tab navigator.
        </Typography>
        <LinkExternal href="https://docs.expo.dev/router/introduction">
          <Typography type="link">Learn more</Typography>
        </LinkExternal>
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
