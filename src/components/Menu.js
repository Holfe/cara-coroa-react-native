import React from 'react';
import { View, Image, StyleSheet, TouchableHighlight } from 'react-native';

const logo = require('../img/logo.png');
const btnJogar = require('../img/botao_jogar.png');
const btnSobre = require('../img/sobre_jogo.png');
const btnOutros = require('../img/outros_jogos.png');

import { Actions } from 'react-native-router-flux';

export default class Menu extends React.Component {
  render() {
    return (
      <View style={styles.body}>
        <View style={styles.header}>
          <Image source={logo} />
          <TouchableHighlight onPress={() => Actions.result()}>
            <Image source={btnJogar} />
          </TouchableHighlight>
        </View>
        <View style={styles.footer}>
          <TouchableHighlight onPress={() => Actions.about()}>
            <Image source={btnSobre} />
          </TouchableHighlight>
          <TouchableHighlight onPress={() => Actions.otherGames()}>
            <Image source={btnOutros} />
          </TouchableHighlight>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#61bd8c',
    flex: 1,
  },
  header: {
    flex: 9,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
