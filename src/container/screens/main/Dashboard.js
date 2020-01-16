import React, { Component } from 'react';
import { View, Text } from 'react-native';
import CommonStyle from '../../../common/CommonStyle';
import Icon from 'react-native-vector-icons/Ionicons';

class Dashboard extends Component {
    static navigationOptions = {
        headerLeft: () => (
            <Icon name='ios-menu' size={30} />
        ),
    }

    componentDidMount = () => {
    }

    render() {
        return (
            <View style={CommonStyle.container}>
                <Text>Dashboard</Text>
            </View>
        );
    }
}

export default Dashboard;
