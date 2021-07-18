import * as React from "react";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native"
import BookCardFeed from '../components/cards/BookCardFeed';


const BooksScreen = ({route, navigation}) => {
    const books = route.params;
    return (
        <SafeAreaView style={styles.screen}>
            <ScrollView
                showsVerticalScrollIndicator={false}>
                {books.map(book =>
                    <BookCardFeed key={book.id}
                                  title={book.volumeInfo.title}
                                  author={book.volumeInfo?.authors?.[0]}
                                  // imgUrl={book.volumeInfo.imageLinks?.thumbnail}
                                  imgUrl={(book.volumeInfo.imageLinks?.thumbnail != null) ? book.volumeInfo.imageLinks?.thumbnail : "https://www.designwizard.com/wp-content/uploads/2019/07/74-The-Great-Gatsby-F.Scott-Fitzgerald-Book-Cover-Ideas.jpg"}
                                  category={(book.volumeInfo?.categories?.[0] != null) ? book.volumeInfo?.categories?.[0] : "General"}
                                  description={book.volumeInfo?.description}
                                  navigation={navigation}
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
        backgroundColor: 'white'
    }
});


export default BooksScreen;
