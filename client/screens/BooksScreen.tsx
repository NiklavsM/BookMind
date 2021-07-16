import * as React from "react";
import {ScrollView, View} from "react-native"
import Screen from "../components/Screen";
import {defaultStyles} from "../styles/styles";
import BookCard from "../components/cards/BookCard";


const BooksScreen = ({route}: any) => {
    const books = route.params;
    return (
        <Screen>
            <ScrollView>
                <View style={defaultStyles.container}>
                    {books.map(book =>
                        <BookCard key={book.id}
                                  name={book.volumeInfo.title}
                                  description={book.volumeInfo.description}
                                  imgUrl={book.volumeInfo.imageLinks?.thumbnail}
                        />
                    )}
                </View>
            </ScrollView>
        </Screen>
    )
}

export default BooksScreen;
