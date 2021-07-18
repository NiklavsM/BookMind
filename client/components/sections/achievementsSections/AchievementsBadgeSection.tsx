import * as React from 'react';
import { Image, StyleSheet, Text, View } from "react-native"

const AchievementsBadgeSection = () => {

    return (
        <View style={styles.container}>
            <Text style={styles.championText}>Hello you champion!</Text>
            <Image style={styles.image} source={{uri:"https://media.giphy.com/media/6szm4XY0oU3RjbYgE9/giphy.gif"}}/>
            <Text style={{fontSize: 34, fontWeight: 'bold'}}>Bronze badge</Text>
            <Text style={{fontSize: 34}}>346 points</Text>
            <Text style={{fontSize: 20, paddingTop: 15}}>54 points away from the Silver badge!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    championText: {
        fontSize: 25,
        fontWeight: 'bold',
    },
    image: {
        width: 200,
        height: 170,
    }
});


export default AchievementsBadgeSection;
