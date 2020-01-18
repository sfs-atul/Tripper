import React, { Component } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    Platform
} from "react-native";
import { Icon } from 'native-base';
import { withNavigation } from 'react-navigation';
import { colorPrimary } from "../../common/Colors";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import CommonStyle from "../../common/CommonStyle";

class Header extends Component {
    render() {
        return (
            <View style={{ marginTop: (Platform.OS === 'ios') ? 22 : 0, flexDirection: 'row', backgroundColor: colorPrimary, height: hp('6%'), justifyContent: "center", alignItems: "center" }}>
                <TouchableOpacity
                    onPress={this.props.onPress}
                    style={{ marginLeft: 10, position: "absolute", left: 0, alignItems: 'center', justifyContent: 'center', width: wp('15%'), height: hp('6%') }}
                >
                    <Icon name={this.props.IconName} style={{ fontSize: 30, color: '#000' }} />
                </TouchableOpacity>
                <Text style={{ color: '#000', fontSize: 20, fontWeight:'300' }}>{this.props.title}</Text>
            </View>
        );
    }
}
export default withNavigation(Header);