import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation';

import PeoplePage from './src/pages/PeoplePage.js';

const StackNavigator = createStackNavigator({
  "Main": {
    screen: PeoplePage,
  }
});

const AppContainer = createAppContainer(StackNavigator);
export default AppContainer;


