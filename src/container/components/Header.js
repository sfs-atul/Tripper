import React, { Component } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    Platform
} from "react-native";
import { Icon } from 'native-base';
import { colorPrimary } from "../../common/Colors";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";

class Header extends Component {
    render() {
        return (
            <View style={{ marginTop: (Platform.OS === 'ios') ? 33 : 0, flexDirection: 'row', backgroundColor: colorPrimary, height: hp('6%'), justifyContent: "center", alignItems: "center" }}>
                <TouchableOpacity
                    onPress={this.props.onPress}
                    style={{ marginLeft: 10, position: "absolute", left: 0, alignItems: 'center', justifyContent: 'center', width: wp('15%'), height: hp('6%') }}
                >
                    <Icon name="arrow-back" style={{ fontSize: 35, color: '#000' }} />
                </TouchableOpacity>
                <Text style={{ color: '#000', fontSize: 25 }}>Dashboard</Text>
            </View>
        );
    }
}
export default Header;