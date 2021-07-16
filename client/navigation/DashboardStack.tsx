import * as React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import DashboardScreen from "../screens/DashboardScreen";
import BooksScreen from "../screens/BooksScreen";
import BookScreen from '../screens/BookScreen';
import QuizScreen from '../screens/QuizScreen';

const DashboardStack = ({route}) => {

    const Stack = createStackNavigator();

    return (
        <Stack.Navigator initialRouteName="Dashboard" screenOptions={{headerShown: false}}>
            <Stack.Screen name="Dashboard" component={DashboardScreen} />
            <Stack.Screen name="BookQuiz" component={QuizScreen}/>
            <Stack.Screen name="Books" component={BooksScreen} options={{
                headerShown: true,
                headerStyle: {
                    backgroundColor: 'tomato',
                    height: 65
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    // fontWeight: 'bold',
                },
            }}/>
            <Stack.Screen name="Book" component={BookScreen} options={{
                headerShown: true,
                headerStyle: {
                    backgroundColor: 'tomato',
                    height: 65
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    // fontWeight: 'bold',
                },
            }}/>
        </Stack.Navigator>
    )
}

export default DashboardStack;
