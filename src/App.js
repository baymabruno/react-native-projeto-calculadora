import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import Button from './components/Button';
import Display from './components/Display';

export default class App extends Component {
  state = {
    displayValue: 0,
  };

  addDig = (n) => {
    this.setState({ displayValue: n });
  };

  clearMemory = () => {
    this.setState({ displayValue: 0 });
  };

  setOperation = (operation) => {};

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Display value={this.state.displayValue} />
        <View style={styles.Button}>
          <Button label="AC" triple onClick={this.clearMemory} />
          <Button label="/" operation onClick={this.setOperation} />
          <Button label="7" onClick={this.addDig} />
          <Button label="8" onClick={this.addDig} />
          <Button label="9" onClick={this.addDig} />
          <Button label="*" operation onClick={this.setOperation} />
          <Button label="4" onClick={this.addDig} />
          <Button label="5" onClick={this.addDig} />
          <Button label="6" onClick={this.addDig} />
          <Button label="-" operation onClick={this.setOperation} />
          <Button label="1" onClick={this.addDig} />
          <Button label="2" onClick={this.addDig} />
          <Button label="3" onClick={this.addDig} />
          <Button label="+" operation onClick={this.setOperation} />
          <Button label="0" double onClick={this.addDig} />
          <Button label="." onClick={this.addDig} />
          <Button label="=" operation onClick={this.setOperation} />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  Button: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
