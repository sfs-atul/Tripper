import React, { Component } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity
} from "react-native";
import CommonStyle from "../../../common/CommonStyle";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import CustomHeader from "../../components/CustomHeader";
import { Container } from "native-base";
import { darkGrey } from '../../../common/Colors';
class CreateTrip extends Component {

    render() {
        return (
            <Container>
                <CustomHeader title='Create New Trip' icon='arrow-back' onLeftPress={() => this.props.navigation.goBack()} />
                <View style={CommonStyle.container}>
                    <TextInput
                        style={[CommonStyle.inputBox, { textAlign: 'left', width: ('90%') }]}
                        placeholder={'Trip Title'}
                        placeholderTextColor={darkGrey}
                        returnKeyType={'done'}
                        maxLength={16}
                    />
                    <TextInput
                        style={[CommonStyle.inputBox, { textAlign: 'left', width: ('90%'), marginTop: hp('2%') }]}
                        placeholder={'Date'}
                        placeholderTextColor={darkGrey}
                        returnKeyType={'done'}
                        maxLength={16}
                    />
                    <TextInput
                        style={[CommonStyle.inputBox, { textAlign: 'left', width: ('90%'), marginTop: hp('2%'), paddingTop: 10, height: hp('40%') }]}
                        multiline={true}
                        placeholder={'Description'}
                        placeholderTextColor={darkGrey}
                        returnKeyType={'done'}
                        maxLength={100}
                    />
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('AddParticipants')} style={[CommonStyle.btn,{ width: wp('90%'), top: hp('15%') }]}>
                        <Text style={CommonStyle.btn_text}>Next</Text>
                    </TouchableOpacity>
                </View>
            </Container>
        );
    }
}
export default CreateTrip;
