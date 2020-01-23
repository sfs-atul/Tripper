import React, { Component } from "react";
import {
    View,
    Text,
    FlatList,
    Image,
    TouchableOpacity,
    TextInput
} from "react-native";
import Modal from "react-native-modal";
import CommonStyle from "../../../common/CommonStyle";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import CustomHeader from "../../components/CustomHeader";
import { Container, Thumbnail, Icon } from "native-base";
import ProfilePic from '../../../assets/dummy_profile.jpg'
import { darkGrey, white } from "../../../common/Colors";
import tickIcon from '../../../assets/tick.png';
import cross from '../../../assets/cross.png';
const contactsData = [
    {
        name: 'First User',
        number: '+91974524558'
    },
    {
        name: 'Second User',
        number: '+91974524558'
    },
    {
        name: 'Third User',
        number: '+91974524558'
    },
    {
        name: 'Fourth User',
        number: '+91974524558'
    },
    {
        name: 'Fifth User',
        number: '+91974524558'
    },
    {
        name: 'Sixth User',
        number: '+91974524558'
    },
];
class AddParticipants extends Component {

    constructor(props) {
        super(props)
        this.state = {
            selectedContact: [],
            selectedName: [],
            isModal: false
        }
    }

    onSelect = (item) => {
        const { selectedContact, selectedName } = this.state;
        var addContact = selectedContact, addName = selectedName;

        if (addName.includes(item.name)) {
            var i = addName.indexOf(item.name)
            addContact.splice(i, 1)
            addName.splice(i, 1)
        } else {
            addContact.push(item);
            addName.push(item.name);
        }
        this.setState({ selectedContact: addContact, selectedName: addName })
    }


    renderContacts = () => {
        let contacts;
        contacts = <FlatList
            keyExtractor={(item, index) => index.toString()}
            data={contactsData}
            renderItem={({ item, index }) =>
                <TouchableOpacity key={index} onPress={() => this.onSelect(item, index)} style={{ flexDirection: 'row', paddingHorizontal: 10 }}>
                    <View>
                        <Thumbnail large source={ProfilePic} />
                        {this.state.selectedName.includes(item.name) &&
                            <Image source={tickIcon} style={{ position: 'absolute', height: 20, width: 20, left: 50, top: 55 }} />
                        }
                    </View>
                    <View style={{ justifyContent: 'center' }}>
                        <Text>{item.name}</Text>
                        <Text style={{ color: darkGrey }}>{item.number}</Text>
                    </View>
                </TouchableOpacity>
            }
        />

        return contacts;
    }

    renderSelectedContacts = () => {
        let selectedList;
        selectedList =
            <View>
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    keyExtractor={(item, index) => index.toString()}
                    data={this.state.selectedContact}
                    renderItem={({ item, index }) =>
                        <TouchableOpacity key={index} onPress={() => this.onSelect(item)} style={{ alignSelf: 'flex-start', padding: 10 }}>
                            <View>
                                <Thumbnail large source={ProfilePic} />
                                <Image source={cross} style={{ position: 'absolute', height: 20, width: 20, left: 50, top: 55 }} />
                            </View>
                            <View style={{ alignItems: 'center' }}>
                                <Text>{item.name}</Text>
                            </View>
                        </TouchableOpacity>
                    }
                />
                <View style={CommonStyle.divider} />
            </View>

        return selectedList;
    }

    renderModal = () => {
        let modal;
        modal =
            <Modal isVisible={this.state.isModal}>
                <View style={{ alignSelf: 'center', paddingHorizontal: 15, backgroundColor: white, height: hp('35%'), width: wp('70%') }}>
                    <Text style={[CommonStyle.heading, { marginTop: 20 }]}>App Participants</Text>
                    <TextInput
                        style={[CommonStyle.inputBox, { textAlign: 'left', height: hp('6%'), width: '100%' }]}
                        placeholder={'Name'}
                        placeholderTextColor={darkGrey}
                        returnKeyType={'done'}
                        maxLength={16}
                    />
                    <TextInput
                        style={[CommonStyle.inputBox, { textAlign: 'left', height: hp('6%'), width: '100%', marginTop: hp('2%') }]}
                        placeholder={'Contact Number'}
                        placeholderTextColor={darkGrey}
                        returnKeyType={'done'}
                        maxLength={16}
                    />
                    <View style={{ flexDirection: 'row', marginTop: 40, alignSelf: 'flex-end' }}>
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
        const { selectedContact } = this.state
        return (
            <Container>
                <CustomHeader title='Add Participants' RightIcon='add' icon='arrow-back' onLeftPress={() => this.props.navigation.goBack()} onRightPress={() => this.setState({ isModal: !this.state.isModal })} />
                <View style={{ flex: 1, backgroundColor: white }}>
                    {selectedContact.length > 0 &&
                        this.renderSelectedContacts()
                    }
                    {this.renderContacts()}
                    <TouchableOpacity onPress={() => alert('Created Succesfully!')} style={[CommonStyle.btn, { width: wp('90%'), alignSelf: 'center', marginBottom: hp('2%') }]}>
                        <Text style={CommonStyle.btn_text}>Create Trip</Text>
                    </TouchableOpacity>
                </View>
                {this.renderModal()}
            </Container>
        );
    }
}
export default AddParticipants;