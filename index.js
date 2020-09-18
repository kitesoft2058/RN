/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import BottomTabMain from './BottomTabMain';
import Main from './Main';

// AppRegistry.registerComponent(appName, () => App);

// 1. 시작  및 StackNavigator 연습
// AppRegistry.registerComponent(appName, () => Main);

//2. BottomTabNavigator 연습
AppRegistry.registerComponent(appName, () => BottomTabMain);
