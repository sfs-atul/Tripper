import React, { Component } from 'react';
import TripperScreen from './Tripper';
import UdhaarbattaScreen from './Udhaarbatta';
import KharchaScreen from './Kharcha';

import { Container, Tab, Tabs } from 'native-base';
import CustomHeader from '../../components/CustomHeader';
import { secondPrimary, colorPrimary, white } from '../../../common/Colors';

class Dashboard extends Component {
  render() {
    return (
      <Container>
        <CustomHeader icon='menu' title='Dashboard' />
        <Tabs tabBarUnderlineStyle={{ backgroundColor: secondPrimary }}>
          <Tab heading="Tripper"
            textStyle={{ color: white, }}
            tabStyle={{ backgroundColor: colorPrimary }}
            activeTextStyle={{ color: secondPrimary }}
            activeTabStyle={{ backgroundColor: colorPrimary }}
          >
            <TripperScreen />
          </Tab>
          <Tab heading="Udhaarbatta"
            textStyle={{ color: white, }}
            tabStyle={{ backgroundColor: colorPrimary }}
            activeTextStyle={{ color: secondPrimary }}
            activeTabStyle={{ backgroundColor: colorPrimary }}
          >
            <UdhaarbattaScreen />
          </Tab>
          <Tab heading="Kharcha"
            textStyle={{ color: white, }}
            tabStyle={{ backgroundColor: colorPrimary}}
            activeTextStyle={{ color: secondPrimary}}
            activeTabStyle={{ backgroundColor: colorPrimary }}
          >
            <KharchaScreen />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
export default Dashboard;

