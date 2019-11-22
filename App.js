import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from './src/components/Header.js';

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

  renderList(){
    const textElements = this.state.peoples.map((people) =>{
      const {first} = people.name;  
      return <Text key={first}>{first}</Text>;
    });

    return textElements;
    
    
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
