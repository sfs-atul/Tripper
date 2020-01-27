import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import Dashboard from "../container/screens/main/Dashboard";
import Profile from "../container/screens/main/Profile";
import DrawerContent from '../container/components/DrawerContent';
import CreateTrip from '../container/screens/main/CreateTrip';
import AddParticipants from '../container/screens/main/AddParticipants';
import ViewTrip from '../container/screens/main/ViewTrip';
import { Dimensions } from 'react-native';
import { white, greyText, secondPrimary } from "../common/Colors";
import AddExpenses from "../container/screens/main/AddExpenses";
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
        contentComponent: DrawerContent,
        drawerWidth: Dimensions.get('window').width - 150,
        contentOptions: {
            activeTintColor: secondPrimary,
            inactiveTintColor: white,
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
            ViewTrip: { screen: ViewTrip },
            AddExpenses: {screen: AddExpenses}
        },
        {
            headerMode: false,
            initialRouteName: "Dashboard",
            navigationOptions: {
                gestureEnabled: false,
            }
        }
    );
});