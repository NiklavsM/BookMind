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
            borderWidth: 2,
            borderColor: '#124BDD',
            backgroundColor: '#F5F9FF',
            justifyContent: 'center'
        }}>
            <Text style={{fontSize: 14, textAlign: 'center', color: '#124BDD', fontWeight: 'bold'}}>{Math.round(getRandomArbitrary(20, 35))}</Text>
            <Text style={{fontSize: 14, textAlign: 'center', color: '#124BDD'}}>points</Text>
        </View>
    )
}

export default PointsCircle;
