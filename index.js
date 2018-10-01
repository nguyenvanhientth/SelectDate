/** @format */

import {AppRegistry} from 'react-native';
import {Platform} from 'react-native'
import {name as appName} from './app.json';
import SelectDate from './component/SelectDate';
import dateAndroid from './component/dateAndroid';
import dateIOS from './component/dateIOS';

const Is_Android = Platform.OS === 'android';

AppRegistry.registerComponent(appName, () => SelectDate);
