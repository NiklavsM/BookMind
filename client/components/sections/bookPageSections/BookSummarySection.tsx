import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"

const BookSummarySection = () => {

    return (
        <View>
            <Text style={styles.bookTitle}>Title</Text>
            <Text>Author</Text>
            <TouchableOpacity
                style={styles.category}
                onPress={() => {
                    console.log("clicked")
                }}>
                <Text>Politics</Text>
            </TouchableOpacity>
            <Text>Short summary Short summary Short summary Short summary Short summary Short summary Short summary Short summary Short summary Short summary Short summary Short summary Short summary Short summary Short summary Short summary Short summary Short summary Short summary Short summary Short summary Short summary </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    bookTitle: {
        fontSize: 32,
        fontWeight: 'bold'
    },
    category: {
        height: 35,
        width: 100,
        borderRadius: 10,
        backgroundColor: "#dcdcdc",
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '10%',
        marginBottom: 12
    },
})

export default BookSummarySection;
