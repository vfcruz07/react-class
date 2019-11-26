import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation';

import PeoplePage from './src/pages/PeoplePage.js';
import PeopleDetailPage from './src/pages/PeopleDetailPage.js'

import {capitalizeFirstLetter} from './src/util';


const StackNavigator = createStackNavigator(
{
  Main: {
     screen: PeoplePage,
  },
  PeopleDetail: {
    screen: PeopleDetailPage,
    navigationOptions:({navigation}) =>{
      const peopleName = capitalizeFirstLetter(navigation.state.params.people.name.first);
      return(
        {
          title: peopleName,
          headerTitleStyle:{
            color: 'white',
            fontSize: 30,
          }
        }
      );      
    },
  }, 
},
{
    initialRouteName: 'Main',
    //headerMode: 'none', /* -- Desabilita o header do StackNavigator  */
    defaultNavigationOptions: {
    title: 'Pessoas',
    headerTintColor: 'white',
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
  }
}
);

const AppContainer = createAppContainer(StackNavigator);
export default AppContainer;


