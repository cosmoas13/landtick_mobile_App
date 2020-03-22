import * as React from 'react';
import {Text, Appbar, Card, Button} from 'react-native-paper';

import {Dimensions, StyleSheet, View, Image, ScrollView} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faPen,
  faCoins,
  faIdBadge,
  faAngleRight,
} from '@fortawesome/free-solid-svg-icons';

import {removeAuthKey} from '../config/auth.js';

import AsyncStorage from '@react-native-community/async-storage';

export class AccountRoute extends React.Component {
  handleLogout = async () => {
    try {
      await removeAuthKey();
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <>
        {/* <Appbar.Header
          style={{
            backgroundColor: 'rgb(2,100,211)',
            elevation: 0,
          }}>
          <Appbar.Content title="Account" />
        </Appbar.Header> */}
        <View
          style={{
            height: '100%',
            bgColor: 'rgb(246,247,251)',
          }}>
          <ScrollView>
            <View style={{alignItems: 'center'}}>
              <View
                style={{
                  height: 120,
                  width: '100%',
                  backgroundColor: 'rgb(2,100,211)',
                  alignItems: 'center',
                }}></View>
              <Card
                style={{
                  padding: 15,
                  height: 110,
                  width: 300,
                  backgroundColor: 'white',
                  marginTop: -88,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text
                    style={{
                      fontSize: 17,
                      fontWeight: 'bold',
                      color: 'rgb(54,65,87)',
                    }}>
                    Edo Lubis
                  </Text>
                  <View>
                    <FontAwesomeIcon
                      style={{color: 'rgb(2,100,211)'}}
                      icon={faPen}
                    />
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    marginBottom: 10,
                    marginTop: 10,
                  }}>
                  <Text
                    style={{
                      fontSize: 14,

                      color: '#f74539',
                    }}>
                    Unverified
                  </Text>
                  <FontAwesomeIcon
                    style={{color: 'orange', marginLeft: 5}}
                    icon={faIdBadge}
                  />
                </View>
                <View style={{flexDirection: 'row'}}>
                  <FontAwesomeIcon
                    style={{color: 'orange', marginLeft: 5}}
                    icon={faCoins}
                  />
                  <Text
                    style={{
                      fontWeight: 'bold',
                      fontSize: 14,
                      color: 'rgb(54,65,87)',
                      marginLeft: 15,
                    }}>
                    Basic - 10.000
                  </Text>
                </View>
              </Card>
            </View>
            <View style={{height: 200, justifyContent: 'flex-end'}}>
              <View
                style={{
                  marginBottom: 10,
                }}>
                <View
                  style={{
                    backgroundColor: 'white',
                    alignItems: 'center',
                    flexDirection: 'row',
                    height: 45,
                    justifyContent: 'space-between',
                  }}
                  onPress={() => console.log('Pressed')}>
                  <Text
                    style={{
                      fontSize: 16,
                      color: 'rgb(54,65,87)',
                      marginLeft: 15,
                    }}>
                    Pengaturan
                  </Text>
                  <FontAwesomeIcon
                    style={{color: 'rgb(54,65,87)', marginRight: 15}}
                    icon={faAngleRight}
                  />
                </View>
              </View>
              <View
                style={{
                  marginBottom: 10,
                }}>
                <View
                  style={{
                    backgroundColor: 'white',
                    alignItems: 'center',
                    flexDirection: 'row',
                    height: 45,
                    justifyContent: 'space-between',
                  }}
                  onPress={() => console.log('Pressed')}>
                  <Text
                    style={{
                      fontSize: 16,
                      color: 'rgb(54,65,87)',
                      marginLeft: 15,
                    }}>
                    Pusat Bantuan
                  </Text>
                  <FontAwesomeIcon
                    style={{color: 'rgb(54,65,87)', marginRight: 15}}
                    icon={faAngleRight}
                  />
                </View>
              </View>
              <View
                style={{
                  marginBottom: 10,
                }}>
                <Button
                  style={{
                    backgroundColor: 'white',
                    alignItems: 'center',
                    flexDirection: 'row',
                    height: 45,
                    justifyContent: 'space-between',
                  }}
                  onPress={this.handleLogout}>
                  <Text
                    style={{
                      fontSize: 16,
                      color: 'rgb(54,65,87)',
                      marginLeft: 15,
                    }}>
                    Keluar
                  </Text>
                  <FontAwesomeIcon
                    style={{color: 'rgb(54,65,87)', marginRight: 15}}
                    icon={faAngleRight}
                  />
                </Button>
              </View>
            </View>
          </ScrollView>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {},

  body: {
    height: '100%',
    backgroundColor: 'rgb(246,247,251)',
  },
  basiccolor: {
    backgroundColor: 'rgb(2,100,211)',
  },
  basiccolor1: {
    backgroundColor: 'white',
  },
});
