import React from 'react';
import { Text, View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Gameplayed from './Gameplayed';
import Badges from './Badges';

const Tab = createMaterialTopTabNavigator();

export default function Tabb() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Game Played" component={Gameplayed} />
            <Tab.Screen name="Badges" component={Badges} />
        </Tab.Navigator>
    );
}
