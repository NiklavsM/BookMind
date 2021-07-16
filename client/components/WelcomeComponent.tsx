import * as React from "react";
import {useContext} from "react";
import {Image, StyleSheet, Text, View} from "react-native"
import Context from "../context/context";


const WelcomeComponent = () => {

    const context = useContext(Context);

    return (
        <View style={styles.container}>
            <Text style={styles.welcomeText}>Hi {context.name}!</Text>
            <Image style={{height: 50, width: 50}} source={{uri: context.profileUrl}}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        height: 30
    },
    welcomeText: {
        fontWeight: "bold",
        fontSize: 20,
    }
})

export default WelcomeComponent;