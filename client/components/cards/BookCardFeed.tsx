import * as React from 'react';
import {StyleSheet, Text, TouchableWithoutFeedback, View} from "react-native"
import BookWithPointsInFeed from './cardParts/BookWithPointsInFeed';
import {NavigationInjectedProps} from 'react-navigation';


interface BookCardFeedProps {
    title: string,
    imgUrl: string,
    author?: string,
    description?: string,
    category?: string,
    navigation?: any,
}

const BookCardFeed = ({
                          title,
                          author,
                          description,
                          imgUrl,
                          category,
                          navigation
                      }: BookCardFeedProps & NavigationInjectedProps) => {

    function getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
    }


    const info = {title, author, imgUrl, category, description}

    return (
        <TouchableWithoutFeedback onPress={() => {
            navigation.navigate("Book", info)
            console.log("book click")
        }
        }>
            <View style={styles.card}>
                <BookWithPointsInFeed imgUrl={imgUrl} points={Math.round(getRandomArbitrary(20, 35))}/>
                <View style={styles.rightSection}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.author}>{author}</Text>
                    <View style={styles.category}>
                        <Text style={{margin: 20, color: '#124BDD'}}>{category}</Text>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    card: {
        flexDirection: "row",
        width: '100%',
        marginTop: 12,
    },
    category: {
        height: 35,
        borderRadius: 10,
        backgroundColor: "#f5f9ff",
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        alignSelf: 'flex-start'
    },
    rightSection: {
        justifyContent: 'flex-end',
        marginBottom: 29,
        flexShrink: 1

    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    author: {
        fontSize: 15,
    }
})

export default BookCardFeed;
