import React, { Component } from "react";
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    FlatList
} from "react-native";
import CommonStyle from '../../../common/CommonStyle'
import { Fab } from 'native-base';
import { withNavigation } from 'react-navigation';
import { colorPrimary, secondPrimary, white, black, darkGrey, greyText } from '../../../common/Colors';
import addIcon from '../../../assets/add.png';
import arrow from '../../../assets/right.png';
const data = [
    { title: 'Trip to Manali', peoples: '2', time: 'Jan 31, 2020', price: '5000.00' },
    { title: 'Trip to Goa', peoples: '2', time: 'Jan 31, 2020', price: '10000.00' },
    { title: 'Trip to Haridwar', peoples: '2', time: 'Jan 31, 2020', price: '2300.00' },
    { title: 'Trip to Shimla', peoples: '2', time: 'Jan 31, 2020', price: '3500.00' }
]
class TripperScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
        };
        console.log('props=>',props)
    }
    renderTripList = () => {
        let list =
            <FlatList
                keyExtractor={(item, index) => index.toString()}
                data={data}
                renderItem={({ item, index }) =>
                    <TouchableOpacity style={CommonStyle.cardView} onPress={() => this.props.navigation.navigate('ViewTrip')}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View>
                                <Text>{item.title}</Text>
                                <Text style={{ marginTop: 5, color: darkGrey }}>{item.peoples} Participant/s</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={{ marginEnd: 20 }}>
                                    <Text>{item.time}</Text>
                                    <Text style={{ color: darkGrey, marginTop: 5, }}>{item.price}</Text>
                                </View>
                                <Image source={arrow} style={{ height: 20, width: 20, alignSelf: 'center' }} />
                            </View>
                        </View>
                    </TouchableOpacity>
                }
            />
        return list;
    }
    render() {
        return (
            <View style={[CommonStyle.container]}>
                {data.length < 1 &&
                    <View style={CommonStyle.container_center}>
                        <Text style={[CommonStyle.heading, { color: darkGrey }]}>No Trip yet</Text>
                        <Text style={[CommonStyle.heading, { color: darkGrey }]}>Let's go somewhere!</Text>
                    </View>
                }
                {this.renderTripList()}
                <Fab
                    direction="up"
                    style={{ backgroundColor: secondPrimary }}
                    position="bottomRight"
                    onPress={() => this.props.navigation.navigate('CreateTrip')}>
                    <Image source={addIcon} style={{ height: 20, width: 20 }} />
                </Fab>
            </View>
        );
    }
}
export default withNavigation(TripperScreen);
