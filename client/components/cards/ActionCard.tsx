import * as React from 'react';
import { Image, StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native"
import ColourPalette from '../../assets/ColourPalette';

const ActionCard = ({text, date, source}: any) => {

    return (
        <TouchableWithoutFeedback>
            <View style={styles.card}>
                <View style={styles.leftPart}>
                    <Image style={styles.image} source={source}/>
                </View>
                <View style={styles.rightPart}>
                    <Text style={styles.championText}>{text}</Text>
                    <Text style={styles.timeStamp}>{date}</Text>
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
    },
    timeStamp: {
        fontSize: 13,
        alignSelf:"flex-end"
    }

})


export default ActionCard;
