import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { getAllEbooks } from './api/BooksApi';
import BookCard from './components/BookCard';
import BooksFeed from './components/BooksFeed';
import BottomNavigation from './navigation/BottomNavigation';

export default function App() {


    return (
        <View style={styles.container}>
            <StatusBar style="auto"/>
            <BottomNavigation/>
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
