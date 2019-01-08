import React from 'react';
import {StyleSheet, View, ActivityIndicator, FlatList, Keyboard, Alert} from 'react-native';

import FlowerCard from "../flower/FlowerCard";
import HomePanel from "./HomePanel";
import MenuComponent from "../shared/MenuComponent";
import LoadingSpinner from "../shared/LoadingSpinner";

import {vh, vw, sh, sw} from '../../helpers/scaling';
import config from "../../config";

export default class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchTerm: null,
            loadingFlowers: true,
            loadingFlowersSearch: false,
            allFlowers: [],
            flowers: []
        };

        this.searchFlowers = this.searchFlowers.bind(this);
    }

    componentDidMount(){
        this.getAllFlowers();
    }

    async getAllFlowers(){
        await fetch(config.API_URL + 'flowers/random', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': config.AUTH_TOKEN
                }
                }).then((res) => res.json())
                  .then((response) => {
                        if(response.error)
                            reject();
                        this.setState({ flowers: response.flowers, allFlowers: response.flowers }, () => {
                            this.setState({ loadingFlowers: false });
                        });
                  }).catch((error) => {
                      this.setState({ loadingFlowers: false });
                        Alert.alert('ERROR', 'Something went wrong during loading flowers list.', [{text: 'OK', onPress: () => {}}],{ cancelable: false });
                  });
    }

    async searchFlowers(searchTerm){
        Keyboard.dismiss();
        if(searchTerm === ""){
            this.setState({ flowers: this.state.allFlowers });
        }
        else {
            this.setState({ loadingFlowersSearch: true });
            await fetch(config.API_URL + 'flowers/search?query=' + searchTerm, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': config.AUTH_TOKEN
                }
            }).then((res) => res.json())
                .then((response) => {
                    if(response.error)
                        reject();
                    this.setState({ flowers: response.flowers, loadingFlowersSearch: false });
                }).catch((error) => {
                    this.setState({ loadingFlowersSearch: false });
                    Alert.alert('ERROR', 'Something went wrong during searching flowers list.', [{text: 'OK', onPress: () => {}}],{ cancelable: false });
                });
        }
    }

    render() {
        if(this.state.loadingFlowers)
            return (<LoadingSpinner/>);

        return (
            <View style={styles.container}>
                <HomePanel searchFlowers={this.searchFlowers}/>
                {this.state.loadingFlowersSearch ?
                    <LoadingSpinner/> :
                    <FlatList
                        data={this.state.flowers}
                        extraData={this.state}
                        numColumns={2}
                        renderItem={({item}) => <FlowerCard flower={item} navigation={this.props.navigation}/>}
                        style={styles.listContainer}
                        keyExtractor={(item, index) => index.toString()}
                    />
                }
                <MenuComponent navigation={this.props.navigation}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    listContainer: {
        width: (sw(354) * vw),
        paddingLeft: (sw(11) * vw)
    }
});
