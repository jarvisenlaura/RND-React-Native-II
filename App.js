import React from 'react';
import {StyleSheet, View, Text, TouchableHighlight} from 'react-native';

export default class App extends React.Component {
  _onPressButton = () => {
    alert('Painoit nappia');
  };
  render() {
    return (
      <View style={styles.body}>
        <Text style={styles.text}>Laitetaanko numerotutka päälle?</Text>
        <TouchableHighlight onPress={this._onPressButton}>
          <View style={styles.button}>
            <Text style={styles.text}>Paina tästä</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  body: {
    backgroundColor: 'honeydew',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  text: {
    padding: 20,
    fontSize: 20,
  },
  button: {
    backgroundColor: 'aquamarine',
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
