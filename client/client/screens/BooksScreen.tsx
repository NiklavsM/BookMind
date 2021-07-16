import * as React from "react";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native"
import BookCardFeed from '../components/cards/BookCardFeed';


const BooksScreen = ({route}) => {
    const books = route.params;
    return (
        <SafeAreaView style={styles.screen}>
            <ScrollView
                showsVerticalScrollIndicator={false}>
                {books.map(book =>
                    <BookCardFeed key={book.id}
                                  title={book.volumeInfo.title}
                                  author={book.volumeInfo?.authors?.[0]}
                                  imgUrl={book.volumeInfo.imageLinks?.thumbnail}
                                  category={book.volumeInfo?.categories?.[0]}

                    />
                )}
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        height: '100%',
        paddingLeft: '8%',
        paddingRight: '5%',

    }
});


export default BooksScreen;
