import * as React from 'react';
import { ScrollView, View } from "react-native"
import Screen from '../components/Screen';
import CoverButtonsSection from '../components/sections/bookPageSections/CoverButtonsSection';
import BookSummarySection from '../components/sections/bookPageSections/BookSummarySection';

const BookScreen = () => {

    return (
        <Screen>
            <ScrollView showsVerticalScrollIndicator={false}>
                <CoverButtonsSection/>
                <BookSummarySection/>
            </ScrollView>
        </Screen>
    )
}

export default BookScreen;
