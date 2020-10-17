/* eslint-disable no-eval */
import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import Button from './components/Button';
import Display from './components/Display';

const initialState = {
  displayValue: '0',
  cleadDisplay: false,
  operation: null,
  values: [0, 0],
  current: 0,
};

export default class App extends Component {
  state = { ...initialState };

  addDig = (n) => {
    if (n === '.' && this.state.displayValue.includes('.')) {
      return;
    }

    const cleadDisplay =
      this.state.displayValue === '0' || this.state.cleadDisplay;

    const currentValue = cleadDisplay ? '' : this.state.displayValue;

    const displayValue = currentValue + n;

    this.setState({ displayValue, cleadDisplay: false });

    if (n !== '.') {
      const newValue = parseFloat(displayValue);
      const values = [...this.state.values];
      values[this.state.current] = newValue;
      this.setState({ values });
    }
  };

  clearMemory = () => {
    this.setState({ ...initialState });
  };

  setOperation = (operation) => {
    if (this.state.current === 0) {
      this.setState({ operation, current: 1, cleadDisplay: true });
    } else {
      const equals = operation === '=';
      const values = [...this.state.values];

      try {
        values[0] = eval(`${values[0]} ${this.state.operation} ${values[1]}`);
      } catch (e) {
        values[0] = this.state.values[0];
      }

      values[1] = 0;
      this.setState({
        displayValue: `${values[0]}`,
        operation: equals ? null : operation,
        current: equals ? 0 : 1,
        // cleadDisplay: !equals,
        cleadDisplay: equals,
        values,
      });
    }
  };

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
