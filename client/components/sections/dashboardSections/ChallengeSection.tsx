import * as React from 'react';
import { StyleSheet, Text, View } from "react-native"
import WeeklyChallengeCard from '../../cards/WeeklyChallengeCard';
import TrendingBooksFeed from '../../feeds/TrendingBooksFeed';

const ChallengeSection = () => {

    return (
        <View style={styles.container}>
            <View style={styles.upperSection}>
                <View style={styles.upperTextSection}>
                    <Text style={styles.bigBoldFont}>Weekly challenge</Text>
                    <Text style={styles.regularText}>See more</Text>
                </View>
                <Text style={styles.regularText}>Some text</Text>
            </View>
            <WeeklyChallengeCard challengeName = "Title of the challenge" description = "Short Summary"/>
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
        paddingBottom: 10
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

export default ChallengeSection;
