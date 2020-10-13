import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import Button from './components/Button';

export default () => (
  <SafeAreaView style={styles.container}>
    <View style={styles.Button}>
      <Button label="AC" />
      <Button label="/" />
      <Button label="7" />
      <Button label="8" />
      <Button label="9" />
      <Button label="*" />
      <Button label="4" />
      <Button label="5" />
      <Button label="6" />
      <Button label="-" />
      <Button label="1" />
      <Button label="2" />
      <Button label="3" />
      <Button label="+" />
      <Button label="0" />
      <Button label="." />
      <Button label="=" />
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  Button: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
