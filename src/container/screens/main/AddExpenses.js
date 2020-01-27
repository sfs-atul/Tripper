import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    ScrollView,
    CheckBox
} from "react-native";
import Modal from "react-native-modal";
import ProfilePic from '../../../assets/dummy_profile.jpg'
import { Thumbnail, Container, Icon, Item, Input, Switch } from 'native-base'
import CommonStyle from "../../../common/CommonStyle";
import { darkGrey, white, greyText } from '../../../common/Colors';
import CustomHeader from '../../components/CustomHeader';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

class AddExpenses extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isModal: false
        }
    }

    renderModal = () => {
        let modal;
        modal =
            <Modal isVisible={this.state.isModal}>
                <View style={{ alignSelf: 'center', paddingHorizontal: 15, backgroundColor: white, height: hp('35%'), width: wp('70%') }}>
                    <Text style={[CommonStyle.heading, { marginTop: 20 }]}>Select Participants</Text>
                    <View style={{ top: 20, }}>


                        <View style={{ flexDirection: 'row', marginVertical: 10 }}>
                            <CheckBox value={false} style={{ height: 20, width: 20, borderColor: darkGrey, marginRight: 10 }} />
                            <Text>First Name</Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginVertical: 10 }}>
                            <CheckBox value={false} style={{ height: 20, width: 20, borderColor: darkGrey, marginRight: 10 }} />
                            <Text>First Name</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: hp('10%'), alignSelf: 'flex-end' }}>
                        <TouchableOpacity onPress={() => this.setState({ isModal: !this.state.isModal })}
                            style={{ paddingHorizontal: 20 }}><Text style={CommonStyle.heading}>Cancel</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.setState({ isModal: !this.state.isModal })}>
                            <Text style={CommonStyle.heading}>Ok</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        return modal;
    }
    render() {
        return (
            <Container>
                <CustomHeader icon='arrow-back' leftTitle={'Add Expense'} headerLeft={true} onLeftPress={() => this.props.navigation.goBack()} />
                <ScrollView>
                    <View style={{ flexDirection: 'row', paddingHorizontal: 10 }}>
                        <View>
                            <Thumbnail large source={ProfilePic} />
                        </View>
                        <View style={{ justifyContent: 'center' }}>
                            <Text>{'First Name'}</Text>
                            <Text style={{ color: darkGrey }}>{'0.00'}</Text>
                        </View>
                    </View>
                    <View style={{ alignItems: 'center', paddingHorizontal: 10 }}>
                        <TextInput
                            style={[CommonStyle.inputBox, { textAlign: 'left', width: wp('90%'), marginTop: hp('2%') }]}
                            placeholder={'Expense title'}
                            placeholderTextColor={darkGrey}
                            returnKeyType={'done'}
                            maxLength={16}
                        />
                    </View>
                    <View style={{ flexDirection: 'row', paddingHorizontal: 20 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <TextInput
                                style={[CommonStyle.inputBox, { alignSelf: 'center', textAlign: 'left', width: wp('70%'), marginTop: hp('2%') }]}
                                placeholder={'Select Category'}
                                placeholderTextColor={darkGrey}
                                returnKeyType={'done'}
                                maxLength={16}
                                editable={false}
                            />
                            <TouchableOpacity
                                style={{ padding: 20, alignItems: 'center', justifyContent: 'center', right: 50, top: 10 }}>
                                <Icon name="md-arrow-dropdown" style={{ fontSize: 16, alignSelf: 'center', justifyContent: 'center' }} />
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity
                                style={{ padding: 20, alignItems: 'center', justifyContent: 'center', top: 10 }}>
                                <Icon name="add" style={{ right: 10, fontSize: 32, alignSelf: 'center', justifyContent: 'center' }} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ alignItems: 'center', paddingHorizontal: 10 }}>
                        <TextInput
                            style={[CommonStyle.inputBox, { textAlign: 'left', width: wp('90%'), marginTop: hp('2%') }]}
                            placeholder={'Date'}
                            placeholderTextColor={darkGrey}
                            returnKeyType={'done'}
                            maxLength={16}
                        />
                    </View>
                    <View style={{ alignItems: 'center', paddingHorizontal: 10 }}>
                        <TextInput
                            style={[CommonStyle.inputBox, { textAlign: 'left', width: wp('90%'), marginTop: hp('2%') }]}
                            placeholder={'Mode of Payment'}
                            placeholderTextColor={darkGrey}
                            returnKeyType={'done'}
                            maxLength={16}
                        />
                    </View>
                    <View style={{ alignItems: 'center', paddingHorizontal: 10 }}>
                        <TextInput
                            style={[CommonStyle.inputBox, { textAlign: 'left', width: wp('90%'), marginTop: hp('2%') }]}
                            placeholder={'Enter Amount'}
                            placeholderTextColor={darkGrey}
                            returnKeyType={'done'}
                            maxLength={16}
                        />
                    </View>
                    <View
                        style={{ flexDirection: "row", justifyContent: 'space-between', marginTop: 20, alignItems: 'center', paddingHorizontal: 20 }}>
                        <Text style={CommonStyle.heading}>Expense share by all</Text>
                        <Switch value={true} />
                    </View>
                    <TouchableWithoutFeedback
                        onPress={() => this.setState({ isModal: !this.state.isModal })}
                        style={{ flexDirection: "row", justifyContent: 'space-between', marginTop: 20, alignItems: 'center', paddingHorizontal: 20 }}>
                        <Text style={CommonStyle.heading}>Select Participants</Text>
                        <Icon name='md-arrow-dropright' style={{ fontSize: 20 }} />
                    </TouchableWithoutFeedback>
                    <TouchableOpacity style={{ flexDirection: 'row', padding: 10, }}>
                        <View>
                            <Thumbnail small source={ProfilePic} />
                        </View>
                        <View style={{ justifyContent: 'center' }}>
                            <Text>{'First Name'}</Text>
                            <Text style={{ color: darkGrey }}>{'+9156435145'}</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flexDirection: 'row', padding: 10, }}>
                        <View>
                            <Thumbnail small source={ProfilePic} />
                        </View>
                        <View style={{ justifyContent: 'center' }}>
                            <Text>{'First Name'}</Text>
                            <Text style={{ color: darkGrey }}>{'+9156435145'}</Text>
                        </View>
                    </TouchableOpacity>
                </ScrollView>
                <TouchableOpacity onPress={() => alert('Saved!')} style={[CommonStyle.btn, { alignSelf: 'center', paddingHorizontal: 10, width: wp('90%'), marginBottom: hp('2%') }]}>
                    <Text style={CommonStyle.btn_text}>Save Expenses</Text>
                </TouchableOpacity>
                {this.renderModal()}
            </Container>
        );
    }
}
export default AddExpenses;