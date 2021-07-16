import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function BookCard({name, description}: any) {

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Text>{name}</Text>
                <Text>{description}</Text>
            </View>
        </SafeAreaView>
    )

}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: '#aaffd5',
        alignItems: 'center',
        justifyContent: 'center',
        width: 330,
        height: 180,
        marginBottom: 20
    },
});
