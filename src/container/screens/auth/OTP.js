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
import CustomHeader from '../../components/CustomHeader';
import { Container } from "native-base";
import LocalStorage from '../../../common/LocalStorage';
import firebase from 'react-native-firebase';

class OTP extends Component {

    constructor(props) {
        super(props);
        this.state = {
            otp: '',
            cnf: this.props.navigation.getParam("cnf")
        }
    }

    confirmOtp = () => {
        const { otp, cnf } = this.state;

        cnf.confirm(otp)
            .then(res => this.successOtp(res))
            .catch(error => console.log('errorOtp=>', error))
    }

    successOtp = (res) => {
        console.log('successOtp=>', res)
        LocalStorage.save('userType', 'phone');
        LocalStorage.save('isLogin', true);
        this.props.navigation.navigate('Dashboard');
    }


    render() {
        return (
            <Container>
                <CustomHeader icon='arrow-back' title='OTP' onLeftPress={() => this.props.navigation.goBack()} />
                <StatusBar barStyle='dark-content' />
                <View style={{ top: wp('40%'), justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={CommonStyle.heading}>OTP</Text>
                    <TextInput
                        style={CommonStyle.inputBox}
                        placeholder={'Enter OTP'}
                        placeholderTextColor={darkGrey}
                        returnKeyType={'done'}
                        keyboardType={'number-pad'}
                        maxLength={6}
                        onChangeText={(num) => this.setState({ otp : Utils.onChangeNumber(num) })}
                        value={this.state.otp}
                    />
                    <TouchableOpacity style={CommonStyle.btn} onPress={() => this.confirmOtp()}>
                        <Text style={CommonStyle.btn_text}>Submit</Text>
                    </TouchableOpacity>
                </View>
            </Container>
        );
    }
}
export default OTP;
