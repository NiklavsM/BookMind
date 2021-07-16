import * as React from "react";
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';

const Screen = ({children}) => {
    return (
        <ScrollView style={styles.screen}>
            <SafeAreaView >
                {children}
            </SafeAreaView>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    screen: {
        height: '100%',
        flex: 1,
        paddingVertical: '11%',
        paddingHorizontal: '3%',
    }
});

export default Screen;
