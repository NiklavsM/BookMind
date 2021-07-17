import * as React from 'react';
import Quiz from '../quiz/screens/Quiz'

const QuizScreen = ({route, navigation}) => {

    return (
        <Quiz allQuestions={route.params.allQuestions} navigation={navigation}/>
    )
}

export default QuizScreen;
