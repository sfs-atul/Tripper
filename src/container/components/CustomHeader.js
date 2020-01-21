import { Body, Button, Header, Icon, Left, Right, Title } from "native-base";
import React, { Component } from "react";
import { withNavigation } from 'react-navigation';

class CustomHeader extends Component {
    render() {
        return (
            <Header style={{ backgroundColor: '#00a4ccff' }}>
                <Left>
                    <Button transparent onPress={this.props.onLeftPress}>
                        <Icon name={this.props.icon} style={{ color: '#fff', left: 10 }} />
                    </Button>
                </Left>
                <Body style={{ flex: 2 }}>
                    <Title style={{ color: '#fff', fontSize: 20, fontWeight: 'normal' }}>{this.props.title}</Title>
                </Body>
                <Right>
                <Button transparent onPress={this.props.onRightPress}>
                        <Icon name={this.props.RightIcon} style={{ color: '#fff', }} />
                    </Button>
                </Right>
            </Header>
        );
    }
}
export default withNavigation(CustomHeader);