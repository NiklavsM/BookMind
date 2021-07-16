import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { getAllEbooks } from './api/BooksApi';

export default function App() {

  useEffect(() => {
    getBooks().then(r => {});
  })

  const getBooks = async () => {
    try {
      const responseJSON = await getAllEbooks("Sapiens: A Brief History of Humankind");
      console.log(responseJSON);
    } catch (error) {

    }
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>Open up App.tsx to start working on your app!!!</Text>

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
