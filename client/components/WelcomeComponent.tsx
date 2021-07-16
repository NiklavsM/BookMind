import * as React from "react";
import {Image, StyleSheet, Text, View} from "react-native"

interface WelcomeComponentProps {
    name: string,
    profilePicUrl: string,
}

const WelcomeComponent = ({name, profilePicUrl}: WelcomeComponentProps) => {

    return (
        <View style={styles.container}>
            <Text >Hi {name}!</Text>
            <Image style={{height: 50, width: 50}} source={{uri: profilePicUrl}}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        height: '3%'
    }
})

export default WelcomeComponent;