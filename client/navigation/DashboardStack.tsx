import * as React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import DashboardScreen from "../screens/DashboardScreen";
import BooksScreen from "../screens/BooksScreen";
import BookScreen from '../screens/BookScreen';
import QuizScreen from '../screens/QuizScreen';
import AddQuestionScreen from "../screens/AddQuestionScreen";
import QuizCompleteScreen from "../quiz/screens/QuizCompleteScreen";

const StackScreenOptions = {
    headerShown: true,
    headerStyle: {
        backgroundColor: 'tomato',
        height: 65
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
        // fontWeight: 'bold',
    },
}

const DashboardStack = () => {

    const Stack = createStackNavigator();

    return (
        <Stack.Navigator initialRouteName="Dashboard" screenOptions={{headerShown: false}}>
            <Stack.Screen name="Dashboard" component={DashboardScreen}/>
            <Stack.Screen name="BookQuiz" component={QuizScreen}/>
            <Stack.Screen name="QuizComplete" component={QuizCompleteScreen}/>
            <Stack.Screen name="Books" component={BooksScreen} options={StackScreenOptions}/>
            <Stack.Screen name="Book" component={BookScreen} options={StackScreenOptions}/>
            <Stack.Screen name="Add Question" component={AddQuestionScreen} options={StackScreenOptions}/>
        </Stack.Navigator>
    )
}

export default DashboardStack;
