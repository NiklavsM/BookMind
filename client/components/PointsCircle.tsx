import * as React from 'react';
import { View, Text } from "react-native"

const PointsCircle = () => {

    return (
        <View style={{
            width: 60,
            height: 60,

            borderRadius: 30,
            borderWidth: 1,
            borderColor: 'black',
            borderStyle: 'solid',
            backgroundColor: 'black',
            justifyContent: 'center'
        }}>
            <Text style={{fontSize: 14, textAlign: 'center', color: 'white'}}>20 points</Text>
        </View>
    )
}

export default PointsCircle;
