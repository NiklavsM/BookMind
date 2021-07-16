import * as React from 'react';
import {StyleSheet, Text, View} from "react-native"
import ActionCard from '../../cards/ActionCard';

const ActionSection = () => {

    return (
        <View >
            <View style={styles.upperSection}>
                <View style={styles.upperTextSection}>
                    <Text style={styles.bigBoldFont}>Actions/Updates</Text>
                    <Text style={styles.regularText}>See more</Text>
                </View>
                <Text style={styles.regularText}>Some text</Text>
            </View>
            <ActionCard text="You are 5pt away from winning!" date="12th July 2021"/>
            <ActionCard text="You are 5pt away from winning!" date="12th July 2021"/>
            <ActionCard text="You are 5pt away from winning!" date="12th July 2021"/>
        </View>
    )
}

const styles = StyleSheet.create({
    upperSection: {
        paddingBottom: 10
    },
    upperTextSection: {
        flexDirection: "row",
        justifyContent: 'space-between',
    },
    bigBoldFont: {
        fontSize: 30,
        fontWeight: "bold"
    },
    regularText: {
        fontSize: 16.5,
    }
});

export default ActionSection;