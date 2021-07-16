import * as React from 'react';

import { GoogleBookSearch } from 'react-native-google-books'
import BooksFeed from '../components/feeds/BooksFeed';
import Screen from '../components/Screen';
import AchievementsFeed from '../components/feeds/AchievementsFeed';
import AchievementsSection from '../components/sections/AchievementsSection';

const DashboardScreen = () => {

    return (
        <Screen>
            {/*this component has top padding, that is why it's so high up*/}
            <GoogleBookSearch
                apikey={"AIzaSyAnKM235UpJ-WUZshkcQWlobqf1C2TfEbA"}
                onResultPress={(book) => console.log(book)}
            />
            <AchievementsSection/>
            {/*<BooksFeed/>*/}
        </Screen>
    )
}

export default DashboardScreen;
