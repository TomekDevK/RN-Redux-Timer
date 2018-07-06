// dependencies
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Image,
  Button,
  TouchableOpacity,
  TextInput,
  Linking,
  View,
  ScrollView,
  Dimensions
} from 'react-native'
// components
import Timer from './components/Timer'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

class App extends Component{
  render() {
    return (
      <ScrollView contentContainerStyle={styles.scrollView}>
      <View style={styles.mainView}>
        <Timer />
      </View>
    </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default App
