import * as React from 'react';
import { ScrollView, StyleSheet, View } from "react-native"
import CoverButtonsSection from '../components/sections/bookPageSections/CoverButtonsSection';
import BookSummarySection from '../components/sections/bookPageSections/BookSummarySection';
import { NavigationInjectedProps } from 'react-navigation';

interface BookScreen {
    route: any,
    navigation?: any,
}

const BookScreen = ({route, navigation}: BookScreen & NavigationInjectedProps) => {
    const title = route.params[0];
    const author = route.params[1];
    const imgUrl = route.params[2];
    const category = route.params[3];
    const description = route.params[4];
    return (
        <View style={styles.screen}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <CoverButtonsSection imgUrl={imgUrl} navigation={navigation}/>
                <BookSummarySection title={title} author={author} category={category} description={description}/>
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
    }
});

export default BookScreen;
