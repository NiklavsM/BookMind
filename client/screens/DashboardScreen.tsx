import * as React from "react";
import {FlatList, View} from "react-native"
import Screen from "../components/Screen";
import {API_BOOKS_KEY} from "../api/APIConfig";
import AchievementsSection from "../components/sections/dashboardSections/AchievementsSection";
import TrendingBooksSection from "../components/sections/dashboardSections/TrendingBooksSection";
import ChallengeSection from "../components/sections/dashboardSections/ChallengeSection";
import ActionSection from "../components/sections/dashboardSections/ActionSection";
import {NavigationInjectedProps} from "react-navigation";
import GoogleBookSearch from '../GoogleBooksLibrary/GoogleBookSearch'
import WelcomeComponent from "../components/WelcomeComponent";

const DashboardScreen = ({navigation, route}: NavigationInjectedProps & any) => {
    // console.log(route)
    const {name, photoUrl} = route.params.route.params.route.params; // TODO get rid of this joke
    return (
        <Screen>
            <WelcomeComponent name={name} profilePicUrl={photoUrl}/>
            <GoogleBookSearch
                apikey={API_BOOKS_KEY}
                onResultPress={
                    (book, books) => {
                        navigation.navigate('Books', books)
                    }
                }
            />
            <FlatList
                ListHeaderComponent={
                    <View>

                        <AchievementsSection/>
                        <TrendingBooksSection/>
                        <ChallengeSection/>
                        <ActionSection/>
                    </View>
                }
            />
        </Screen>
    )
}

export default DashboardScreen;
