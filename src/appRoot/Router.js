import { createSwitchNavigator } from 'react-navigation';
import AuthRoot from './AuthRoot';
import MainRoot from './MainRoot';

export const createRootNavigator = (isLogin) => {

    console.log('isLogin Router=>', isLogin);
    return createSwitchNavigator(
        {
            LoginRoot: { screen: AuthRoot() },
            MainRoot: { screen: MainRoot() }
        },
        {
            initialRouteName: (!isLogin) ? "LoginRoot" : "MainRoot"
        }
    )
}