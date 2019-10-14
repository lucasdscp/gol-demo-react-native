import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import Login from './Login';
import Airplanes from './Airplanes';
import AuthLoad from './AuthLoad';

const Routes = createStackNavigator(
    {
      Login: Login,
      Airplanes: Airplanes,
      AuthLoad: AuthLoad
    },
    {
      initialRouteName: 'AuthLoad',
      headerMode: 'none',
      mode: 'modal'
    }
);


export default createAppContainer(Routes);