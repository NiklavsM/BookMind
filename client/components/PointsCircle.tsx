import * as React from 'react';
import { View, Text } from "react-native"

const PointsCircle = () => {

    function getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
    }


    return (
        <View style={{
            width: 60,
            height: 60,

            borderRadius: 30,
            backgroundColor: '#2C80FD',
            justifyContent: 'center'
        }}>
            <Text style={{fontSize: 14, textAlign: 'center', color: 'white', fontWeight: 'bold'}}>{Math.round(getRandomArbitrary(20, 35))}</Text>
            <Text style={{fontSize: 14, textAlign: 'center', color: 'white'}}>points</Text>
        </View>
    )
}

export default PointsCircle;
