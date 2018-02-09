import { Navigation } from 'react-native-navigation';

import Login from '../../src/containers/Login';

export function registerScreens(store, Provider) {
    Navigation.registerComponent('Login', () => Login, store, Provider);
}
