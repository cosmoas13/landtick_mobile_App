import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  Text,
  Appbar,
  Card,
  Button,
  TextInput,
  DefaultTheme,
} from 'react-native-paper';

import {Dimensions, StyleSheet, View, Image, ScrollView} from 'react-native';
import {Path, Svg} from 'react-native-svg';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faPaperPlane,
  faCoins,
  faUser,
  faCalendarAlt,
  faShuttleVan,
  faMapMarkerAlt,
  faWheelchair,
} from '@fortawesome/free-solid-svg-icons';

// import {TabNavigator} from 'react-navigation';

export default class Train extends React.Component {
  state = {
    text: '',
  };

  render() {
    return (
      <>
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

        <ScrollView>
          <View></View>
          {/* <View style={styles.container}>
            <Image style={styles.image} source={require('./img/iklan1.jpg')} />
            <View style={styles.mask}>
              <Svg width={mask.width} height={mask.height}>
                <Path
                  fill={mask.bgColor}
                  d={`M 0 0 L 0 ${mask.height} L ${mask.width} ${
                    mask.height
                  } L ${mask.width} 0 A ${mask.width / 2} ${mask.height /
                    2} 0 0 1 ${mask.width / 2} ${mask.height /
                    2} A ${mask.width / 2} ${mask.height / 2} 0 0 1 0 0 z `}
                />
              </Svg>
            </View>
          </View> */}
          <View style={styles.container2}>
            <Image
              style={{width: '100%', height: '100%', resizeMode: 'cover'}}
              source={require('./img/d4.jpg')}
            />
          </View>
          <Text
            style={{
              marginBottom: 10,
              marginLeft: 15,
              fontSize: 17,
              fontWeight: 'bold',
              color: 'rgb(54,65,87)',
            }}>
            Hey Kamu,mau ke mana?
          </Text>

          {/* card  =-----------------------------------=*/}
          {/* <View
            style={{
              alignItems: 'center',
              justifyContent: 'space-around',
              flexDirection: 'row',
              marginBottom: 10,
            }}>
            <Card
              onPress={() => this.props.navigation.navigate('Search')}
              style={{
                backgroundColor: 'white',
                height: 100,
                width: 100,
                marginLeft: 10,
                borderRadius: 8,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image style={styles.ikon} source={require('./img/i1.jpg')} />
            </Card>
            <Card
              style={{
                backgroundColor: 'white',
                height: 100,
                width: 100,
                borderRadius: 8,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image style={styles.ikon} source={require('./img/i2.jpg')} />
            </Card>
            <Card
              style={{
                backgroundColor: 'white',
                height: 100,
                width: 100,
                marginRight: 10,
                borderRadius: 8,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image style={styles.ikon} source={require('./img/i3.jpg')} />
            </Card>
          </View>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'space-around',
              flexDirection: 'row',
              marginBottom: 10,
            }}>
            <Card
              style={{
                backgroundColor: 'white',
                height: 100,
                width: 100,
                marginLeft: 10,
                borderRadius: 8,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image style={styles.ikon} source={require('./img/i4.jpg')} />
            </Card>
            <Card
              style={{
                backgroundColor: 'white',
                height: 100,
                width: 100,
                borderRadius: 8,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image style={styles.ikon} source={require('./img/i5.jpg')} />
            </Card>
            <Card
              style={{
                backgroundColor: 'white',
                height: 100,
                width: 100,
                marginRight: 10,
                borderRadius: 8,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image style={styles.ikon} source={require('./img/i6.jpg')} />
            </Card>
          </View> */}

          {/* ------------card------------ */}

          <View
            style={{
              marginHorizontal: 15,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: 'white',
              }}>
              <View style={{backgroundColor: 'white'}}>
                <FontAwesomeIcon
                  icon={faPaperPlane}
                  style={{color: '#d1d1d1', marginLeft: 10}}
                />
              </View>
              <TextInput
                icon="home"
                label="Dari"
                theme={theme3}
                style={{
                  backgroundColor: 'white',
                  width: '90%',
                }}
                value={this.state.text}
                onChangeText={text => this.setState({text})}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: 'white',
              }}>
              <View style={{backgroundColor: 'white'}}>
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  style={{color: '#d1d1d1', marginLeft: 10}}
                />
              </View>
              <TextInput
                label="Ke"
                theme={theme3}
                style={{
                  backgroundColor: 'white',

                  width: '90%',
                }}
                value={this.state.text}
                onChangeText={text => this.setState({text})}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: 'white',
              }}>
              <View style={{backgroundColor: 'white'}}>
                <FontAwesomeIcon
                  icon={faCalendarAlt}
                  style={{color: '#d1d1d1', marginLeft: 10}}
                />
              </View>
              <TextInput
                label="Pergi"
                theme={theme3}
                style={{
                  backgroundColor: 'white',

                  width: '90%',
                }}
                value={this.state.text}
                onChangeText={text => this.setState({text})}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: 'white',
              }}>
              <View style={{backgroundColor: 'white'}}>
                <FontAwesomeIcon
                  icon={faUser}
                  style={{color: '#d1d1d1', marginLeft: 10}}
                />
              </View>
              <TextInput
                label="Penumpang"
                theme={theme3}
                style={{
                  backgroundColor: 'white',

                  width: '90%',
                }}
                value={this.state.text}
                onChangeText={text => this.setState({text})}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: 'white',
              }}>
              <View style={{backgroundColor: 'white'}}>
                <FontAwesomeIcon
                  style={{color: '#d1d1d1', marginLeft: 10}}
                  icon={faWheelchair}
                />
              </View>
              <TextInput
                label="Kelas"
                theme={theme3}
                style={{
                  backgroundColor: 'white',
                  marginBottom: 15,
                  width: '90%',
                }}
                value={this.state.text}
                onChangeText={text => this.setState({text})}
              />
            </View>
            <Button
              mode="contained"
              theme={theme2}
              style={{borderRadius: 20, height: 40, marginVertical: 10}}
              onPress={() => this.props.navigation.navigate('Search')}>
              <Text style={{color: 'white', fontSize: 17}}> Cari</Text>
            </Button>
          </View>

          {/* ////----------------- */}

          {/* <View>
            <Text style={styles.subheader1}>
              Info Terkait Pandemi Virus Corona
            </Text>
            <Text style={styles.subheader2}>
              Jaga kesehatanmu, ini pasti berlalu. Cek info terkait reschedule
              dan refund disini
            </Text>
          </View> */}

          {/* <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal
            style={{flexDirection: 'row'}}>
            <View style={{marginLeft: 9}}>
              <Image style={styles.image1} source={require('./img/1.jpg')} />

              <View style={styles.subtext}>
                <Text style={styles.hea1}>
                  Karantina Wilayah & Kebijakan Penerbangan
                </Text>
                <Text style={styles.hea2}>
                  Cek Daftar Keberangkatan Yang sudah melakukan
                </Text>
              </View>
            </View>

            <View>
              <Image style={styles.image1} source={require('./img/2.jpg')} />
              <View style={styles.subtext}>
                <Text style={styles.hea1}>Cara Refund tiket</Text>

                <Text style={styles.hea2}>
                  Gak pake Rumit kalo mau refund tiket Kereta di LandTick
                </Text>
              </View>
            </View>
            <View>
              <Image style={styles.image1} source={require('./img/3.webp')} />
              <View style={styles.subtext}>
                <Text style={styles.hea1}>Cara Reschedule</Text>

                <Text style={styles.hea2}>
                  Harus ganti jadwal keberangkatan? lh jangan panik. caranya
                  gampang
                </Text>
              </View>
            </View>
            <View style={{marginRight: 8}}>
              <Image style={styles.image1} source={require('./img/4.webp')} />
              <View style={styles.subtext}>
                <Text style={styles.hea1}>Refund via Aplikasi</Text>
                <Text style={styles.hea2}>
                  Simak cara refund hotel di aplikasi Landtick karena mudah
                  banget
                </Text>
              </View>
            </View>
          </ScrollView> */}
          {/* <View>
            <Text
              style={{
                marginBottom: 10,
                marginLeft: 15,
                marginRight: 15,
                marginTop: 20,
                fontSize: 17,
                fontWeight: 'bold',
                color: 'rgb(54,65,87)',
                fontFamily: 'Samsung',
              }}>
              Penawaran Spesial!
            </Text>
            <Text
              style={{
                marginLeft: 15,
                fontSize: 14,
                marginRight: 15,
                color: 'rgb(91,98,114)',
                fontFamily: 'Samsung',
                marginBottom: 20,
              }}>
              Penawaran spesial khusus buat kamu
            </Text>
          </View> */}

          {/* <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal
            style={{flexDirection: 'row'}}>
            <Card style={{marginLeft: 12}}>
              <Image style={styles.image3} source={require('./img/s1.png')} />
              <View
                style={{
                  borderBottomColor: 'black',
                  borderBottomWidth: 0.4,
                  borderBottomColor: 'rgb(200,200,200)',
                }}
              />
              <Text style={styles.head1}>Stay Action ada tiketnya</Text>
              <Text style={styles.head2}>
                Nginep mulai dari Rp88.000 di oyo hotel
              </Text>
            </Card>
            <Card style={{marginLeft: 10}}>
              <Image style={styles.image3} source={require('./img/s2.jpg')} />
              <View
                style={{
                  borderBottomColor: 'black',
                  borderBottomWidth: 0.4,
                  borderBottomColor: 'rgb(200,200,200)',
                }}
              />
              <Text style={styles.head1}>Stay Action ada tiketnya</Text>
              <Text style={styles.head2}>
                Nginep mulai dari Rp88.000 di oyo hotel
              </Text>
            </Card>
            <Card style={{marginLeft: 10, marginRight: 20}}>
              <Image style={styles.image3} source={require('./img/s3.jpg')} />
              <View
                style={{
                  borderBottomColor: 'black',
                  borderBottomWidth: 0.4,
                  borderBottomColor: 'rgb(200,200,200)',
                }}
              />
              <Text style={styles.head1}>Stay Action ada tiketnya</Text>
              <Text style={styles.head2}>
                Nginep mulai dari Rp88.000 di oyo hotel
              </Text>
            </Card>
          </ScrollView>
          <View>
            <Text
              style={{
                marginBottom: 10,
                marginLeft: 15,
                marginTop: 20,
                fontSize: 17,
                fontWeight: 'bold',
                color: 'rgb(54,65,87)',
                fontFamily: 'Samsung',
              }}>
              Info Penting Buat Kami
            </Text>
            <Text
              ext
              style={{
                marginLeft: 15,
                fontSize: 14,
                color: 'rgb(91,98,114)',
                fontFamily: 'Samsung',
                marginBottom: 20,
              }}>
              Informasi terkini buat kamu untuk liburan
            </Text>
          </View>

          <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal
            style={{flexDirection: 'row'}}>
            <View style={{marginLeft: 12}}>
              <Image style={styles.image1} source={require('./img/k1.jpg')} />
              <View style={styles.subtext}>
                <Text style={styles.hea1}>Tiket Kereta Lbaran 2020</Text>
                <Text style={styles.hea2}>
                  persiapkan tiket lebaranmu sebelum kehabisan
                </Text>
              </View>
            </View>
            <View>
              <Image style={styles.image1} source={require('./img/k2.jpg')} />
              <View style={styles.subtext}>
                <Text style={styles.hea1}>
                  Pesan tiket citilink dapat hadiah
                </Text>

                <Text style={styles.hea2}>
                  Saatnya liburan pake Citilink karena kamu akan dapat banyak
                  hadiah !
                </Text>
              </View>
            </View>
            <View style={{marginRight: 15, marginBottom: 15}}>
              <Image style={styles.image1} source={require('./img/k3.webp')} />
              <View style={styles.subtext}>
                <Text style={styles.hea1}>Waspada tiket palsu!</Text>

                <Text style={styles.hea2}>
                  Ini cara agar kamu enggak terjebak penipuan kereta palsu
                </Text>
              </View>
            </View>
            </ScrollView>*/}
        </ScrollView>
      </>
    );
  }
}

const mask = {
  width: Dimensions.get('window').width,
  height: 50,
  bgColor: 'rgb(246,247,251)',
};

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
  container: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: 250,
    backgroundColor: 'rgb(2,100,211)',
  },
  container2: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    height: 130,
    marginBottom: 5,
    backgroundColor: 'rgb(2,100,211)',
    // borderBottomRightRadius: 50,
  },
  image: {
    position: 'absolute',
    height: 240,
    width: 400,
    resizeMode: 'contain',
  },

  image1: {
    height: 150,
    width: 300,
    resizeMode: 'contain',
    borderRadius: 10,
  },
  image3: {
    height: 150,
    width: 240,
    resizeMode: 'contain',
    borderRadius: 10,
  },
  ikon: {
    height: 80,
    width: 80,
    resizeMode: 'contain',
    borderRadius: 10,
    marginTop: 10,
  },

  mask: {
    justifyContent: 'flex-end',
  },
  rightApp: {
    padding: 5,
    marginRight: 10,
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: 'Roboto_medium',
  },
  subheader2: {
    marginLeft: 15,
    marginRight: 15,
    fontSize: 15,
    color: 'rgb(91,98,114)',
    fontFamily: 'Samsung',
    marginBottom: 20,
  },
  subheader1: {
    marginBottom: 10,
    marginLeft: 15,
    marginRight: 15,
    fontSize: 17,
    fontWeight: 'bold',
    color: 'rgb(54,65,87)',
    fontFamily: 'Samsung',
  },
  subtext: {
    width: 280,
    marginLeft: 8,
  },
  hea1: {
    fontSize: 15,
    color: 'rgb(54,65,87)',
    fontFamily: 'Samsung',
    fontWeight: 'bold',
    marginTop: 10,
  },
  hea2: {
    fontSize: 14,
    color: 'rgb(145,152,162)',
    fontFamily: 'Samsung',
    marginTop: 10,
  },
  head1: {
    fontSize: 15,
    color: 'rgb(54,65,87)',
    fontFamily: 'Samsung',
    fontWeight: 'bold',
    padding: 10,
  },
  head2: {
    fontSize: 14,
    color: 'rgb(145,152,162)',
    fontFamily: 'Samsung',
    paddingLeft: 10,
    paddingBottom: 10,
    paddingRight: 10,
  },
});

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
