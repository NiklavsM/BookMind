import * as React from 'react';
import { StyleSheet, Text, View } from "react-native"
import AchievementsFeed from '../feeds/AchievementsFeed';

const AchievementsSection = () => {

    return (
        <View style={styles.container}>
            <View style={styles.upperSection}>
                <View style={styles.upperTextSection}>
                    <Text style={styles.bigBoldFont}>Achievementss</Text>
                    <Text style={styles.regularText}>See more</Text>
                </View>
                <Text style={styles.regularText}>Some text</Text>
            </View>
            <AchievementsFeed/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        paddingTop: "10%"
    },
    upperSection: {
        paddingBottom: 10,
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

export default AchievementsSection;
