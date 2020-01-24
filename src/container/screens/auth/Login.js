import React, { Component } from "react";
import { Image, StatusBar, Text, TextInput, TouchableOpacity, View } from "react-native";
import { LoginManager } from "react-native-fbsdk";
import { GoogleSignin, statusCodes } from 'react-native-google-signin';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import appLogo from '../../../assets/logo_tripper.png';
import { darkGrey } from "../../../common/Colors";
import CommonStyle from "../../../common/CommonStyle";
import LocalStorage from '../../../common/LocalStorage';
import Utils from '../../../common/Utils';
import firebase from 'react-native-firebase';
class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            phone: ''
        }
    }
    componentDidMount() {
        GoogleSignin.configure({
            webClientId: '728043635483-m906088bogfnese040hrbbdnepmt05id.apps.googleusercontent.com'
        });
    }

    loginGoogle = async () => {
        try {
            const userInfo = await GoogleSignin.signIn();
            console.log('userInfo=>', userInfo);
            LocalStorage.save('isLogin', true);
            LocalStorage.save('userType', 'google');
            this.props.navigation.navigate('Dashboard')
        } catch (error) {
            if (error.code === statusCodes.SIGN_IN_REQUIRED) {
                // user has not signed in yet
                console.log('error SIGN_IN_REQUIRED=>', error)
            } else {
                // some other error
                console.log('error else=>', error)
            }
        }
    }

    loginFacebook = () => {
        LoginManager.logInWithPermissions(["public_profile"]).then(
            function (result) {
                if (result.isCancelled) {
                    console.log("Login cancelled");
                } else {
                    console.log(
                        "Login success with permissions: " +
                        result.grantedPermissions.toString()
                    );
                    LocalStorage.save('isLogin', true);
                    LocalStorage.save('userType', 'facebook');
                    this.props.navigation.navigate('Dashboard');
                }
            },
            function (error) {
                console.log("Login fail with error: " + error);
            }
        );
    }

    checkNumber = (num) => {
        Utils.onChangeNumber(num);
    }

    loginPhone = () => {
        const {phone} = this.state;
        let phoneNumber = '+91' + phone

        firebase.auth().signInWithPhoneNumber(phoneNumber)
            .then(res => this.successLogin(res))
            .catch(error => console.log('error=>', error));
    }

    successLogin = (res) => {
        console.log('Success login=>',res)
        this.props.navigation.navigate('OTP',{cnf:res});
    }

    render() {

        return (
            <View style={CommonStyle.container}>
                <StatusBar barStyle='dark-content' />
                <Image source={appLogo} style={{ top: hp('5%') }} />
                <View style={{ top: hp('10%'), alignItems: 'center', flex: 1, width: wp('80%') }}>
                    <Text style={[CommonStyle.heading]}>Login</Text>
                    <TextInput
                        style={CommonStyle.inputBox}
                        placeholder={'Enter your Phone Number'}
                        onChangeText={(phone) => this.setState({phone})}
                        value={this.state.phone}
                        placeholderTextColor={darkGrey}
                        returnKeyType={'done'}
                        keyboardType={'number-pad'}
                        maxLength={10}
                    />
                    <TouchableOpacity style={CommonStyle.btn}
                        onPress={() => this.loginPhone()}>
                        <Text style={CommonStyle.btn_text}>Login</Text>
                    </TouchableOpacity>
                    <View style={{ alignItems: 'center', marginTop: hp('5%') }}>
                        <Text style={CommonStyle.heading}>or</Text>
                        <Text style={CommonStyle.heading}>login with</Text>
                    </View>
                    <View style={{ alignItems: 'center', marginTop: hp('5%') }}>
                        <TouchableOpacity style={[CommonStyle.btn, { borderRadius: 5, backgroundColor: '#d44638' }]}
                            onPress={() => this.loginGoogle()}>
                            <Text style={CommonStyle.btn_text}>Google</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[CommonStyle.btn, { borderRadius: 5, backgroundColor: '#3b5998' }]}
                            onPress={() => this.loginFacebook()}>
                            <Text style={CommonStyle.btn_text}>Facebook</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}
export default Login;
