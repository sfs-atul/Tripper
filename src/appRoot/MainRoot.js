import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import Dashboard from "../container/screens/main/Dashboard";
import Profile from "../container/screens/main/Profile";
import DrawerContent from '../container/components/DrawerContent';
import CreateTrip from '../container/screens/main/CreateTrip';
import AddParticipants from '../container/screens/main/AddParticipants';

const MainStackNavigator = createStackNavigator(
    {
        Dashboard: { screen: Dashboard },
        Profile: { screen: Profile },
    },
    {
        navigationOptions: {
            gestureEnabled: false,
        },
    }
);



const DrawerNavigator = createDrawerNavigator(
    {
        Dashboard: { screen: Dashboard },
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
            CreateTrip: { screen: CreateTrip },
            AddParticipants: { screen: AddParticipants },

        },
        {
            headerMode:false,
            initialRouteName: "AddParticipants",
            navigationOptions: {
                gestureEnabled: false,
            }
        }
    );
});