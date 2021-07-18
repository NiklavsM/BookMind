import * as React from 'react';
import { Image, StyleSheet, Text, View } from "react-native"
import { useContext } from 'react';
import Context from '../../../context/context';

const AchievementsHeader = () => {
    const context = useContext(Context);

    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>Achievements</Text>
            <Image style={styles.image} source={{uri: context.profileUrl}}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        justifyContent:'space-between',
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


export default AchievementsHeader;
