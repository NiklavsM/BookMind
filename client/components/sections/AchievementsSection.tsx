import * as React from 'react';
import { StyleSheet, Text, View } from "react-native"
import AchievementsFeed from '../feeds/AchievementsFeed';
import ColourPalette from '../../assets/ColourPalette';

const AchievementsSection = () => {

    return (
        <View>
            <View  style={styles.upperTextSection}>
                <Text>Achievements</Text>
                <Text style={{alignSelf: "flex-end"}}>See more</Text>
            </View>
            <AchievementsFeed/>
        </View>
    )
}

const styles = StyleSheet.create({
    upperTextSection: {
        flexDirection: "row",
        alignContent: "space-between",
        width: '100%'
    }
});

export default AchievementsSection;
