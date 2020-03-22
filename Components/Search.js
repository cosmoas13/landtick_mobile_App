import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {TextInput, Button, Appbar, DefaultTheme} from 'react-native-paper';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faAngleDown,
  faTrain,
  faArrowRight,
} from '@fortawesome/free-solid-svg-icons';

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
              this.props.navigation.navigate('Home')
            }></Appbar.BackAction>
          <View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 15,
                  fontWeight: 'bold',
                  paddingRight: 8,
                }}>
                Jakarta
              </Text>
              <FontAwesomeIcon icon={faArrowRight} style={{color: 'white'}} />
              <Text
                style={{
                  color: 'white',
                  fontSize: 15,
                  fontWeight: 'bold',
                  paddingLeft: 8,
                }}>
                Bandung
              </Text>
            </View>
            <Text style={{color: 'white', fontSize: 14}}>
              sen,23 Mar 20 | 1 penumpang
            </Text>
          </View>
        </Appbar.Header>
        <View style={{backgroundColor: 'rgb(246,247,251)'}}>
          <View
            style={{
              borderBottomColor: 'rgb(164,185,187)',
              borderBottomWidth: 0.8,
            }}>
            <Text
              style={{
                marginHorizontal: 15,
                marginVertical: 8,
                fontSize: 16,
                fontWeight: 'bold',
                color: 'rgb(54,65,87)',
              }}>
              Pergi
            </Text>
          </View>
          <View
            style={{
              borderBottomColor: 'rgb(164,185,187)',
              borderBottomWidth: 0.8,
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
              marginHorizontal: 15,
            }}>
            <View>
              <FontAwesomeIcon icon={faTrain} />
            </View>
            <View>
              <Text
                style={{
                  marginHorizontal: 15,
                  fontSize: 14,
                  marginVertical: 8,

                  color: 'rgb(54,65,87)',
                }}>
                Kami telah menampilkan semua kereta untuk rute ini
              </Text>
            </View>
          </View>
        </View>
        <View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              margin: 15,
            }}>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={{
                  width: 20,
                  height: 20,
                  resizeMode: 'cover',
                  marginRight: 10,
                }}
                source={require('./img/kai.jpg')}
              />
              <Text style={{color: 'rgb(54,65,87)'}}>SERAYU326</Text>
            </View>
            <View>
              <Text style={{color: 'orange'}}>IDR 63.000</Text>
            </View>
          </View>
          <View
            style={{
              marginLeft: 47,
              borderBottomColor: 'rgb(164,185,187)',
              borderBottomWidth: 0.8,
            }}>
            <View style={{flexDirection: 'row', marginBottom: 5}}>
              <Text style={{color: 'rgb(54,65,87)'}}>21:25</Text>
              <Text style={{color: 'rgb(54,65,87)'}}> ──── </Text>
              <Text style={{color: 'rgb(54,65,87)'}}>12:54</Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View style={{flexDirection: 'row'}}>
                <Text
                  style={{
                    color: 'rgb(134,135,147)',
                    fontSize: 13,
                    marginRight: 5,
                  }}>
                  3 jam 11 menit
                </Text>
                <Text
                  style={{
                    color: 'rgb(134,135,147)',
                    fontSize: 13,
                    marginRight: 5,
                  }}>
                  |
                </Text>
                <Text
                  style={{
                    color: 'rgb(134,135,147)',
                    fontSize: 13,
                    marginRight: 5,
                  }}>
                  Ekonomi
                </Text>
              </View>
              <View>
                <FontAwesomeIcon
                  icon={faAngleDown}
                  style={{color: 'orange', marginRight: 15, marginBottom: 15}}
                />
              </View>
            </View>
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
