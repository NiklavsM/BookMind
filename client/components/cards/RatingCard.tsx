import * as React from 'react';
import { Image, Text, View } from "react-native"

const RatingCard = ({id, name, points, url}) => {

    return (
        <View style={{flexDirection: 'row', padding: 17}}>
            <Text style={{fontSize: 35, fontWeight: 'bold', paddingRight: 4}}>{id}</Text>
            <Image source={{uri: url}} style={{width: 50, height: 50, borderRadius: 25, }} />
            <View style={{paddingLeft: 10}}>
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>{name}</Text>
                <Text style={{fontSize: 15}}>{points} points</Text>
            </View>
        </View>
    )
}

export default RatingCard;
