import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"

const BookSummarySection = ({title, author, category, description}) => {

    return (
        <View>
            <Text style={styles.bookTitle}>{title}</Text>
            <Text>{author}</Text>
            <TouchableOpacity
                style={styles.category}
                onPress={() => {
                    console.log("clicked")
                }}>
                <Text style={{margin: 20}}>{category}</Text>
            </TouchableOpacity>
            <Text>{description}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    bookTitle: {
        fontSize: 23,
        fontWeight: 'bold'
    },
    category: {
        height: 35,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#124BDD",
        backgroundColor: "#f5f9ff",
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '10%',
        marginBottom: 12,
        alignSelf: 'flex-start'
    },
})

export default BookSummarySection;
