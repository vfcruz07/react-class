import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation';

import PeoplePage from './src/pages/PeoplePage.js';
import PeopleDetailPage from './src/pages/PeopleDetailPage.js'


const StackNavigator = createStackNavigator(
{
  Main: PeoplePage,
  PeopleDetail: PeopleDetailPage,
},
{
    initialRouteName: 'Main',
    defaultNavigationOptions: {
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
  }
}
);

const AppContainer = createAppContainer(StackNavigator);
export default AppContainer;


