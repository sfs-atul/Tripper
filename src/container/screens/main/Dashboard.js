import React, { Component } from 'react';
import TripperScreen from './Tripper';
import UdhaarbattaScreen from './Udhaarbatta';
import KharchaScreen from './Kharcha';

import { Container, Tab, Tabs } from 'native-base';
import CustomHeader from '../../components/CustomHeader';

class Dashboard extends Component {
  render() {
    return (
      <Container>
        <CustomHeader icon='menu' title='Dashboard' />
        <Tabs tabBarUnderlineStyle={{ backgroundColor: '#f95700ff' }}>
          <Tab heading="Tripper"
            textStyle={{ color: '#fff', }}
            tabStyle={{ backgroundColor: '#00a4ccff' }}
            activeTextStyle={{ color: '#f95700ff' }}
            activeTabStyle={{ backgroundColor: '#00a4ccff' }}
          >
            <TripperScreen />
          </Tab>
          <Tab heading="Udhaarbatta"
            textStyle={{ color: '#fff', }}
            tabStyle={{ backgroundColor: '#00a4ccff' }}
            activeTextStyle={{ color: '#f95700ff' }}
            activeTabStyle={{ backgroundColor: '#00a4ccff' }}
          >
            <UdhaarbattaScreen />
          </Tab>
          <Tab heading="Kharcha"
            textStyle={{ color: '#fff', }}
            tabStyle={{ backgroundColor: '#00a4ccff' }}
            activeTextStyle={{ color: '#f95700ff' }}
            activeTabStyle={{ backgroundColor: '#00a4ccff' }}
          >
            <KharchaScreen />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
export default Dashboard;

