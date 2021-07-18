import * as React from "react";
import {Image, StyleSheet, Text, View} from "react-native"

const RateQuestion = ({index, question, correctOption, selectedOption}) => {

    return (
        <View style={styles.container}>
            <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                <View>
                    <Text style={{
                        fontSize: 15,
                        width: 270,
                        paddingBottom: 5,
                        paddingRight: 20
                    }}>{index + 1}. {question}</Text>
                    <View style={{flexDirection: "row", alignItems: "center", width:110}}>
                        {correctOption != selectedOption ?
                            <>
                                <Image
                                    style={styles.iconStyle}
                                    source={require('../assets/images/HandsDenied.png')}
                                />
                                <Text style={{marginRight: 10, color: "#FC6E47"}}>
                                    {selectedOption}
                                </Text>
                            </>
                            : <></>
                        }
                        <Image
                            style={styles.iconStyle}
                            source={require('../assets/images/HandsCheckmark.png')}
                        />
                        <Text style={{color: "#1FAD66"}}>{correctOption}</Text>
                    </View>
                </View>
                <View style={{flexDirection: "row"}}>

                    <View style={styles.iconContainer}>
                        <Image
                            style={styles.iconStyle}
                            source={require('../assets/images/smile.png')}
                        />
                    </View>
                    <View style={styles.iconContainer}>
                        <Image
                            style={styles.iconStyle}
                            source={require('../assets/images/tired.png')}
                        />
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
            borderRadius: 12,
            width: 35,
            height: 35,
            margin: 3,
        },
        iconStyle: {
            width: 20,
            height: 20,
            margin: 5,
        }
    }
)

export default RateQuestion;