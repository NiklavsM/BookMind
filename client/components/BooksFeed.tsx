import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { getAllEbooks } from '../api/BooksApi';
import BookCard from '../components/BookCard';

export default function BooksFeed() {

    useEffect(() => {
        loadBooks().then(r => {});
        // getBooks().then(r => setBooks(r));
    })

    const [books, setBooks] = useState<any[]>([]);

    const loadBooks = async () => {
        let books: any = []

        let book: any = {}
        book["id"] = "1"
        book["name"] = "name1"
        book["description"] = "description1"
        books.push(book);

        book = {}
        book["id"] = "2"
        book["name"] = "name2"
        book["description"] = "description2"
        books.push(book);

        book = {}
        book["id"] = "3"
        book["name"] = "name3"
        book["description"] = "description3"
        books.push(book);

        setBooks(books);

    }

    const getBooks = async () => {
        let booksArr: any = []

        const responseJSON = await getAllEbooks("Harry Potter");
        let books: any = [] = responseJSON.items;
        // let size = books.length;
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
            <Text>Open up App.tsx to start working on your app!!!</Text>
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
