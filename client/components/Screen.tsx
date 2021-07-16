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
        height: '100%',
        flex: 1,
        paddingTop: '11%',
        paddingBottom: '2%',
    }
});

export default Screen;
