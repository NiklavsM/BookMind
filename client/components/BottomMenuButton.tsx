import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon1 from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/FontAwesome5';
import Icon3 from 'react-native-vector-icons/Ionicons';
import Icon4 from 'react-native-vector-icons/Feather';

import {StyleSheet, View,TouchableWithoutFeedback, Text} from "react-native";


const BottomMenuButton = ({name, callback, text, color, font} :any) => {

    if(font === "AntDesign") {
        return (
            <TouchableWithoutFeedback onPress={callback}>
                <View style={styles.icon} >
                    <Icon name={name} size={30} color={color}/>
                    <Text style={{color: color, fontSize: 14}}>{text}</Text>
                </View>
            </TouchableWithoutFeedback>
        );
    } else if (font === "FontAwesome") {
        return (
            <TouchableWithoutFeedback onPress={callback}>
                <View style={styles.icon} >
                    <Icon1 name={name} size={30} color={color}/>
                    <Text style={{color: color, fontSize: 14}}>{text}</Text>
                </View>
            </TouchableWithoutFeedback>
        );
    }else if (font === "FontAwesome5") {
        return (
            <TouchableWithoutFeedback onPress={callback}>
                <View style={styles.icon} >
                    <Icon2 name={name} size={30} color={color}/>
                    <Text style={{color: color, fontSize: 14}}>{text}</Text>
                </View>
            </TouchableWithoutFeedback>
        );
    }else {
        return (
            <TouchableWithoutFeedback onPress={callback}>
                <View style={styles.icon} >
                    <Icon3 name={name} size={30} color={color}/>
                    <Text style={{color: color, fontSize: 14}}>{text}</Text>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = StyleSheet.create({
    icon: {
        width:'33.4%',
        justifyContent:'center',
        alignItems:'center',
    }
});


export default BottomMenuButton;
