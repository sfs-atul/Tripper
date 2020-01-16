import React, { Component } from 'react';

import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	ScrollView,
	AsyncStorage,
	Platform
} from 'react-native';

import { DrawerItems } from 'react-navigation';


export default class DrawerContent extends Component {

	render() {
		return (

			<ScrollView style={{ flex: 1 }}>
				<View style={styles.container}>
					<View>
						<View style={styles.header}>
							<Text style={styles.app_heading}>Tripper</Text>
						</View>
						<DrawerItems {...this.props} />
						<TouchableOpacity style={styles.btn_modal}>
							<Text style={styles.btn_text_modal}>Profile</Text>
						</TouchableOpacity>
					</View>
					<View>
						<TouchableOpacity style={styles.nav_item}>
							<Text style={styles.nav_text}>Logout</Text>
						</TouchableOpacity>

						<View style={styles.footer}>
							<Text style={styles.copyright}>All rights reserved.</Text>
							<Text style={styles.copyright}>V: {GLOBAL.CURRENT_APP_VERSION}</Text>
						</View>
					</View>
				</View>
			</ScrollView>

		);

	}



	logout = () => {
		getApi(GLOBAL.LOGOUT, {}, this.successLogout, this.errorLogout);
	}

	successLogout = (response) => {
		console.log("logout response : ", response);
		if (response.data.status == 200) {
			AsyncStorage.removeItem('@loyaltechs_settings');

			GLOBAL.EMAIL = '';
			GLOBAL.PASS = '';
			GLOBAL.USER_ROLE = '';
			GLOBAL.TOKEN = '';
			GLOBAL.LOGGED_IN = false;

			//return this.props.navigation.navigate('Login');
			return this.props.navigation.navigate('Splash');
		} else {
			console.log('logout response.status ', response.data.status);
		}
	}

	errorLogout = (error) => {
		console.log("logout error : ", error);
		AsyncStorage.removeItem('@loyaltechs_settings');

		GLOBAL.EMAIL = '';
		GLOBAL.PASS = '';
		GLOBAL.USER_ROLE = '';
		GLOBAL.TOKEN = '';
		GLOBAL.LOGGED_IN = false;

		return this.props.navigation.navigate('Splash');
	}

} /// End class

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'space-between',
		marginTop: Platform.OS == 'ios' ? 32 : 0

	},

	header: {
		padding: 20,
		backgroundColor: '#fa324f'
	},

	app_heading: {
		//textAlign: 'center',
		color: '#fff',
		fontSize: 20,
		fontWeight: 'bold'
	},


	btn_modal: {
		flexDirection: 'row',
		padding: 10,
		borderBottomWidth: 1,
		borderBottomColor: '#333',
	},

	btn_icon: {
		color: '#ccc',
		fontSize: 20,
		marginLeft: 10,
		marginRight: 36,
		width: 20,
		//backgroundColor: '#fff',
		textAlign: 'center'
	},

	btn_text_modal: {
		color: '#ccc',
		fontSize: 14,
		fontWeight: 'bold',
		//margin: 5,
	},

	table_row: {
		flexDirection: 'row',
		padding: 15
	},

	box_float: {
		flex: 1,
	},

	nav_item: {
		padding: 15,
		backgroundColor: '#444',
	},

	nav_text: {
		fontSize: 15,
		color: '#ccc',
		fontWeight: 'bold',
	},

	copyright: {
		color: '#fff',
		//fontSize: 12
	},

	footer: {
		padding: 10,
		backgroundColor: '#333',
	}

});