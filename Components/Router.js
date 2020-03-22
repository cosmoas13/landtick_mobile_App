import * as React from 'react';
import {
  BottomNavigation,
  Text,
  Appbar,
  DefaultTheme,
  Button,
  Provider as PaperProvider,
} from 'react-native-paper';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Search from './Search';
import HomeRoute from './HomeRoute';
import {MyticketRoute} from './MyticketRoute';
import {AccountRoute} from './AccountRoute';
import {View} from 'react-native';
import {connect} from 'react-redux';

class MyComponent extends React.Component {
  state = {
    index: 0,
    routes: [
      {key: 'home', title: 'Home', icon: 'home'},
      {key: 'myticket', title: 'MyTicket', icon: 'playlist-check'},
      {key: 'account', title: 'Account', icon: 'account'},
    ],
  };

  _handleIndexChange = index => this.setState({index});

  renderScene = ({route, navigation}) => {
    switch (route.key) {
      case 'home':
        return <HomeRoute navigation={this.props.navigation} />;
      case 'myticket':
        return <MyticketRoute navigation={this.props.navigation} />;
      case 'account':
        return <AccountRoute navigation={this.props.navigation} />;
    }
  };

  render() {
    const {data} = this.props.login;
    const {authenticated} = this.props.login;
    console.log(data, authenticated, 'yang login');
    return (
      <>
        <Appbar.Header
          style={{
            backgroundColor: 'rgb(2,100,211)',
            elevation: 0,
          }}>
          <Appbar.Content title="LandTick" />
          {authenticated == true ? (
            <Text style={{color: 'white', fontWeight: 'bold'}}>
              {data.email}
            </Text>
          ) : (
            <Button
              theme={theme}
              onPress={() => this.props.navigation.navigate('Landing')}>
              <Text style={{color: 'white', fontWeight: 'bold'}}>Login</Text>
            </Button>
          )}

          {/* <FontAwesomeIcon style={{color: 'white'}} icon={faCoins} />
          <Text style={styles.rightApp}>10.000</Text>
          <FontAwesomeIcon
            style={{color: 'white', marginRight: 15}}
            icon={faEnvelope}
          /> */}
        </Appbar.Header>
        <BottomNavigation
          navigation={this.props.navigation}
          theme={theme}
          navigationState={this.state}
          onIndexChange={this._handleIndexChange}
          renderScene={this.renderScene}></BottomNavigation>
      </>
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
export default connect(mapStateToProps, mapDispatchToProps)(MyComponent);

const theme = {
  ...DefaultTheme,

  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(2,100,211)',
  },
};
