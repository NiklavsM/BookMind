import * as React from 'react';

import { GoogleBookSearch } from 'react-native-google-books'
import Screen from '../components/Screen';
import AchievementsSection from '../components/sections/AchievementsSection';
import TrendingBooksSection from '../components/sections/TrendingBooksSection';
import { ScrollView } from 'react-native';

const DashboardScreen = () => {

    return (
        <Screen>
            <ScrollView>
                {/*this component has top padding, that is why it's so high up*/}
                <GoogleBookSearch
                    apikey={"AIzaSyAnKM235UpJ-WUZshkcQWlobqf1C2TfEbA"}
                    onResultPress={(book) => console.log(book)}
                />
                <AchievementsSection/>
                <TrendingBooksSection/>
            </ScrollView>
        </Screen>
    )
}

export default DashboardScreen;
