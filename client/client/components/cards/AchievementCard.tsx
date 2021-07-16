import * as React from 'react';
import { View, StyleSheet, SafeAreaView, TouchableWithoutFeedback, Image, Text } from "react-native"
import ColourPalette from '../../assets/ColourPalette';

const AchievementCard = ({description, date, uri}: any) => {

    return (
        <TouchableWithoutFeedback>
            <View style={styles.card}>
                <View style={styles.upperPart}>
                    <Image style={styles.image} source={{uri: 'https://sadanduseless.b-cdn.net/wp-content/uploads/2017/09/sticker1.png'}}/>
                </View>
                <View style={styles.lowerPart}>
                    <Text>{description}</Text>
                    <Text>{date}</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 10,
        // backgroundColor: ColourPalette.offWhite,
        overflow: 'hidden',
        width: 140,
        height: 230,
        padding: "2.2%",
        marginRight: 20

    },
    upperPart: {
        overflow: 'hidden',
        height: "70%",
    },
    lowerPart: {
        overflow: 'hidden',
        height: "30%",
    },
    image: {
        width: '100%',
        height: '100%',
        position: 'absolute',
    },


})

export default AchievementCard;
