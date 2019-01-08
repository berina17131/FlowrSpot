import React from 'react';
import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';

import {vh, vw, sh, sw} from '../../helpers/scaling';

export default class MenuComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.iconContainer} onPress={() => { this.props.navigation.navigate('FavouriteFlowers') }}>
                    <Image style={styles.menuIcon} source={require('../../assets/favorites_icons.png')} resizeMode="contain"/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconContainer} onPress={() => { this.props.navigation.navigate('Account') }}>
                    <Image style={styles.menuIcon} source={require('../../assets/comment_icon.png')} resizeMode="contain"/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconContainer} onPress={() => { this.props.navigation.navigate('Sightings') }}>
                    <Image style={styles.menuIcon} source={require('../../assets/new_sighting_icon.png')} resizeMode="contain"/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconContainer} onPress={() => { this.props.navigation.navigate('Login')}}>
                    <Image style={styles.menuIcon} source={require('../../assets/sighting_list_icon.png')} resizeMode="contain"/>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: (sh(49) * vh),
        width: (sw(354) * vw),
        flexDirection: 'row'
    },
    iconContainer: {
        height: (sh(49) * vh),
        width: (sw(88.5) * vw),
        justifyContent: 'center',
        alignItems: 'center'
    },
    menuIcon: {
        height: (sh(29) * vh),
        width: (sw(29) * vw)
    }

});
