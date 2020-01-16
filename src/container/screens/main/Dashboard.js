import React, { Component } from 'react';
import { View, Text } from 'react-native';
import CommonStyle from '../../../common/CommonStyle';
import Icon from 'react-native-vector-icons/Ionicons'
class Dashboard extends Component {
    static navigationOptions = {
        headerRight: () => (
          <Button
            onPress={() => alert('This is a button!')}
            title="Info"
            color="#000"
          />
        ),
      };


    componentDidMount = () => {
    }

    render() {
        return (
            <View style={CommonStyle.container_center}>
                <Text>Dashboard</Text>
            </View>
        );
    }
}

export default Dashboard;
