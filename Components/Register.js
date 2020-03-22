import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {TextInput, Button, Appbar, DefaultTheme} from 'react-native-paper';

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

export default class MyComponent extends React.Component {
  state = {
    text: '',
  };

  render() {
    return (
      <View style={{backgroundColor: 'white', height: '100%'}}>
        <Appbar.Header
          style={{
            backgroundColor: 'rgb(2,100,211)',
            elevation: 0,
          }}>
          <Appbar.BackAction
            onPress={() =>
              this.props.navigation.navigate('Landing')
            }></Appbar.BackAction>
          <Appbar.Content title="LandTick" />
        </Appbar.Header>
        <Text
          style={{
            marginHorizontal: 15,
            marginVertical: 15,
            fontSize: 17,
            fontWeight: 'bold',
            color: 'rgb(54,65,87)',
          }}>
          Gabung untuk nikmati pemesanan Cepat
        </Text>
        <View>
          <View style={{padding: 5}}>
            <TextInput
              theme={theme3}
              style={{backgroundColor: 'white', marginBottom: 20}}
              label="Name"
              value={this.state.text}
              onChangeText={text => this.setState({text})}
            />
            <TextInput
              label="Email"
              theme={theme3}
              style={{backgroundColor: 'white', marginBottom: 1}}
              value={this.state.text}
              onChangeText={text => this.setState({text})}
            />
            <TextInput
              theme={theme3}
              style={{backgroundColor: 'white', marginBottom: 20}}
              label="Password"
              value={this.state.text}
              onChangeText={text => this.setState({text})}
            />
          </View>
          <View
            style={{
              padding: 15,
            }}>
            <Button
              mode="contained"
              theme={theme2}
              style={{borderRadius: 20}}
              onPress={() => console.log('Pressed')}>
              <Text style={{color: 'white'}}> Press me</Text>
            </Button>
            <Text
              style={{
                marginHorizontal: 15,
                marginTop: 15,
                marginBottom: 8,

                color: 'rgb(94,105,107)',
              }}>
              Have an Account?
            </Text>
            <Button
              theme={theme}
              style={{borderRadius: 20}}
              mode="contained"
              onPress={() => this.props.navigation.navigate('Landing')}>
              Login
            </Button>
          </View>
        </View>
      </View>
    );
  }
}

const theme = {
  ...DefaultTheme,

  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(246,247,251)',
  },
};

const theme2 = {
  ...DefaultTheme,

  colors: {
    ...DefaultTheme.colors,
    primary: '#ebbd34',
  },
};

const theme3 = {
  ...DefaultTheme,

  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(2,100,211)',
  },
};
