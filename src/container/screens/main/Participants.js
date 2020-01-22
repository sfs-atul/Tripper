import React, { Component } from "react";
import {
    View,
    Text,
    FlatList
} from "react-native";
import { darkGrey, white } from "../../../common/Colors";
import ProfilePic from '../../../assets/dummy_profile.jpg'
import CommonStyle from "../../../common/CommonStyle";
import { Container, Thumbnail, Icon } from "native-base";

const users = [
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
    },{
        name: 'Third User',
        number: '+91974524558'
    },
]
class Participants extends Component {

    renderUsers = () => {
        let users;
        users = <FlatList
            keyExtractor={(item, index) => index.toString()}
            data={users}
            renderItem={({ item, index }) =>
                <TouchableOpacity key={index} onPress={() => this.onSelect(item, index)} style={{ flexDirection: 'row', paddingHorizontal: 10 }}>
                    <View>
                        <Thumbnail large source={ProfilePic} />
                    </View>
                    <View style={{ justifyContent: 'center' }}>
                        <Text>{item.name}</Text>
                        <Text style={{ color: darkGrey }}>{item.number}</Text>
                    </View>
                </TouchableOpacity>
            }
        />

        return users;
    }
    render() {
        return (
            <View style={[CommonStyle.container]}>
                {this.renderUsers()}
            </View>
        );
    }
}
export default Participants;