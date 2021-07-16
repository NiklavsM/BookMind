import * as React from "react";
import {StyleSheet, Text, View} from "react-native"
import BottomNavigation from "../navigation/BottomNavigation";


const MainScreen = () => {

    return (
        <View style={styles.container}>
            <BottomNavigation/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default MainScreen;