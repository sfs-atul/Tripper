import { createStackNavigator } from 'react-navigation-stack';

import Login from '../container/screens/auth/Login';
import OTP from '../container/screens/auth/OTP';

export default AuthRoot = () => {
    return createStackNavigator(
        {
            Login: { screen: Login },
            OTP: { screen: OTP },
        },
        {
            initialRouteName: "Login",
            
            defaultNavigationOptions: {
               // headerShown: false,
                gestureEnabled: false,
            },
        }
    )
}