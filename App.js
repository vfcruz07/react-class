import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from './src/components/Header.js';

import axios from 'axios';


export default class App extends React.Component {
  
  constructor(props){
    super(props);
  }

  renderList(){
    /*const names =[
      'Eddie Van Halen',
      'Jimi Hendrix',
      'Chimbinha',
      'Steve Vai',
    ];

    const textElements = names.map((name, index)  => {
    return <Text key={name}>{name}</Text>
    });

    return textElements*/
    axios
    .get('https://randomuser.me/api/?nat=br&results=5')
    .then((response) => {
      const { results } = response.data;
      const names = results.map((people) =>{
        return people.name.first
      });
      console.log(names);
    });
    
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
