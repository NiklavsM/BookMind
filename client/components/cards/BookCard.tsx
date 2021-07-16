import * as React from "react";
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import ColourPalette from '../../assets/ColourPalette';

export default function BookCard({name, description}: any) {

    return (
            <View style={styles.container}>
                <Text>{name}</Text>
                <Text>{description}</Text>
            </View>
    )

}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: ColourPalette.lightBlue,
        alignItems: 'center',
        justifyContent: 'center',
        width: 330,
        height: 180,
        marginBottom: 20
    },
});
