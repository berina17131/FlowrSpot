import React from 'react';
import {StyleSheet, Text, TextInput, View, ImageBackground, TouchableOpacity, Image} from 'react-native';

import {vh, vw, sh, sw} from '../../helpers/scaling';
import config from "../../config";

export default class HomePanel extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    onChangeSearchTerm(searchTerm){
        this.setState({ searchTerm });
        if(searchTerm === "")
            this.props.searchFlowers(searchTerm);
    }

    render() {
        return (
            <ImageBackground source={require('../../assets/pl_hero.png')} style={styles.imageContainer} imageStyle={{resizeMode: 'stretch'}}>
                <View style={styles.welcomeContainer}>
                    <Text style={styles.welcomeTxt1}>Discover flowers around you</Text>
                    <Text style={styles.welcomeTxt2}>Explore between more than 8.427 sightings</Text>
                    <View style={styles.searchContainer}>
                        <TextInput
                            value={this.state.searchTerm}
                            onChangeText={(text) => this.onChangeSearchTerm(text)}
                            underlineColorAndroid="transparent"
                            placeholder="Looking for something specific?"
                            placeholderTextColor={config.COLORS.cool_grey}
                            style={styles.searchInput}
                        />
                        <View style={styles.searchIconContainer}>
                            <TouchableOpacity onPress={() => this.props.searchFlowers(this.state.searchTerm)}>
                                <Image style={styles.searchIcon} source={require('../../assets/pl_icon_search.png')} resizeMode="contain"/>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    imageContainer: {
        height: (sh(300) * vh),
        width: (sw(354) * vw)
    },
    welcomeContainer: {
        height: (sh(300) * vh),
        width: (sw(354) * vw),
        justifyContent: 'center',
        alignItems: 'center'
    },
    welcomeTxt1: {
        width: (sw(240) * vw),
        fontSize: 24,
        textAlign: 'center',
        lineHeight: 29,
        fontFamily: 'Ubuntu-Light',
        color: config.COLORS.white
    },
    welcomeTxt2: {
        width: (sw(310) * vw),
        fontSize: 15,
        textAlign: 'center',
        opacity: 0.7,
        lineHeight: 17,
        color: config.COLORS.white,
        fontFamily: 'Ubuntu-Light',
        marginTop: (sh(26) * vh)
    },
    searchContainer: {
        height: (sh(48) * vh),
        width: (sw(312) * vw),
        marginTop: (sh(29) * vh),
        flexDirection: 'row',
        backgroundColor: config.COLORS.white,
        borderRadius: 3
    },
    searchInput: {
        height: (sh(48) * vh),
        width: (sw(271) * vw),
        paddingLeft: (sw(20) * vw),
        fontSize: 14,
        lineHeight: 18,
        fontFamily: 'Ubuntu-Light',
    },
    searchIconContainer: {
        height: (sh(48) * vh),
        width: (sw(41) * vw),
        justifyContent: 'center',
        alignItems: 'center',
        paddingRight: (sw(21) * vw)
    },
    searchIcon: {
        height: (sh(20) * vh),
        width: (sw(20) * vw)
    }
});
