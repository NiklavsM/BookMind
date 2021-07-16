import * as React from 'react';
import {Text} from "react-native"
import Screen from '../components/Screen';
import ActionSection from '../components/sections/ActionSection';
import {NavigationInjectedProps} from "react-navigation";

const AdventuresScreen = ({navigation}: NavigationInjectedProps) => {

    return (
        <Screen>
            <Text>Adventures Screen</Text>
            <ActionSection/>
        </Screen>
    )
}

export default AdventuresScreen;
