import * as React from 'react';
import { Text } from "react-native"
import Screen from '../components/Screen';
import AchievementCard from '../components/cards/AchievementCard';

const AdventuresScreen = () => {

    return (
        <Screen>
            <Text>Adventures Screen</Text>
            <AchievementCard description={"You are 5pt away from winning!"} date="13th July 2021"/>
        </Screen>
    )
}

export default AdventuresScreen;
