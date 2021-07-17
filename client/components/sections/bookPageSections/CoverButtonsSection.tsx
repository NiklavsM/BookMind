import * as React from 'react';
import {useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from "react-native"
import BookWIthPointsCardFullBookScreen from '../../cards/cardParts/BookWIthPointsCardFullBookScreen';
import {NavigationInjectedProps} from 'react-navigation';
import {getQuestions} from '../../../api/questionApi';

interface CoverButtonsSection {
    title: string,
    imgUrl: string,
    navigation?: any,
}

const CoverButtonsSection = ({title, imgUrl, navigation}: CoverButtonsSection & NavigationInjectedProps) => {

    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        loadQuestions();
    }, []);

    const loadQuestions = async () => {

        await getQuestions({title: title}).then((r: any) => {
            setQuestions(r);
        })
    }

    return (
        <View>
            <View style={styles.coverAndQuestions}>
                <BookWIthPointsCardFullBookScreen imgUrl={imgUrl}/>
                <View style={styles.buttons}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            navigation.navigate("BookQuiz", {allQuestions: questions})
                            console.log("clicked")
                        }}>
                        <Text>Take a quiz</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            navigation.navigate("Add Question", {title})
                        }}>
                        <Text>Add a question</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            console.log("clicked")
                        }}>
                        <Text>Challenge a friend!</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    section: {},
    coverAndQuestions: {
        flexDirection: "row",
    },
    button: {
        height: 35,
        width: 150,
        borderRadius: 3,
        backgroundColor: "#dcdcdc",
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '10%'
    },
    buttons: {
        justifyContent: 'flex-end',
        marginBottom: 25,

    }
})

export default CoverButtonsSection;
