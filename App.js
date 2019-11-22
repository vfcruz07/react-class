import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from './src/components/Header.js';

/*renderList(){
  const names =[
    'Eddie Van Halen',
    'Jimi Hendrix',
    'Chimbinha',
    'Steve Vai',
  ];

}*/

const a = 1;

export default class App extends React.Component {  
  render(){
    return (
      <View>
        <Header title='Pessoas 1!'></Header>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    );  
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
