import { StyleSheet, Platform, StatusBar } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { colorPrimary, white, black, grey, greyText } from './Colors';

let statusBarHeight = Platform.OS === 'ios' ? 22 : StatusBar.currentHeight;

export default StyleSheet.create({
    container: {
        flex: 1, alignItems: 'center', width: wp("100%"), backgroundColor: white
    },
    container_center: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    divider: {
        marginVertical: hp("1%"),
        backgroundColor: greyText,
        width: wp("100%"),
        height: 0.8
    },

    profile_image: {
        width: 50,
        height: 50,
    },

    heading: {
        color: black,
        fontSize: hp("2.5%")
    },

    text_mute: {
        color: "#aaa",
    },

    text_small: {
        fontSize: hp("2%"),
    },

    text_input: {
        color: black,
        fontSize: hp("1%")
    },

    inputBox: {
        width: wp('80%'),
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 15,
        textAlign: 'center',
        marginTop: hp('5%'),
        color: black
    },

    btn: {
        backgroundColor: colorPrimary,
        padding: 15,
        alignItems: 'center',
        marginTop: hp('2%'),
        width: wp('80%')
    },

    btn_active: {
        backgroundColor: colorPrimary,
    },

    btn_text: {
        color: white,
        fontSize: hp("2%"),
    },

    footer: {
        padding: 10,
        backgroundColor: '#2a2a2a',
        borderTopColor: '#333',
        borderTopWidth: 1,
    },
    cardView: {
        backgroundColor: white,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: "#ccc",
        borderBottomWidth: 2.5,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 1,
        marginTop: 10,
        height: hp('10%'),
        width: wp('90%'),
        justifyContent: 'center'
    }
});