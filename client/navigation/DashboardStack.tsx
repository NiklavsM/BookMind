import * as React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import DashboardScreen from "../screens/DashboardScreen";
import BooksScreen from "../screens/BooksScreen";

const DashboardStack = ({route}) => {

    const Stack = createStackNavigator();

    return (
        <Stack.Navigator initialRouteName="Dashboard" screenOptions={{headerShown: false}}>
            <Stack.Screen name="Dashboard" component={DashboardScreen} initialParams={{route}} />
            <Stack.Screen name="Books" component={BooksScreen} options={{headerShown: true}}/>
        </Stack.Navigator>
    )
}

export default DashboardStack;
