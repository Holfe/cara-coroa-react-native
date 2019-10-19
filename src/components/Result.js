import React from 'react';
import { Image, View, StyleSheet} from 'react-native';

const moedaCara = require('../img/moeda_cara.png');
const moedaCoroa = require('../img/moeda_coroa.png');

export default class Result extends React.Component {
  constructor(props){
    super(props);
    
    this.state = {result : ''};
  }

  componentDidMount(){
    const rand = Math.floor(Math.random() * 2);
    let caraOuCoroa = '';

    if(rand === 0) {
      caraOuCoroa = 'cara';
    } else {
      caraOuCoroa = 'coroa';
    }

    this.setState({'result': caraOuCoroa});
  }

  render() {
    if(this.state.result === 'cara'){
      return (
        <View style={styles.table}>
          <Image style={styles.coin} source={moedaCara} />
        </View>
      );
    } else {
      return (
        <View style={styles.table}>
          <Image style={styles.coin} source={moedaCoroa} />
        </View>
      );
    }
    
  }
};

const styles = StyleSheet.create({
  table: {
  flex: 1,
  backgroundColor: '#61bd8c',
  justifyContent: 'center',
  alignItems: 'center',
  },
  coin: {
    position: 'absolute',
  },
});
