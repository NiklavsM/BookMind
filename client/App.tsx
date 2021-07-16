import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { getAllEbooks } from './api/BooksApi';
import BookCard from './components/BookCard';
import BooksFeed from './components/BooksFeed';

export default function App() {


    return (
        <View style={styles.container}>
            <StatusBar style="auto"/>
            <BooksFeed/>
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
