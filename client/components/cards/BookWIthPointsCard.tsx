import * as React from 'react';
import { Image, StyleSheet, TouchableWithoutFeedback, View } from "react-native"
import PointsCircle from '../PointsCircle';

const BookWithPointsCard = () => {

    return (
        <TouchableWithoutFeedback>
            <View style={styles.card}>
                <View style={styles.upperPart}>
                    <View style={styles.pointsCircle}>
                        <PointsCircle/>
                    </View>
                </View>
                <View style={styles.lowerPart}>
                    <Image style={styles.image}
                           source={{uri: 'https://cdn.pastemagazine.com/www/system/images/photo_albums/best-book-covers-july-2019/large/bbcjuly19verynice.jpg?1384968217'}}/>
                </View>
            </View>

        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    card: {
        // backgroundColor: ColourPalette.offWhite,
        overflow: 'hidden',
        width: 205,
        height: 325,
        marginRight: 20,

    },
    upperPart: {
        height: "6%",
        zIndex: 999

    },
    lowerPart: {
        height: "94%",
    },
    image: {
        width: 180,
        height: 280,
    },
    boldText: {
        fontWeight: 'bold',
        fontSize: 16
    },
    pointsCircle: {
        alignSelf: 'flex-end',
        // position: 'absolute',
    }
})

export default BookWithPointsCard;
