import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";
import CommonStyle from '../../../common/CommonStyle'

class KharchaScreen extends Component {
    render() {
        return (
            <View style={[CommonStyle.container_center,{backgroundColor:'#fff'}]}>
                <Text>Kharcha</Text>
            </View>
        );
    }
}
export default KharchaScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});