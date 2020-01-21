import React, { Component } from "react";
import {
    View,
    Text,
    FlatList,
    Image
} from "react-native";
import CommonStyle from "../../../common/CommonStyle";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import CustomHeader from "../../components/CustomHeader";
import { Container, Thumbnail, Icon } from "native-base";
import ProfilePic from '../../../assets/dummy_profile.jpg'
import { greyText, darkGrey } from "../../../common/Colors";
import tickIcon from '../../../assets/tick.png';
import cross from '../../../assets/cross.png';
class AddParticipants extends Component {

    constructor(props) {
        super(props)
        this.state = {
            contacts: [
                {
                    'name': 'First User',
                    'number': '+91974524558'
                },
                {
                    'name': 'Second User',
                    'number': '+91974524558'
                },
                {
                    'name': 'Third User',
                    'number': '+91974524558'
                },

            ]
        }
    }


    renderContacts = () => {
        let added;
        added = <FlatList
            keyExtractor={(item, index) => index.toString()}
            data={this.state.contacts}
            renderItem={({ item }) =>
                <View style={{ flexDirection: 'row', width: wp('90%') }}>
                    <Thumbnail large source={ProfilePic} />
                    <View style={{ justifyContent: 'center' }}>
                        <Text style={{ fontWeight: '500' }}>{item.name}</Text>
                        <Text style={{ color: darkGrey }}>{item.number}</Text>
                    </View>
                </View>
            }
        />

        return added;
    }

    render() {
        return (
            <Container>
                <CustomHeader title='Add Participants' RightIcon='add' icon='arrow-back' onLeftPress={() => this.props.navigation.goBack()} />
                <View style={CommonStyle.container}>
                    <View style={{ flexDirection: 'row', width: wp('90%') }}>
                        <View>
                            <Thumbnail large source={ProfilePic} />
                            <Image source={tickIcon} style={{position:'absolute', height:20, width:20}}/>
                        </View>
                        <View style={{ justifyContent: 'center' }}>
                            <Text style={{ fontWeight: '500' }}>Name</Text>
                            <Text style={{ color: darkGrey }}>Number</Text>
                        </View>
                    </View>
                </View>
            </Container>
        );
    }
}
export default AddParticipants;