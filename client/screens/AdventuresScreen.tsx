import * as React from 'react';
import {Text} from "react-native"
import Screen from '../components/Screen';
import WeeklyChallengeCard from '../components/cards/WeeklyChallengeCard';
import ChallengeSection from '../components/sections/dashboardSections/ChallengeSection';
import ActionCard from '../components/cards/ActionCard';
import AchievementsSection from '../components/sections/dashboardSections/AchievementsSection';
import ActionSection from '../components/sections/dashboardSections/ActionSection';
import { NavigationInjectedProps } from 'react-navigation';
import BookWithPointsCard from '../components/cards/BookWIthPointsCard';

const AdventuresScreen = ({navigation}: NavigationInjectedProps) => {

    return (
        <Screen>
            <Text>Adventures Screen</Text>
            <BookWithPointsCard/>
        </Screen>
    )
}

export default AdventuresScreen;
