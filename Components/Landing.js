import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {TextInput, Button, Appbar, DefaultTheme} from 'react-native-paper';
import axios from 'axios';
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

import {connect} from 'react-redux';
import {
  checkLogin,
  // , checkregister
} from '../_actions/auth';

class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  loginuser = () => {
    const data = {
      email: this.state.email,
      password: this.state.password,
    };
    this.props.checkLogin(data);
    this.props.navigation.navigate('Home');
  };

  handleChange1 = email => {
    this.setState({email});
  };

  handleChange2 = password => {
    this.setState({password});
  };

  render() {
    const {data} = this.props.login;
    const {authenticated} = this.props.login;
    console.log(data, authenticated, 'login');

    return (
      <View style={{backgroundColor: 'white', height: '100%'}}>
        <Appbar.Header
          style={{
            backgroundColor: 'rgb(2,100,211)',
            elevation: 0,
          }}>
          <Appbar.BackAction
            onPress={() =>
              this.props.navigation.navigate('Home')
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
              label="Email"
              theme={theme3}
              style={{backgroundColor: 'white', marginBottom: 1}}
              value={this.state.email}
              onChangeText={this.handleChange1}
            />
            <TextInput
              theme={theme3}
              style={{backgroundColor: 'white', marginBottom: 20}}
              label="Password"
              value={this.state.password}
              onChangeText={this.handleChange2}
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
              onPress={this.loginuser}>
              <Text style={{color: 'white'}}> Press me</Text>
            </Button>
            <Text
              style={{
                marginHorizontal: 15,
                marginTop: 15,
                marginBottom: 8,

                color: 'rgb(94,105,107)',
              }}>
              Not a member?
            </Text>
            <Button
              theme={theme}
              style={{borderRadius: 20}}
              mode="contained"
              onPress={() => this.props.navigation.navigate('Register')}>
              Create Acount
            </Button>
          </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    login: state.login,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    checkLogin: data => dispatch(checkLogin(data)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Landing);

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
