import * as React from 'react';
import { Image, Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native"
import Screen from '../components/Screen';
import { NavigationInjectedProps } from 'react-navigation';

const AfterQuizAnimation = ({navigation}: NavigationInjectedProps) => {

    return (
        <View style={{paddingTop: 90, padding: 50, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontSize: 30}}>WoW you're so smart</Text>
            <Text style={{fontSize: 25, paddingBottom: 20}}>keep going!</Text>
            <Image style={{width: 330, height: 330}}
                   source={{uri: 'https://media.giphy.com/media/l3XPs6TbA9whT14dHA/giphy.gif'}}/>
            <View style={{ flexDirection: "row"}}>
            <TouchableOpacity
                style={{
                    height: 35,
                    width: 150,
                    borderRadius: 10,
                    backgroundColor: "#DFECFF",
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: '10%',
                    margin: 20
                }}
                onPress={() => {
                    //share I guess
                }}>
                <Text>Share</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={{
                    height: 35,
                    width: 150,
                    borderRadius: 10,
                    backgroundColor: "#DFECFF",
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: '10%',
                    margin: 20
                }}
                onPress={() => {
                    navigation.navigate("Dashboard")
                }}>
                <Text>Next</Text>
            </TouchableOpacity>
            </View>
        </View>
    )
}

export default AfterQuizAnimation;
