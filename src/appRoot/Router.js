import { createSwitchNavigator } from 'react-navigation';
import AuthRoot from './AuthRoot';
import MainRoot from './MainRoot';

export const createRootNavigator = (isLogin) => {

    console.log('isLogin=>', isLogin);
    return createSwitchNavigator(
        {
            LoginRoot: { screen: AuthRoot() },
            MainRoot: { screen: MainRoot(isLogin) }
        },
        {
            initialRouteName: (!isLogin) ? "LoginRoot" : "MainRoot"
        }
    )
}