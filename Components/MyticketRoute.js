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

export class MyticketRoute extends React.Component {
  render() {
    return (
      <View style={{backgroundColor: 'white', height: '100%'}}>
        {/* <Appbar.Header
          style={{
            backgroundColor: 'rgb(2,100,211)',
            elevation: 0,
          }}>
          <Appbar.Content title="MyTicket" />
        </Appbar.Header> */}
        <ScrollView>
          <View
            style={{
              height: '100%',
              bgColor: 'rgb(246,247,251)',
            }}>
            <ScrollView>
              <Image
                style={{
                  width: '100%',
                  height: 230,
                  resizeMode: 'contain',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                source={require('./img/g1.png')}
              />
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginVertical: 20,
                }}>
                <Text
                  style={{
                    fontSize: 14,
                    color: 'rgb(54,65,87)',
                  }}>
                  Ayo jalan-jalan
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                    color: 'rgb(54,65,87)',
                  }}>
                  Setelah memesan perjalanan, kamu bisa mengatur
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                    color: 'rgb(54,65,87)',
                    marginLeft: 15,
                  }}>
                  Pesanan dan melihat Etiketmu
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                    color: 'rgb(54,65,87)',
                  }}>
                  di sini.
                </Text>
              </View>
              <View
                style={{
                  paddingHorizontal: 20,
                  justifyContent: 'flex-end',
                  alignItems: 'flex-end',
                }}>
                <View
                  style={{
                    alignItems: 'center',
                    height: 45,
                    marginBottom: 10,
                    width: '100%',
                    borderRadius: 20,
                    justifyContent: 'center',
                    backgroundColor: '#ebbd34',
                  }}
                  onPress={() => console.log('Pressed')}>
                  <Text
                    style={{
                      fontSize: 16,
                      color: 'white',
                      fontWeight: 'bold',
                    }}>
                    Pesan Perjalanan
                  </Text>
                </View>

                <View
                  style={{
                    alignItems: 'center',
                    height: 45,

                    width: '100%',
                    borderRadius: 20,
                    justifyContent: 'center',
                    backgroundColor: 'rgb(246,247,251)',
                  }}
                  onPress={() => console.log('Pressed')}>
                  <Text
                    style={{
                      fontSize: 16,
                      color: 'rgb(74,85,107)',
                      fontWeight: 'bold',
                    }}>
                    Lihat Riwayat Pesanan
                  </Text>
                </View>
              </View>
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {},

  body: {
    height: '100%',
    width: '100%',
    backgroundColor: 'rgb(246,247,251)',
  },
  basiccolor: {
    backgroundColor: 'rgb(2,100,211)',
  },
  basiccolor1: {
    backgroundColor: 'white',
  },
});
