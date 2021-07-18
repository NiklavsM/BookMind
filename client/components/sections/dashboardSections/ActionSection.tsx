import * as React from 'react';
import {StyleSheet, Text, View} from "react-native"
import ActionCard from '../../cards/ActionCard';

const ActionSection = () => {

    return (
        <View>
            <View style={styles.upperSection}>
                <View style={styles.upperTextSection}>
                    <Text style={styles.bigBoldFont}>Activity</Text>
                    <Text style={{...styles.regularText, color:"#2C80FD"}}>See more</Text>
                </View>
                <Text style={styles.regularText}>Browse your activity</Text>
            </View>
            <ActionCard source={require("../../../assets/images/GoldMedal.png")}
                        text="Well Done! You finished your 100th adventure!" date="19th July 2021"/>
            <ActionCard source={require("../../../assets/images/SilverMedal.png")}
                        text="Congrats! You are on your way of book domination!" date="19th July 2021"/>
            <ActionCard source={require("../../../assets/images/BronzeMedal.png")}
                        text="This is great! You rank in best 10% of the readers!" date="18th July 2021"/>
        </View>
    )
}

const styles = StyleSheet.create({
    upperSection: {
        paddingTop: "11%"
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
