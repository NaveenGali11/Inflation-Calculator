import React from 'react';
import Crashes from 'appcenter-crashes';
import {Button, StyleSheet, View} from 'react-native';
import Analytics from 'appcenter-analytics';

export default class App extends React.Component {
  constructor() {
    super();

    this.checkPreviousSession();
  }

  async checkPreviousSession() {
    const didCrash = await Crashes.hasCrashedInLastSession();
    if (didCrash) {
      const report = await Crashes.lastSessionCrashReport();
      alert('Sorry For Crash, We are working on Solution');
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Button
          title="Calculate Inflation"
          onPress={() =>
            Analytics.trackEvent('calculate_inflation', {
              Internet: 'Cellular',
              GPS: 'On',
            })
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
  },
});
