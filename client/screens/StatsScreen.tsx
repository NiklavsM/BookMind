import * as React from 'react';
import {Text, View} from "react-native"
import Screen from '../components/Screen';
import {defaultStyles} from "../styles/styles";


const StatsScreen = () => {

    return (
        <Screen>
            <View style={defaultStyles.container}>
                <Text>Stats Screen</Text>
            </View>
        </Screen>
    )
}

export default StatsScreen;
