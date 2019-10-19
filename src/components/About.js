import React from 'react';
import {Text} from 'react-native';

export default class About extends React.Component {
  render() {
    return (
      <Text style={{flex: 1, backgroundColor: '#61bd8c'}}>
        This may contain information about the game.
      </Text>
    );
  }
};
