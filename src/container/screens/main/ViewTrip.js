import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";
import { Container, Tab, Tabs } from 'native-base';
import CustomHeader from '../../components/CustomHeader';
import Participants from '../main/Participants';
import Expenses from '../main/Expenses';
import { secondPrimary, colorPrimary, white } from '../../../common/Colors';
import moreIcon from '../../../assets/more.png'
class ViewTrip extends Component {
    render() {
        return (
            <Container>
                <CustomHeader icon='arrow-back' leftTitle={'Trip to Delhi'} RightIcon='md-more' headerLeft={true} onLeftPress={() => this.props.navigation.goBack()} leftDate={'Jan 31, 2020'} />
                <Tabs tabBarUnderlineStyle={{ backgroundColor: secondPrimary }}>
                    <Tab heading="Participants"
                        textStyle={{ color: white, }}
                        tabStyle={{ backgroundColor: colorPrimary }}
                        activeTextStyle={{ color: secondPrimary }}
                        activeTabStyle={{ backgroundColor: colorPrimary }}
                    >
                        <Participants />
                    </Tab>
                    <Tab heading="Expenses"
                        textStyle={{ color: white, }}
                        tabStyle={{ backgroundColor: colorPrimary }}
                        activeTextStyle={{ color: secondPrimary }}
                        activeTabStyle={{ backgroundColor: colorPrimary }}
                    >
                        <Expenses />
                    </Tab>
                </Tabs>
            </Container>
        );
    }
}
export default ViewTrip;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});