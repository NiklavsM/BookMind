import * as React from 'react';
import { Image, StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native"
import ColourPalette from '../../assets/ColourPalette';

const ActionCard = ({text, date}: any) => {

    return (
        <TouchableWithoutFeedback>
            <View style={styles.card}>
                <View style={styles.leftPart}>
                    <Image style={styles.image} source={{uri: 'https://thumbs.dreamstime.com/b/gold-badge-5392868.jpg'}}/>
                </View>
                <View style={styles.rightPart}>
                    <Text style={styles.championText}>{text}</Text>
                    <Text style={styles.championText}>{date}</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    card: {
        // backgroundColor: ColourPalette.offWhite,
        width: '100%',
        height: 65,
        padding: "2.2%",
        marginRight: 20,
        flexDirection: "row",
        marginBottom: 10
    },
    leftPart: {
        width: "18%",
    },
    rightPart: {
        justifyContent: "space-between",
        width: "82%",
    },
    image: {
        width: '65%',
        height: '100%',
        position: 'absolute',
    },
    championText: {
        fontSize: 17
    }

})


export default ActionCard;
