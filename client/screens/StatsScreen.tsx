import * as React from 'react';
import { ScrollView, Text, View } from "react-native"
import Screen from '../components/Screen';
import AchievementsHeader from '../components/sections/achievementsSections/AchievementsHeader';
import AchievementsBadgeSection from '../components/sections/achievementsSections/AchievementsBadgeSection';
import AchievementsCategoryScores from '../components/sections/achievementsSections/AchievementsCategoryScores';
import ChampionsBoard from '../components/sections/achievementsSections/ChampionsBoard';

const StatsScreen = () => {

    return (
        <Screen>
            <ScrollView>
                <AchievementsHeader/>
                <AchievementsBadgeSection/>
                <AchievementsCategoryScores/>
                <ChampionsBoard/>
            </ScrollView>
        </Screen>
    )
}

export default StatsScreen;
