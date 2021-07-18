import * as React from 'react';
import {FlatList} from "react-native"
import AchievementCard from '../cards/AchievementCard';

const achievementsData = [
    {
        description: "Did your first 100 questions",
        date: "19th of July 2021",
        source: require("../../assets/images/SilverMedal.png"),
    },
    {
        description: "Got 1000 question upvotes",
        date: "19th of July 2021",
        source: require("../../assets/images/GoldMedal.png"),
    },
    {
        description: "Did quiz a day challange",
        date: "19th of July 2021",
        source: require("../../assets/images/BronzeMedal.png"),
    },
]

const AchievementsFeed = () => {

    const achievementRender = ({item}: any) => (
        <AchievementCard
            description={item.description}
            date={item.date}
            source={item.source}
        />
    )

    return (
        <FlatList
            horizontal={true}
            data={achievementsData}
            keyExtractor={item => item.description}
            renderItem={achievementRender}
            showsHorizontalScrollIndicator={false}
        />
    )
}

export default AchievementsFeed;
