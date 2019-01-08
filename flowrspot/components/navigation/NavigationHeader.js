import React from "react";
import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import config from "../../config";
import {sw, vw, sh, vh} from "../../helpers/scaling";

export const MenuIcon = (props) => {
    return (
        <TouchableOpacity style={styles.menuIconContainer} onPress={() => { props.navigation.navigate('SideMenu')}} >
            <Image style={styles.imageContainer} source={require('../../assets/menu_icon.png')} resizeMode="contain"/>
        </TouchableOpacity>
    );
};

export const Logo = (props) => {
    return (
        <View style={styles.logoContainer}>
            <Image style={styles.imageContainer} source={require('../../assets/flowr_icon.png')} resizeMode="contain"/>
            <Text style={styles.logoText}>FlowrSpot</Text>
        </View>
    );
};


const styles = StyleSheet.create({
    logoContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: (sw(40) * vw),
    },
    logoText: {
        color: config.COLORS.pinkish_tan,
        fontFamily: 'Ubuntu-Bold',
        fontSize: 24,
        textAlign: 'left'
    },
    menuIconContainer: {
        paddingLeft: (sw(10) * vw)
    },
    imageContainer: {
        height: (sh(40) * vh),
        width: (sw(40) * vw)
    }

});
