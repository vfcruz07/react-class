import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from './src/components/Header.js';
import PeopleList from './src/components/PeopleList.js';

import axios from 'axios';


export default class App extends React.Component {
  
  constructor(props){
    super(props);

    this.state = {
      peoples: []
    }

  }

  componentDidMount(){
    axios
    .get('https://randomuser.me/api/?nat=br&results=5')
    .then((response) => {
      const { results } = response.data;
      this.setState({
        peoples: results
      });
    });
  }

  render(){
    return (
      <View>
        <Header title='Pessoas 2!'></Header>
        <PeopleList peoples={this.state.peoples}></PeopleList>
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
