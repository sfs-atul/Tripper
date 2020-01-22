import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

class Expenses extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Expenses</Text>
            </View>
        );
    }
}
export default Expenses;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});