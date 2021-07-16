import * as React from "react";
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';

const Screen = ({children}) => {
    return (
            <SafeAreaView style={styles.screen}>
                {children}
            </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        height: '100%',
        padding: '5%',
        paddingTop: '11%',
    }
});

export default Screen;
