import * as React from 'react';
import Screen from '../components/Screen';
import AchievementsSection from '../components/sections/AchievementsSection';
import TrendingBooksSection from '../components/sections/TrendingBooksSection';
import {ScrollView} from 'react-native';
import ChallengeSection from '../components/sections/ChallengeSection';
import ActionSection from '../components/sections/ActionSection';
import GoogleBookSearchCustomLocal from '../GoogleBooksLibrary/GoogleBookSearch'
import {API_BOOKS_KEY} from "../api/APIConfig";

const DashboardScreen = () => {

    return (
        <Screen>
            <ScrollView>
                {/*this component has top padding, that is why it's so high up*/}
                <GoogleBookSearchCustomLocal
                    apikey={API_BOOKS_KEY}
                    onResultPress={(book) => console.log("LOOOOL")}
                />
                <AchievementsSection/>
                <TrendingBooksSection/>
                <ChallengeSection/>
                <ActionSection/>
            </ScrollView>
        </Screen>
    )
}

export default DashboardScreen;
