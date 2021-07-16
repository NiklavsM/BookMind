import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { getAllEbooks } from './api/BooksApi';
import BookCard from './components/BookCard';

export default function App() {

  useEffect(() => {
    loadBooks().then(r => {});
    // getBooks().then(r => {});
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
    try {
      const responseJSON = await getAllEbooks("Sapiens: A Brief History of Humankind");
      let books = responseJSON.items;
      let size = books.length;

      for(let i = 0; i < size; i++) {
        console.log(responseJSON.items[i].volumeInfo.title);
      }
    } catch (error) {

    }
  }

  const bookRender = ({item}: any) => (
    <BookCard
        name={item.name}
        description={item.description}
    />
  )

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
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
