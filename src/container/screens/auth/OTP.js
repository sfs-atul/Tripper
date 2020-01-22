import React, { Component } from "react";
import {
    View,
    Text,
    StatusBar,
    TextInput,
    TouchableOpacity
} from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import CommonStyle from "../../../common/CommonStyle";
import { darkGrey } from "../../../common/Colors";

class OTP extends Component {
    render() {
        return (
            <View style={CommonStyle.container}>
                <StatusBar barStyle='dark-content' />
                <View style={{ top: wp('40%'), justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={CommonStyle.heading}>OTP</Text>
                    <TextInput
                        style={CommonStyle.inputBox}
                        placeholder={'Enter OTP'}
                        placeholderTextColor={darkGrey}
                        returnKeyType={'done'}
                        keyboardType={'number-pad'}
                        maxLength={4}
                    />
                    <TouchableOpacity style={CommonStyle.btn} onPress={() => this.props.navigation.navigate('OTP')}>
                        <Text style={CommonStyle.btn_text}>Submit</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
export default OTP;
