import {
  createStackNavigator,
} from 'react-navigation';
import LoginScreen from './Screens/LoginScreen';
import HomeScreen from './Screens/HomeScreen';
import MathScreen from './Screens/MathScreen';
import CroScreen from './Screens/CroScreen';
import NatureScreen from './Screens/NatureScreen';

const App = createStackNavigator({
  LoginScreen: { screen: LoginScreen },
  HomeScreen: { screen: HomeScreen },
  MathScreen: { screen: MathScreen },
  CroScreen: { screen: CroScreen },
  NatureScreen: { screen: NatureScreen },

},
{
initialRouteName: 'LoginScreen',
}
);

export default App;