import React from "react";
import {GoogleBookSearch} from 'react-native-google-books'
const DashboardScreen = () => {

    return (
        <GoogleBookSearch
            apikey={"AIzaSyAnKM235UpJ-WUZshkcQWlobqf1C2TfEbA"}
            onResultPress={(book)=> console.log(book)}
        />
    )
}

export default DashboardScreen;