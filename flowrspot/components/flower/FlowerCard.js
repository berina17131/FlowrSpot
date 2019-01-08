import React from 'react';
import {StyleSheet, ImageBackground, Text, TouchableOpacity} from 'react-native';
import { Icon } from 'react-native-elements';
import { LinearGradient } from 'expo';

import {sh, sw, vh, vw} from "../../helpers/scaling";
import config from "../../config";

export default class FlowerCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { flower } = this.props;
        return (
            <TouchableOpacity onPress={() => { this.props.navigation.navigate('FlowerDetails') }}>
                <ImageBackground source={{ uri: "https:" + flower.profile_picture }} style={styles.imageContainer}>
                    <LinearGradient style={styles.container} colors={['#00000000', config.COLORS.black]}>
                        <Text style={styles.flowerName}>{flower.name}</Text>
                        <Text style={styles.flowerLatinName}>{flower.latin_name}</Text>
                        <Text style={styles.flowerSightings}>{"127 sightings"}</Text>
                        <Icon reverse name="star" type="font-awesome" size={16} iconStyle={styles.favouriteIcon} containerStyle={styles.favouriteIconContainer}/>
                    </LinearGradient>
                </ImageBackground>
            </TouchableOpacity>

        );
    }
}

const styles = StyleSheet.create({
    imageContainer: {
        height: (sh(203) * vh),
        width: (sw(160) * vw),
        marginTop: (sh(12) * vh),
        marginRight: (sw(12) * vw)
    },
    container: {
        height: (sh(203) * vh),
        width: (sw(160) * vw),
        opacity: 0.9,
        justifyContent: 'center',
        alignItems: 'center'
    },
    flowerName: {
        color: config.COLORS.white,
        fontSize: 16,
        marginTop: (sh(117) * vh),
        fontFamily: 'Ubuntu-Regular'
    },
    flowerLatinName: {
        color: config.COLORS.white,
        fontSize: 10,
        fontFamily: 'Ubuntu-Light-Italic',
        opacity: 0.7
    },
    flowerSightings: {
        height: (sh(24) * vh),
        width: (sw(82.4) * vw),
        color: config.COLORS.white,
        textAlign: 'center',
        fontSize: 10,
        marginTop: (sh(15) * vh),
        marginBottom: (sh(16) * vh),
        backgroundColor: config.COLORS.black
    },
    favouriteIcon: {
        color: config.COLORS.cool_grey
    },
    favouriteIconContainer: {
        position: 'absolute',
        top: (sh(10) * vh),
        left: (sw(110) * vw),
        backgroundColor: config.COLORS.white
    }
});
