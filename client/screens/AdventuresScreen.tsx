import * as React from 'react';
import { Text } from "react-native"
import Screen from '../components/Screen';
import { NavigationInjectedProps } from 'react-navigation';
import BookWithPointsInFeed from '../components/cards/BookWithPointsInFeed';

const AdventuresScreen = ({navigation}: NavigationInjectedProps) => {

    return (
        <Screen>
            <Text>Adventures Screen</Text>
            <BookWithPointsInFeed/>
        </Screen>
    )
}

export default AdventuresScreen;
