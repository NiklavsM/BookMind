import * as React from 'react';
import { Text } from "react-native"
import Screen from '../components/Screen';
import TrendingBookCard from '../components/cards/TrendingBookCard';
import TrendingBooksFeed from '../components/feeds/TrendingBooksFeed';
import TrendingBooksSection from '../components/sections/TrendingBooksSection';

const AdventuresScreen = () => {

    return (
        <Screen>
            <Text>Adventures Screen</Text>
            <TrendingBookCard name={"Follow me to the ground"}/>
            <TrendingBooksSection/>
        </Screen>
    )
}

export default AdventuresScreen;
