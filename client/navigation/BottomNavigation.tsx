import * as React from "react";
import {useState} from "react";
import {SafeAreaView, StatusBar, StyleSheet, View} from "react-native"
import DashboardScreen from '../screens/DashboardScreen';
import AdventuresScreen from '../screens/AdventuresScreen';
import StatsScreen from '../screens/StatsScreen';
import BottomMenuButton from '../components/BottomMenuButton';


const BottomNavigation = () => {

    const [chosen, changeChosen] = useState("DashboardScreen");

    const content = () => {
        switch (chosen) {
            case "DashboardScreen":
                return (<DashboardScreen/>);

            case "AdventuresScreen":
                return (<AdventuresScreen/>);

            default:
                return (<StatsScreen/>);

        }
    }

    return (
        <SafeAreaView style={styles.screen}>
            <StatusBar/>
            <View style={styles.main}>
                {content()}
            </View>
            <View style={styles.bottom}>
                <View style={styles.row}>
                    <BottomMenuButton font="Logo" name="menu" text="Dashboard"
                                      callback={() => changeChosen("DashboardScreen")}
                                      color={chosen === "DashboardScreen" ? "#009e93" : "black"}
                    />
                    <BottomMenuButton font="Logo" name="menu" text="Adventures"
                                      callback={() => changeChosen("AdventuresScreen")}
                                      color={chosen === "AdventuresScreen" ? "#009E93FF" : "black"}
                    />
                    <BottomMenuButton font="Logo" name="menu" text="Stats" callback={() => changeChosen("StatsScreen")}
                                      color={chosen === "StatsScreen" ? "#009E93FF" : "black"}
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    screen: {
        height: '100%',
        flex: 1,
    },
    main: {
        height: '87.5%',
        paddingHorizontal: "2.5%"
    },
    bottom: {
        height: '12.5%',
        width: '100%',
        alignItems: 'center',
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#e8e8e8'
    },
});

export default BottomNavigation;
