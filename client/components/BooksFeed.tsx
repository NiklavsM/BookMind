import * as React from "react";
import { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { getAllEbooks } from '../api/BooksApi';
import BookCard from '../components/BookCard';

const BooksFeed = () => {

    const [books, setBooks] = useState<any[]>([]);
    const [firstMount, setFirstMount] = useState(true);

    useEffect(() => {
        if (firstMount) {
            getBooks().then(r => setBooks(r));
        }
        setFirstMount(false);

    }, [firstMount])

    const getBooks = async () => {
        let booksArr: any = []

        const responseJSON = await getAllEbooks("Harry Potter");
        let books: any = [] = responseJSON.items;
        let book: any = {}

        for (let i = 0; i < books.length; i++) {
            book = {}
            book["id"] = i;
            book["name"] = responseJSON.items[i].volumeInfo.title;
            book["description"] = responseJSON.items[i].volumeInfo.description;
            console.log(responseJSON.items[i].volumeInfo.title);
            booksArr.push(book);
        }
        console.log("HERE" + booksArr)

        return booksArr;
    }

    const bookRender = ({item}: any) => (
        <BookCard
            name={item.name}
            description={item.description}
        />
    )

    return (
        <View style={styles.container}>
            <BookCard name="name" description="description"/>
            <FlatList
                data={books}
                keyExtractor={item => item.id.toString()}
                renderItem={bookRender}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default BooksFeed;
