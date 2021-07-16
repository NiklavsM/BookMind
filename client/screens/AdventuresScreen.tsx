import * as React from 'react';
import { Text } from "react-native"
import Screen from '../components/Screen';
import WeeklyChallengeCard from '../components/cards/WeeklyChallengeCard';
import ChallengeSection from '../components/sections/ChallengeSection';

const AdventuresScreen = () => {

    return (
        <Screen>
            <Text>Adventures Screen</Text>
            <ChallengeSection/>
        </Screen>
    )
}

export default AdventuresScreen;
