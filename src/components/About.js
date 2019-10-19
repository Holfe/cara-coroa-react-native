import React from 'react';
import { Text } from 'react-native';

export default class About extends React.Component {
  render() {
    return (
      <Text style={{ flex: 1, backgroundColor: '#61bd8c' }}>
        Informações sobre o jogo.
      </Text>
    );
  }
};
