import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from '../components/Header.js';
import PeopleList from '../components/PeopleList.js';

import axios from 'axios';


export default class PeoplePage extends React.Component {
  static navigationOptions ={
    title: 'Pessoas',
    headerStyle:{
    backgroundColor: '#6ca2f7',
    borderBottonWidth: 1,
    borderBottonColor: '#c5c5c5',
    },
    headerTitleStyle:{
      color: 'white',
      fontSize: 30,
      flexGrow: 1,
      textAlign: 'center',
    }
  };


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
