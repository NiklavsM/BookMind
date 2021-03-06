import * as React from 'react';
import { Image, ScrollView, StyleSheet, View } from "react-native"
import CoverButtonsSection from '../components/sections/bookPageSections/CoverButtonsSection';
import BookSummarySection from '../components/sections/bookPageSections/BookSummarySection';
import {NavigationInjectedProps} from 'react-navigation';

interface BookScreen {
    route: any,
    navigation?: any,
}

const BookScreen = ({route, navigation}: BookScreen & NavigationInjectedProps) => {
    const {title, author, imgUrl, category, description} = route.params;
    return (
        <View style={styles.screen}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <CoverButtonsSection title={title} imgUrl={imgUrl} navigation={navigation}/>
                <BookSummarySection title={title} author={author} category={category} description={description}/>
                <Image style={{width: 390, height: 130}} source={require("../assets/belowBookScreen.png")}/>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        height: '100%',
        paddingRight: '5%',
        paddingLeft: '5%',
        backgroundColor: 'white'
    }
});

export default BookScreen;
