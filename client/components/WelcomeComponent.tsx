import * as React from "react";
import {useContext} from "react";
import {Image, StyleSheet, Text, View} from "react-native"
import Context from "../context/context";


const WelcomeComponent = () => {

    const context = useContext(Context);

    return (
        <View style={styles.container}>
            <Text style={styles.welcomeText}>Hi, {context.name}!</Text>
            <View style={{flexDirection: 'row'}}>
                <Image style={{
                    height: 36,
                    width: 70,
                    borderRadius: 12,
                    borderWidth: 1,
                    borderColor: "lightgrey",
                    marginRight: 14
                }} source={require("../assets/points.png")}/>
                <Image style={{height: 37, width: 37, borderRadius: 18, borderWidth: 1, borderColor: "lightgrey"}}
                       source={{uri: context.profileUrl}}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        height: 40,
    },
    welcomeText: {
        fontWeight: "bold",
        fontSize: 25,
    }
})

export default WelcomeComponent;
