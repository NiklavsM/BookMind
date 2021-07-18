import * as React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import DashboardScreen from "../screens/DashboardScreen";
import BooksScreen from "../screens/BooksScreen";
import BookScreen from '../screens/BookScreen';
import QuizScreen from '../screens/QuizScreen';
import AddQuestionScreen from "../screens/AddQuestionScreen";
import QuizCompleteScreen from "../quiz/screens/QuizCompleteScreen";
import AfterQuizAnimation from '../screens/AfterQuizAnimation';

const StackScreenOptions = {
    headerShown: true,
    headerStyle: {
        backgroundColor: '#2C80FD',
        height: 90,
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
            <Stack.Screen name="Book Quiz" component={QuizScreen} options={StackScreenOptions}/>
            <Stack.Screen name="QuizComplete" component={QuizCompleteScreen}/>
            <Stack.Screen name="Books" component={BooksScreen} options={StackScreenOptions}/>
            <Stack.Screen name="Book" component={BookScreen} options={StackScreenOptions}/>
            <Stack.Screen name="Add Question" component={AddQuestionScreen} options={StackScreenOptions}/>
            <Stack.Screen name="AfterQuizAnimation" component={AfterQuizAnimation} options={{...StackScreenOptions, headerShown:false}} />
        </Stack.Navigator>
    )
}

export default DashboardStack;
