import * as React from 'react';
import {View} from "react-native"
import Quiz from '../quiz/screens/Quiz'

const QuizScreen = ({route}) => {

    return (
            <Quiz allQuestions={route.params.allQuestions}/>
    )
}

export default QuizScreen;
