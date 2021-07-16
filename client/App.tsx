import * as React from 'react';
import MainNavigator from "./navigation/MainNavigator";
import { StatusBar } from 'expo-status-bar';
import QuizScreen from './screens/QuizScreen';


export default function App() {

    return (
        <>
            <StatusBar style="auto"/>
            <MainNavigator/>
            {/*<QuizScreen/>*/}
        </>
    );
}

