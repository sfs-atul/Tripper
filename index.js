/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src';
import {name as appName} from './app.json';
import Header  from './src/container/components/Header';

AppRegistry.registerComponent(appName, () => App);
