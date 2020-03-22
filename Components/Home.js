import {TextInput, Button} from 'react-native-paper';
import React, {Component, useRef} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
  Alert,
  Input,
  Dimensions,
  Text,
  Image,
} from 'react-native';

export default class Home extends React.Component {
  state = {
    text: '',
  };

  render() {
    return (
      <View style={{height: '100%', justifyContent: 'center'}}>
        <Text>ini Home</Text>
      </View>
    );
  }
}
