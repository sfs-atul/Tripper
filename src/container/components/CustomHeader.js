import { Body, Button, Header, Icon, Left, Right, Title } from "native-base";
import React, { Component } from "react";
// import { Icon } from 'native-base';
import { withNavigation } from 'react-navigation';

class CustomHeader extends Component {
    render() {
        return (
            <Header style={{ backgroundColor: '#00a4ccff' }}>
                <Left>
                    <Button transparent onPress={this.props.onPress}>
                        <Icon name={this.props.icon} style={{ color: '#fff', left: 10 }} />
                    </Button>
                </Left>
                <Body>
                    <Title style={{ color: '#fff', fontSize: 20, fontWeight: 'normal',width:'100%',backgroundColor:'red' }}>{this.props.title}</Title>
                </Body>
                <Right />
            </Header>
        );
    }
}
export default withNavigation(CustomHeader);