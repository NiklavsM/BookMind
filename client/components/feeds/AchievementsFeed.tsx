import * as React from 'react';
import {FlatList} from "react-native"
import AchievementCard from '../cards/AchievementCard';

const achievementsData = [
    {
        description: "Did your first 100 questions",
        date: "19th of July 2021",
        source: "https://media.giphy.com/media/Xz4nrKGYIttw65Rm2Q/giphy.gif"
    },
    {
        description: "Got 1000 question upvotes",
        date: "19th of July 2021",
        source: "https://media.giphy.com/media/im9e9e7jwWdel8PJO4/giphy.gif"
    },
    {
        description: "Did quiz a day challange",
        date: "19th of July 2021",
        source: "https://media.giphy.com/media/JFdqqYDTocJaNgdfxZ/giphy.gif"

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
