import * as React from 'react';
import { useEffect, useState } from 'react';
import { FlatList, ScrollView, Text, View } from "react-native"
import BookCard from '../cards/BookCard';
import AchievementCard from '../cards/AchievementCard';

const AchievementsFeed = () => {

    const [achievements, setAchievements] = useState<any[]>([]);

    useEffect(() => {
        let isMounted = true;
        getAchievements().then(r => {
                if(isMounted) setAchievements(r)
        })
        return () => { isMounted = false }
    })

    const getAchievements = async () => {
        let achievementsArr = []
        let achievement = {}
        achievement["description"] = "achievement 1"
        achievement["date"] = "date 1"
        achievementsArr.push(achievement)

        achievement = {}
        achievement["description"] = "achievement 2"
        achievement["date"] = "date 2"
        achievementsArr.push(achievement)

        achievement = {}
        achievement["description"] = "achievement 3"
        achievement["date"] = "date 3"
        achievementsArr.push(achievement)

        achievement = {}
        achievement["description"] = "achievement 4"
        achievement["date"] = "date 4"
        achievementsArr.push(achievement)

        return achievementsArr;
    }

    const achievementRender = ({item}: any) => (
        <AchievementCard
            description={item.description}
            date={item.date}
        />
    )

    return (
            <FlatList
                horizontal={true}
                data={achievements}
                keyExtractor={item => item.description.toString()}
                renderItem={achievementRender}
                showsHorizontalScrollIndicator={false}
            />
    )
}

export default AchievementsFeed;
