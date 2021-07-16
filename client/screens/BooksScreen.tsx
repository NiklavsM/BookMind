import * as React from "react";
import {ScrollView, View} from "react-native"
import Screen from "../components/Screen";
import {defaultStyles} from "../styles/styles";
import BookCard from "../components/cards/BookCard";
import BookCardFeed from '../components/cards/BookCardFeed';


const BooksScreen = ({route}: any) => {
    const books = route.params;
    return (
        <Screen>
            <ScrollView>
                <View style={defaultStyles.container}>
                    {books.map(book =>
                        <BookCardFeed key={book.id}
                                  title={book.volumeInfo.title}
                                  author={book.volumeInfo.authors[0]}
                                  imgUrl={book.volumeInfo.imageLinks?.thumbnail}
                        />
                    )}
                </View>
            </ScrollView>
        </Screen>
    )
}

export default BooksScreen;
