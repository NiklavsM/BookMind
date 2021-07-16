import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import BookWIthPointsCardFullBookScreen from '../../cards/cardParts/BookWIthPointsCardFullBookScreen';

const CoverButtonsSection = ({imgUrl}) => {

    return (
        <View>
            <View style={styles.coverAndQuestions}>
                <BookWIthPointsCardFullBookScreen imgUrl={imgUrl}/>
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
    section: {},
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
