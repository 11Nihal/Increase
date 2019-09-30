
// import React from 'react'; // Remember to import React
// import { AppRegistry } from 'react-native';
// import { Provider } from 'react-redux';

// import { name as appname } from './app.json';
// import Application from './src/screens/main_screen';
// import configStore from './src/store/config_store';

// const store = configStore();

// const RNRedux = () => (
//     <Provider store={store}>
//         <Application />
//     </Provider>
// );

// AppRegistry.registerComponent(appname, () => RNRedux);



import {AppRegistry} from 'react-native';
import App from './app/index'
// import App from './src/image';

import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
