import * as React from 'react';

import {GoogleBookSearch} from 'react-native-google-books'
import BooksFeed from '../components/BooksFeed';
import { View } from 'react-native';
const DashboardScreen = () => {

    return (
        <>
        <GoogleBookSearch
            apikey={"AIzaSyAnKM235UpJ-WUZshkcQWlobqf1C2TfEbA"}
            onResultPress={(book)=> console.log(book)}
        />
        <BooksFeed/>
        </>
    )
}

export default DashboardScreen;
