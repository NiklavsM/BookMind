import * as React from "react";
import AdventuresScreen from '../screens/AdventuresScreen';
import StatsScreen from '../screens/StatsScreen';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';
import DashboardStack from "./DashboardStack";

const BottomNavigation = () => {
    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator initialRouteName="Dashboard"
                       screenOptions={({route}) => ({
                           tabBarIcon: ({focused, color, size}) => {
                               let iconName;

                               if (route.name === 'Dashboard') {
                                   return <Feather name='home' size={size} color={color}/>;
                               } else if (route.name === 'Your Adventures') {
                                   iconName = focused ? 'book-open' : 'book';
                                   return <Feather name={iconName} size={size} color={color}/>;
                               } else if (route.name === 'Achievements') {
                                   iconName = focused ? 'star' : 'star';
                                   return <Feather name={iconName} size={size} color={color}/>;
                               }
                           },
                       })}
                       tabBarOptions={{
                           tabStyle: {backgroundColor: "#F5F9FF"},
                           activeTintColor: '#2C80FD',
                           inactiveTintColor: '#7A879A',
                       }}
        >
            <Tab.Screen name="Dashboard" component={DashboardStack}/>
            <Tab.Screen name="Your Adventures" component={AdventuresScreen}/>
            <Tab.Screen name="Achievements" component={StatsScreen}/>
        </Tab.Navigator>
    )
}

export default BottomNavigation;
