import * as React from 'react';
import {StyleSheet, Text, View} from "react-native"
import TrendingBooksFeed from '../../feeds/TrendingBooksFeed';

const TrendingBooksSection = ({navigation}) => {

    return (
        <View style={styles.container}>
            <View style={styles.upperSection}>
                <View style={styles.upperTextSection}>
                    <Text style={styles.bigBoldFont}>Trending</Text>
                    <Text style={styles.regularText}>See more</Text>
                </View>
                <Text style={styles.regularText}>Some text</Text>
            </View>
            <TrendingBooksFeed navigation={navigation}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        paddingTop: "11%"
    },
    upperSection: {
        paddingBottom: 10,
        alignContent: "center",
    },
    upperTextSection: {
        flexDirection: "row",
        justifyContent: 'space-between',
    },
    bigBoldFont: {
        fontSize: 30,
        fontWeight: "bold"
    },
    regularText: {
        fontSize: 16.5,
    }
});

export default TrendingBooksSection;
