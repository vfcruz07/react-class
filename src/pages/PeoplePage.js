import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from '../components/Header.js';
import PeopleList from '../components/PeopleList.js';

import axios from 'axios';




export default class PeoplePage extends React.Component {
  
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
    //this.props.navigation.navigate(chave da pagina, state)
    
    return (
      <View>
        <PeopleList 
          peoples={this.state.peoples}
            onPressItem={(pageParams) => {
              return(this.props.navigation.navigate('PeopleDetail', pageParams));
            }    
          }  
        ></PeopleList>
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
