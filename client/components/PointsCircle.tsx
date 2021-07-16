import * as React from 'react';
import { View, Text } from "react-native"

const PointsCircle = () => {

    return (
        <View style={{
            width: 60,
            height: 60,

            borderRadius: 30,
            backgroundColor: '#2d2d2d',
            justifyContent: 'center'
        }}>
            <Text style={{fontSize: 14, textAlign: 'center', color: 'white'}}>20</Text>
            <Text style={{fontSize: 14, textAlign: 'center', color: 'white'}}>points</Text>
        </View>
    )
}

export default PointsCircle;
