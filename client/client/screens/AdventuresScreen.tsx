import * as React from 'react';
import { Text } from "react-native"
import Screen from '../components/Screen';
import { NavigationInjectedProps } from 'react-navigation';

const AdventuresScreen = ({navigation}: NavigationInjectedProps) => {

    return (
        <Screen>
            <Text>Adventures Screen</Text>
        </Screen>
    )
}

export default AdventuresScreen;
