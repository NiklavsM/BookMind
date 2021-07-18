import * as React from 'react';
import { Image, StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native"
import ColourPalette from '../../assets/ColourPalette';

const WeeklyChallengeCard = ({challengeName, description}: any) => {

    return (
        <TouchableWithoutFeedback>
            <View style={styles.card}>
                <View style={styles.upperPart}>
                    <Image style={styles.image}
                           source={{uri: 'https://media.giphy.com/media/LcFnEHq9IWaAVlu8qa/giphy.gif'}}/>
                </View>
                <View style={styles.lowerPart}>
                    <Text style={styles.boldText}>{challengeName}</Text>
                    <Text style={styles.descriptionText}>{description}</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    card: {
        // backgroundColor: ColourPalette.offWhite,
        overflow: 'hidden',
        width: "100%",
        height: 290,
        marginRight: 20

    },
    upperPart: {
        height: "83%",
    },
    lowerPart: {
        height: "17%",
    },
    image: {
        width: '73%',
        height: '100%',
    },
    boldText: {
        fontWeight: 'bold',
        fontSize: 20
    },
    descriptionText: {
        fontSize: 17
    }
});

export default WeeklyChallengeCard;
