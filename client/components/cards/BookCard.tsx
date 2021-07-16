import * as React from "react";
import {Image, StyleSheet, Text, View} from 'react-native';
import ColourPalette from '../../assets/ColourPalette';

interface BookCardProps{
    name: string,
    description: string,
    imgUrl?: string,
}

export default function BookCard({name, description, imgUrl}: BookCardProps) {

    return (
        <View style={styles.container}>
            <Text>{name}</Text>
            <Image style={styles.logo} source={{uri:imgUrl}}/>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: ColourPalette.lightBlue,
        justifyContent: 'center',
        width: 330,
        height: 180,
        marginBottom: 20
    },
    logo: {
        width: 100,
        height: 150,
    },
});
