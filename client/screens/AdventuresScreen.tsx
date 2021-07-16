import * as React from 'react';
import { Text } from "react-native"
import Screen from '../components/Screen';
import WeeklyChallengeCard from '../components/cards/WeeklyChallengeCard';
import ChallengeSection from '../components/sections/ChallengeSection';
import ActionCard from '../components/cards/ActionCard';
import AchievementsSection from '../components/sections/AchievementsSection';
import ActionSection from '../components/sections/ActionSection';

const AdventuresScreen = () => {

    return (
        <Screen>
            <Text>Adventures Screen</Text>
            <ActionSection/>
        </Screen>
    )
}

export default AdventuresScreen;
