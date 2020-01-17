import React, { Component } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity
} from "react-native";
import CommonStyle from "../../../common/CommonStyle";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

class CreateTrip extends Component {
    static navigationOptions = {
        title: 'Create A Trip'
    }
    render() {
        return (
            <View style={CommonStyle.container}>
                <TextInput
                    style={[CommonStyle.inputBox, { textAlign: 'left', width: ('90%') }]}
                    placeholder={'Trip Title'}
                    placeholderTextColor={'#454545'}
                    returnKeyType={'done'}
                    maxLength={16}
                />
                <TextInput
                    style={[CommonStyle.inputBox, { textAlign: 'left', width: ('90%'), marginTop: hp('2%') }]}
                    placeholder={'Date'}
                    placeholderTextColor={'#454545'}
                    returnKeyType={'done'}
                    maxLength={16}
                />
                <TextInput
                    style={[CommonStyle.inputBox, { textAlignVertical: 'top', textAlign: 'left', width: ('90%'), marginTop: hp('2%'), height: hp('40%') }]}
                    placeholder={'Description'}
                    placeholderTextColor={'#454545'}
                    returnKeyType={'done'}
                    maxLength={16}
                />
                <TouchableOpacity style={[CommonStyle.btn, { width: wp('90%'), marginTop: hp('10%') }]}>
                    <Text style={CommonStyle.btn_text}>Next</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
export default CreateTrip;
