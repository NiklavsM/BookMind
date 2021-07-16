import * as React from 'react';
import {View} from "react-native"
import Screen from '../components/Screen';
import QuizeSingleChoice from "react-native-react-native-quiz-single-choice";

const QuizScreen = () => {

    const data = [
        {
            question:
                "How good is this question ?",
            optionA: "Bad",
            optionB: "Fine",
            optionC: "OK",
            optionD: "good",
            answer: "great",
        },
        {
            question: "How is this library",
            optionA: "Dunno0",
            optionB: "Dunnou",
            optionC: "Dunnpo",
            optionD: "Dunnooo",
            answer: "Dunnooooo",
        },
        {
            question: "Who is the wifey ?",
            optionA: "Marta",
            optionB: "It's Marta",
            optionC: "Martaaaa",
            optionD: "Marty",
            answer: "Martawifey",
        },
    ];

    return (
        <QuizeSingleChoice
            containerStyle={{ backgroundColor: "rgba(255,0,0,0.42)", paddingTop: 30 }}
            questionTitleStyle={{ fontSize: 22, color: "#FFF" }}
            responseStyle={{
                borderRadius: 15,
            }}
            responseTextStyle={{ fontSize: 12, fontWeight: "normal" }}
            selectedResponseStyle={{
                borderRadius: 15,
                backgroundColor: "#fa5541",
            }}
            selectedResponseTextStyle={{
                fontSize: 14,
                fontWeight: "normal",
            }}
            responseRequired={true}
            nextButtonText={"Next"}
            nextButtonStyle={{ backgroundColor: "#06d755" }}
            nextButtonTextStyle={{ color: "#FFF" }}
            prevButtonText={"Prev"}
            prevButtonStyle={{ backgroundColor: "#fa5541" }}
            prevButtonTextStyle={{ color: "#FFF" }}
            endButtonText={"Done"}
            endButtonStyle={{ backgroundColor: "#000" }}
            endButtonTextStyle={{ color: "#FFF" }}
            buttonsContainerStyle={{ marginTop: "auto"}}
            onEnd={(results) => {
                console.log(results);
            }}
            data={data}
        />
    )
}

export default QuizScreen;
