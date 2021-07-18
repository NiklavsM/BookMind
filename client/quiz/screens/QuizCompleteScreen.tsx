import * as React from "react";
import {StyleSheet, Text, TouchableOpacity, View, ScrollView} from "react-native";
import RateQuestion from "../../components/RateQuestion";
import {buttonHeight} from "../../assets/sizesConstants";

const QuizCompleteScreen = ({navigation, route}) => {

    const questions = route.params.questions;
    const score = route.params.score;

    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.title}>Congrats, you scored <Text style={{color: "#1FAD66"}}> {score}</Text> out
                    of {questions.length}!</Text>
                {questions.map((question, index) => (
                    <RateQuestion index={index} key={question.question}
                                  correctOption={question.correctOption}
                                  question={question.question}
                                  selectedOption={question.selectedOption}/>
                ))}
                <TouchableOpacity style={styles.submitButton} onPress={() => navigation.navigate("AfterQuizAnimation")}>
                    <Text>Finish</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        padding: 20,
        backgroundColor:"white",

    },
    title: {
        fontWeight: "bold",
        fontSize: 20,
        marginBottom: 20,
    },
    submitButton: {
        borderWidth: 2,
        borderColor: "black",
        borderRadius: 5,
        height: buttonHeight,
        width: 80,
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "flex-end",
        margin: 15,
    }
})

export default QuizCompleteScreen;