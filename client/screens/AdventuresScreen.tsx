import * as React from 'react';
import { Text } from "react-native"
import Screen from '../components/Screen';
import { NavigationInjectedProps } from 'react-navigation';
import BookWithPointsInFeed from '../components/cards/cardParts/BookWithPointsInFeed';
import BookCardFeed from '../components/cards/BookCardFeed';

const AdventuresScreen = ({navigation}: NavigationInjectedProps) => {

    return (
        <Screen>
            <Text>Adventures Screen</Text>
            <BookCardFeed/>
        </Screen>
    )
}

export default AdventuresScreen;
