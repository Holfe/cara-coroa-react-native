import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

const logo = require('../img/logo.png');
const btnJogar = require('../img/botao_jogar.png');
const btnSobre = require('../img/sobre_jogo.png');
const btnOutros = require('../img/outros_jogos.png');

const Menu = () => {
  return (
    <View style={styles.body}>
      <View style={styles.header}>
        <View>
          <Image source={logo} />
          <Image source={btnJogar} />
        </View>
        <View style={styles.footer}>
          <Image source={btnSobre} />
          <Image source={btnOutros} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#61bd8c',
  },
  header: {
    flex: 9,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'space-between',
  },
});

export default Menu;
