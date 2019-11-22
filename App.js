import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from './src/components/Header.js';


export default class App extends React.Component {
  
  constructor(props){
    super(props);
  }

  renderList(){
    const names =[
      'Eddie Van Halen',
      'Jimi Hendrix',
      'Chimbinha',
      'Steve Vai',
    ];

    const textElements = names.map((name)  => {
    return <Text>{name}</Text>
    });

    return textElements
  }


  render(){
    return (
      <View>
        <Header title='Pessoas 1!'></Header>
        {this.renderList()}
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
