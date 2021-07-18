import * as React from 'react';
import {Image, StyleSheet, Text, TouchableWithoutFeedback, View} from "react-native"

const AchievementCard = ({description, date, source}: any) => {

    return (
        <TouchableWithoutFeedback>
            <View style={styles.card}>
                <View style={styles.upperPart}>
                    <Image style={styles.image} source={{uri: source}}/>
                </View>
                <View style={styles.lowerPart}>
                    <Text style={{textAlign: "center",}}>{description}</Text>
                    <Text style={{alignSelf: "center", fontSize:12}}>{date}</Text>
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
