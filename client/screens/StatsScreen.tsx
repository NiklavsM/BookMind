import * as React from 'react';
import {Text, View} from "react-native"
import Screen from '../components/Screen';
import AchievementsHeader from '../components/sections/achievementsSections/AchievementsHeader';
import AchievementsBadgeSection from '../components/sections/achievementsSections/AchievementsBadgeSection';

const StatsScreen = () => {

    return (
        <Screen>
            <AchievementsHeader/>
            <AchievementsBadgeSection/>
        </Screen>
    )
}

export default StatsScreen;
