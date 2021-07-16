import * as React from "react";
import {FlatList, View} from "react-native"
import Screen from "../components/Screen";
import {defaultStyles} from "../styles/styles";
import {API_BOOKS_KEY} from "../api/APIConfig";
import AchievementsSection from "../components/sections/AchievementsSection";
import TrendingBooksSection from "../components/sections/TrendingBooksSection";
import ChallengeSection from "../components/sections/ChallengeSection";
import ActionSection from "../components/sections/ActionSection";
import {NavigationInjectedProps} from "react-navigation";
import GoogleBookSearch from '../GoogleBooksLibrary/GoogleBookSearch'

const DashboardScreen = ({navigation}: NavigationInjectedProps) => {

    return (
        <Screen>
            <FlatList
                ListHeaderComponent={
                    <View style={defaultStyles.container}>
                        <GoogleBookSearch
                            apikey={API_BOOKS_KEY}
                            onResultPress={
                                (book, books) => {
                                    navigation.navigate('Books', books)
                                }
                            }
                        />
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