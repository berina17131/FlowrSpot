import React from "react";
import { createStackNavigator, createAppContainer } from 'react-navigation';

import {Logo, MenuIcon} from './NavigationHeader';

import Home from '../home/Home';
import FlowerDetails from "../FlowerDetails";
import FavouriteFlowers from "../FavouriteFlowers";
import Account from "../Account";
import Login from "../Login";
import Sightings from "../Sightings";
import SideMenu from "../SideMenu";

const AppNavigator = createStackNavigator({
    Home: {
        screen: Home,
        navigationOptions: ({ navigation }) => ({
            headerStyle: {
                elevation: 0
            },
            headerLeft: <MenuIcon navigation={navigation}/>,
            headerTitle: <Logo/>,
        })
    },
    SideMenu: SideMenu,
    FlowerDetails: FlowerDetails,
    FavouriteFlowers: FavouriteFlowers,
    Account: Account,
    Login: Login,
    Sightings: Sightings
});

export default createAppContainer(AppNavigator);