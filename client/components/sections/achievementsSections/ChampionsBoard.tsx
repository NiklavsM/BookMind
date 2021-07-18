import * as React from 'react';
import { StyleSheet, Text, View } from "react-native"

const ChampionsBoard = () => {

    return (
        <View>
            <Text>Bookworm Champions board</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 50
    },
    headerText: {
        fontSize: 30,
        fontWeight: 'bold',
        alignSelf: 'flex-end'
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 25,
        overflow: 'hidden',
        borderWidth: 0.3,
        borderColor: 'grey',
    }
});

export default ChampionsBoard;
