import * as React from "react";
import {StyleSheet, Text, View} from "react-native";
import RateQuestion from "../../components/RateQuestion";

const QuizCompleteScreen = ({route}) => {

    const questions = route.params.questions;
    const score = route.params.score;
    console.log("questions", questions);

    return (

        <View style={styles.container}>
            <Text style={styles.title}>Congrats, you scored <Text style={{color: "blue"}}> {score}</Text> out
                of {questions.length}!</Text>
            {questions.map(question => (
                <RateQuestion key={question.question}
                              correctOption={question.correctOption}
                              question={question.question}
                              selectedOption={question.selectedOption}/>
            ))}
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        padding: 15,
    },
    title: {
        fontWeight: "bold",
        fontSize: 20,
    }
})

export default QuizCompleteScreen;