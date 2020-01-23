import React, { Component } from 'react';
import {
	Text,
	View,
	TouchableOpacity,
	ScrollView,
} from 'react-native';

import { DrawerItems } from 'react-navigation-drawer';
import CommonStyle from '../../common/CommonStyle';
import { Thumbnail, Icon } from 'native-base';
import ProfilePic from '../../assets/dummy_profile.jpg'
import { colorPrimary, white } from '../../common/Colors';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { GoogleSignin } from 'react-native-google-signin';


export default class DrawerContent extends Component {

	logoutGoogle = async () => {
		try {
			await GoogleSignin.revokeAccess();
			await GoogleSignin.signOut();
		} catch (error) {
			console.error(error);
		}
	}
	logoutFacebook = async () => {
		try {
			await GoogleSignin.revokeAccess();
			await GoogleSignin.signOut();
		} catch (error) {
			console.error(error);
		}
	}
	logout = (userType) => {
		if (userType == 'google') {
			this.logoutGoogle();
		}else if(userType == 'facebook'){
			this.logoutFacebook();
		}else{

		}
	}

	render() {
		return (

			<ScrollView style={{ flex: 1, backgroundColor: colorPrimary }}>
				<View style={{ backgroundColor: colorPrimary, marginTop: 22 }}>
					<View>
						<View style={{ alignItems: 'flex-end', marginEnd: 10 }}>
							<TouchableOpacity onPress={() => this.props.navigation.closeDrawer()}>
								<Icon name='close' style={{ fontSize: 32, color: white }} />
							</TouchableOpacity>
						</View>
						<View style={{ position: 'absolute', marginTop: hp('3%'), marginStart: 15 }}>
							<Thumbnail large source={ProfilePic} />
						</View>
						<View style={{ marginTop: hp('10%'), marginStart: 20 }}>
							<Text style={{ color: white, fontSize: hp('2.5%'), fontWeight: 'bold' }}>{'User Name'}</Text>
							<Text style={{ color: white }}>{'+91-8354653321'}</Text>
						</View>
						<View style={CommonStyle.divider} />
						<View>
							<DrawerItems {...this.props} />
						</View>
					</View>
					<View>
						<TouchableOpacity style={{ marginStart: 15, marginTop:5 }} onPress={()=>this.logoutGoogle()}>
							<Text style={{ fontSize: 14, color: white, fontWeight: '700' }}>Logout</Text>
						</TouchableOpacity>
					</View>
				</View>
			</ScrollView>

		);

	}

} /// End class