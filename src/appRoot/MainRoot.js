import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import Dashboard from "../container/screens/main/Dashboard";
import Profile from "../container/screens/main/Profile";
import DrawerContent from '../container/components/DrawerContent';

const MainStackNavigator = createStackNavigator(
    {
        Dashboard: { screen: Dashboard},
        Profile: { screen: Profile },
    },
    {
        initialRouteName: "Main",
        navigationOptions: {
            gesturesEnabled: false,
        }
    }
);

const DrawerNavigator = createDrawerNavigator(
    {
        Dashboard: { screen: Dashboard},
        Profile: { screen: Profile },
    },
    {
        drawerPosition: "left",
        drawerLockMode: "locked-closed",
    }, {
    contentComponent: DrawerContent,
    contentOptions: {
        activeTintColor: '#fff',
        inactiveTintColor: '#ccc',
    },
}
);

export default (MainRoot = () => {
    return createStackNavigator(
        {
            Dashboard: DrawerNavigator,
            Main: MainStackNavigator,
        },
        {
            initialRouteName: "Dashboard",
            navigationOptions: {
                gestureEnabled: false,
            }
        }
    );
});