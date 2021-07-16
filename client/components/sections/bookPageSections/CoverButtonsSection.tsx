import * as React from 'react';
import { StyleSheet, View, Text, Button, TouchableHighlight, TouchableOpacity } from "react-native"
import BookWIthPointsCardFullBookScreen from '../../cards/BookWIthPointsCardFullBookScreen';

const CoverButtonsSection = () => {

    return (
        <View>
            <Text style={styles.bookTitle}>Book title</Text>
            <View style={styles.coverAndQuestions}>
                <BookWIthPointsCardFullBookScreen/>
                <View style={styles.buttons}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            console.log("clicked")
                        }}>
                        <Text>Add a question</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            console.log("clicked")
                        }}>
                        <Text>Take a quiz</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            console.log("clicked")
                        }}>
                        <Text>Challenge a friend!</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    section: {

    },
    bookTitle: {
        fontSize: 35,
        fontWeight: 'bold',
        paddingBottom: 25
    },
    coverAndQuestions: {
        flexDirection: "row",
    },
    button: {
        height: 35,
        width: 150,
        borderRadius: 3,
        backgroundColor: "#dcdcdc",
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '10%'
    },
    buttons: {
        justifyContent: 'flex-end',
        marginBottom: 25,

    }
})

export default CoverButtonsSection;
