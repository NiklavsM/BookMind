import * as React from 'react';
import { Image, StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native"
import ColourPalette from '../../assets/ColourPalette';

const TrendingBookCard = ({name}: any) => {

    return (
        <TouchableWithoutFeedback>
            <View style={styles.card}>
                <View style={styles.upperPart}>
                    <Image style={styles.image}
                           source={{uri: 'https://s26162.pcdn.co/wp-content/uploads/2019/12/46301955-668x1024.jpg'}}/>
                </View>
                <View style={styles.lowerPart}>
                    <Text style={styles.boldText}>{name}</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    card: {
        // backgroundColor: ColourPalette.offWhite,
        overflow: 'hidden',
        width: 150,
        height: 280,
        marginRight: 20

    },
    upperPart: {
        height: "80%",
    },
    lowerPart: {
        height: "20%",
    },
    image: {
        width: '100%',
        height: '100%',
    },
    boldText: {
        fontWeight: 'bold',
        fontSize: 16
    }
})

export default TrendingBookCard;
