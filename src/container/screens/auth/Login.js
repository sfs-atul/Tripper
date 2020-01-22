import React, { Component } from "react";
import {
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    StatusBar
} from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import CommonStyle from "../../../common/CommonStyle";
import appLogo from '../../../assets/logo_tripper.png'
import { darkGrey } from "../../../common/Colors";

class Login extends Component {

    static navigationOptions = {
        headerShown: false
    }

    render() {

        return (
            <View style={CommonStyle.container}>
                 <StatusBar barStyle='dark-content' />
                <Image source={appLogo} style={{ top: hp('5%') }} />
                <View style={{ top: hp('15%'), alignItems: 'center', flex: 1, width: wp('80%') }}>
                    <Text style={[CommonStyle.heading]}>Login</Text>
                    <TextInput
                        style={CommonStyle.inputBox}
                        placeholder={'Enter your Phone Number'}
                        placeholderTextColor={darkGrey}
                        returnKeyType={'done'}
                        keyboardType={'number-pad'}
                        maxLength={10}
                    />
                    <TouchableOpacity style={CommonStyle.btn} onPress={() => this.props.navigation.navigate('OTP')}>
                        <Text style={CommonStyle.btn_text}>Login</Text>
                    </TouchableOpacity>
                    <View style={{ alignItems: 'center', marginTop: hp('8%') }}>
                        <Text style={CommonStyle.heading}>or</Text>
                        <Text style={CommonStyle.heading}>login with</Text>
                    </View>
                    <View style={{ alignItems: 'center', marginTop: hp('8%') }}>
                        <TouchableOpacity style={[CommonStyle.btn, { borderRadius: 5, backgroundColor: '#d44638' }]}>
                            <Text style={CommonStyle.btn_text}>Google</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[CommonStyle.btn, { borderRadius: 5, backgroundColor: '#3b5998' }]}>
                            <Text style={CommonStyle.btn_text}>Facebook</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}
export default Login;
