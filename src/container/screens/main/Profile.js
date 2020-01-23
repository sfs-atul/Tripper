import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";
import { Container, Tab, Tabs, Thumbnail } from 'native-base';
import CustomHeader from '../../components/CustomHeader';
import { secondPrimary, colorPrimary, white } from '../../../common/Colors';
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import CommonStyle from "../../../common/CommonStyle";
import ProfilePic from '../../../assets/dummy_profile.jpg'
class Profile extends Component {
    render() {
        return (
            <Container>
                <CustomHeader icon='menu' title='Profile' onLeftPress={() => this.props.navigation.openDrawer()} />
                <View style={{ backgroundColor: colorPrimary, height: hp('45%'), alignItems: 'center', justifyContent: 'center' }}>
                    <Thumbnail style={{ height: 150, width: 150, borderRadius: 150 / 2 }} source={ProfilePic} />
                    <Text style={{ fontWeight: 'bold', fontSize: hp('3%'), marginTop: hp('10%') }}>{'User Name'}</Text>
                </View>
                <View style={{ alignItems: 'center', marginTop: 30 }}>
                    <Text style={CommonStyle.heading}>Phone Number</Text>
                    <Text style={[CommonStyle.heading, { marginTop: 20 }]}>Email Address</Text>
                </View>
            </Container>
        );
    }
}
export default Profile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});