import * as React from 'react';
import {FlatList} from "react-native"
import Screen from '../components/Screen';
import AchievementsHeader from '../components/sections/achievementsSections/AchievementsHeader';
import ChampionsBoard from "../components/sections/achievementsSections/ChampionsBoard";
import AchievementsCategoryScores from "../components/sections/achievementsSections/AchievementsCategoryScores";
import AchievementsBadgeSection from "../components/sections/achievementsSections/AchievementsBadgeSection";

const StatsScreen = () => {

    return (
        <Screen>
            <FlatList
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={
                    <>
                        <AchievementsHeader/>
                        <AchievementsBadgeSection/>
                        <AchievementsCategoryScores/>
                        <ChampionsBoard/>
                    </>
                }
            />
        </Screen>
    )
}

export default StatsScreen;
