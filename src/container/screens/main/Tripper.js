import React, { Component } from "react";
import {
    View,
    Text,
} from "react-native";
import CommonStyle from '../../../common/CommonStyle'
import { Button, Icon, Fab } from 'native-base';
import { withNavigation } from 'react-navigation';
import { colorPrimary, secondPrimary, white, black, darkGrey } from '../../../common/Colors';

class TripperScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            active: false
        };
        console.log('props=>', props)
    }

    createTrip = () => {
        this.props.navigation.navigate('CreateTrip')
    }

    render() {
        return (
            <View style={[CommonStyle.container, { backgroundColor: white }]}>
                <View style={CommonStyle.container_center}>
                    <Text style={[CommonStyle.heading, { color: darkGrey }]}>No Trip yet</Text>
                    <Text style={[CommonStyle.heading, { color: darkGrey }]}>Let's go somewhere!</Text>
                </View>
                <Fab
                    direction="up"
                    style={{ backgroundColor: secondPrimary }}
                    position="bottomRight"
                    // onPress={() => this.setState({ active: !this.state.active })}>
                    onPress={() => this.createTrip()}>
                    <Icon name="add" style={{ fontSize: 30, color: white }} />
                </Fab>
            </View>
        );
    }
}
export default withNavigation(TripperScreen);
