import * as React from "react";
import {FlatList, View} from "react-native"
import Screen from "../components/Screen";
import {defaultStyles} from "../styles/styles";
import BookCard from "../components/cards/BookCard";


const BooksScreen = ({route}: any) => {
    const books = route.params;
    return (
        <Screen>
            <FlatList
                ListHeaderComponent={
                    <View style={defaultStyles.container}>
                        {books.map(book =>
                            <BookCard name={book.volumeInfo.title}
                                      description={book.volumeInfo.description}
                                      imgUrl={book.volumeInfo.imageLinks?.thumbnail}
                            />
                        )}
                    </View>
                }/>
        </Screen>
    )
}

export default BooksScreen;