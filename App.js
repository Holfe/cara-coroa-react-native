import React from 'react';
import {Router, Scene} from 'react-native-router-flux';
import {AppRegistrer} from 'react-native';

import Menu from './src/components/Menu';
import About from './src/components/About';
import OtherGames from './src/components/OtherGames';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Scene initial key={'menu'} component={Menu} title="Cara ou Coroa" />
        <Scene key={'about'} component={About} />
        <Scene key={'otherGames'} component={OtherGames} />
      </Router>
    );
  }
}

AppRegistry.registerComponent('CaraCoroa', () => App);
