import { Body, Button, Header, Icon, Left, Right, Title, Image } from "native-base";
import React, { Component } from "react";
import { View, Text } from 'react-native';
import { withNavigation } from 'react-navigation';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { white, greyText } from "../../common/Colors";
class CustomHeader extends Component {
    render() {
        return (
            <Header style={{ backgroundColor: '#00a4ccff' }}>
                <Left>
                    <Button transparent onPress={this.props.onLeftPress} style={{ width: wp('15%') }}>
                        <Icon name={this.props.icon} style={{ color: white, left: 10 }} />
                    </Button>
                </Left>
                <Body style={{ flex: 2 }}>
                    {this.props.headerLeft ?
                      <View style={{alignSelf:'flex-start',right:50}}>
                          <Text style={{ color: white, fontSize: 20, fontWeight: 'bold',marginTop:10 }}>{this.props.leftTitle}</Text>
                          <Text style={{ color: white}}>{this.props.leftDate}</Text>
                      </View>
                        :
                        <Title style={{ color: white, fontSize: 20, fontWeight: 'normal' }}>{this.props.title}</Title>
                    }
                </Body>
                <Right>
                    <Button transparent onPress={this.props.onRightPress}>
                        <Icon name={this.props.RightIcon} style={{ color: white }} />
                    </Button>
                </Right>
            </Header >
        );
    }
}
export default withNavigation(CustomHeader);