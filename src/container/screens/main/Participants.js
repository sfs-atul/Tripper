import React, { Component } from "react";
import {
    View,
    Text,
    FlatList,
    TouchableOpacity
} from "react-native";
import { darkGrey, white } from "../../../common/Colors";
import ProfilePic from '../../../assets/dummy_profile.jpg'
import CommonStyle from "../../../common/CommonStyle";
import {Thumbnail, Container } from "native-base";
import { withNavigation } from "react-navigation";


const usersList = [
    {
        name: 'First User',
        number: 'INR 0.00 (0.00)'
    },
    {
        name: 'Second User',
        number: 'INR 0.00 (0.00)'
    },
]
class Participants extends Component {

    renderUsers = () => {
        let users;
        users = <FlatList
            keyExtractor={(item, index) => index.toString()}
            data={usersList}
            renderItem={({ item, index }) =>
                <TouchableOpacity key={index} onPress={() => this.props.navigation.navigate('AddExpenses')} style={{ flexDirection: 'row', paddingHorizontal: 10 }}>
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
            <Container>
                {this.renderUsers()}
            </Container>
        );
    }
}
export default withNavigation(Participants);