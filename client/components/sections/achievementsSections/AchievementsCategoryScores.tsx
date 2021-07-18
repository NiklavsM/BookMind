import * as React from 'react';
import { Image, StyleSheet, Text, View } from "react-native"

const AchievementsCategoryScores = () => {

    return (
        <View style={styles.container}>
            <Text style={styles.categoryText}>Category Scores</Text>
            <Image style={{width: 370, height: 680, alignSelf: 'center'}}
                   source={require("../../../assets/sxascas.png")}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingBottom: 50
    },
    categoryText: {
        fontSize: 26,
        fontWeight: 'bold',
        paddingBottom: 30
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 25,
        overflow: 'hidden',
        borderWidth: 0.3,
        borderColor: 'grey',
    }
});

export default AchievementsCategoryScores;
