import * as React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native"
import LoginScreen from "../components/LoginScreen";
import MainScreen from "../screens/MainScreen";


const Stack = createStackNavigator();

const MainNavigator = () => (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="MainScreen" screenOptions={{headerShown: false}}>
            <Stack.Screen name="LoginScreen" component={LoginScreen}/>
            <Stack.Screen name="MainScreen" component={MainScreen}/>
        </Stack.Navigator>
    </NavigationContainer>
)

export default MainNavigator