import * as React from "react";
import {Image, StyleSheet, Text, View} from "react-native"
import Feather from 'react-native-vector-icons/Feather';

const RateQuestion = ({question, correctOption, selectedOption}) => {

    return (
        <View style={styles.container}>
            <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                <View>
                    <Text style={{fontSize: 15, width: 250, paddingBottom: 5}}>{question}</Text>
                    <View style={{flexDirection: "row", alignItems: "center"}}>
                        {correctOption != selectedOption ?
                            <>
                                <Image
                                    style={{width: 25, height: 20}}
                                    source={require('../assets/images/HandsDenied.png')}
                                />
                                <Text style={{marginRight: 10}}>
                                    {selectedOption}
                                </Text>
                            </>
                            : <></>
                        }
                        <Image
                            style={{width: 25, height: 20}}
                            source={require('../assets/images/HandsCheckmark.png')}
                        />
                        <Text>{correctOption}</Text>
                    </View>
                </View>
                <View style={{flexDirection: "row"}}>

                    <View style={styles.iconContainer}>
                        <Feather size={23} name="smile"/>
                    </View>
                    <View style={styles.iconContainer}>
                        <Feather size={23} name="align-justify"/>
                    </View>
                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create(
    {
        container: {
            margin: 10,
            height: 60,
            width: 300,
            justifyContent: "center",
            // flexDirection: "column",
        },
        iconContainer: {
            justifyContent: "center",
            alignItems: "center",
            alignContent: 'center',
            borderWidth: 1,
            borderRadius: 7,
            width: 35,
            height: 35,
            margin: 3,
        }
    }
)

export default RateQuestion;