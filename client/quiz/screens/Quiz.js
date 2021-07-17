import React, {useState} from 'react'
import {Animated, Image, SafeAreaView, StatusBar, Text, TouchableOpacity, View} from 'react-native'
import {COLORS, SIZES} from '../constants';

const Quiz = ({allQuestions, navigation}) => {

    // const allQuestions = data;
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [currentOptionSelected, setCurrentOptionSelected] = useState(null);
    const [correctOption, setCorrectOption] = useState(null);
    const [score, setScore] = useState(0)
    const [questions, setQuestions] = useState([]);

    const validateAnswer = (question, selectedOption) => {
        let correct_option = allQuestions[currentQuestionIndex]['correct_option'];
        setCurrentOptionSelected(selectedOption);
        setCorrectOption(correct_option);
        if (selectedOption == correct_option) {
            // Set Score
            setScore(score + 1)
        }
        setQuestions([...questions, {question, correctOption: correct_option, selectedOption}])
    }
    const handleNext = () => {
        validateAnswer(allQuestions[currentQuestionIndex].question, currentOptionSelected)
        if (currentQuestionIndex == allQuestions.length - 1) {
            let finalScore = score;
            if (currentOptionSelected == allQuestions[currentQuestionIndex]['correct_option']) {
                finalScore++;
            }
            // Last Question
            navigation.navigate("QuizComplete", {
                    questions: [...questions, {
                        question: allQuestions[currentQuestionIndex].question,
                        correctOption: allQuestions[currentQuestionIndex]['correct_option'],
                        selectedOption: currentOptionSelected,
                    }],
                    score: finalScore
                }
            );
        } else {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setCurrentOptionSelected(null);
            setCorrectOption(null);
        }
        Animated.timing(progress, {
            toValue: currentQuestionIndex + 1,
            duration: 1000,
            useNativeDriver: false
        }).start();
    }


    const renderQuestion = () => {
        return (
            <View style={{
                marginVertical: 40
            }}>
                {/* Question Counter */}
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'flex-end'
                }}>
                    <Text style={{
                        color: COLORS.black,
                        fontSize: 19,
                        opacity: 0.6,
                        marginRight: 2,
                        fontWeight: 'bold'
                    }}>{currentQuestionIndex + 1}</Text>
                    <Text style={{
                        color: COLORS.black,
                        fontSize: 18,
                        opacity: 0.6,
                        fontWeight: 'bold'
                    }}>/ {allQuestions.length}</Text>
                </View>

                {/* Question */}
                <Text style={{
                    color: COLORS.black,
                    fontSize: 25,
                    fontWeight: 'bold'
                }}>{allQuestions[currentQuestionIndex]?.question}</Text>
            </View>
        )
    }
    const renderOptions = () => {
        return (
            <View>
                {
                    allQuestions[currentQuestionIndex]?.options.map(option => (
                        <TouchableOpacity
                            onPress={() => setCurrentOptionSelected(option)}
                            key={option}
                            style={{
                                borderWidth: 1.5,
                                borderColor: option == currentOptionSelected
                                    ? COLORS.success
                                    : COLORS.black,
                                backgroundColor: option == currentOptionSelected ? COLORS.fillIn : COLORS.white,
                                height: 54, borderRadius: 13,
                                flexDirection: 'row',
                                alignItems: 'center', justifyContent: 'space-between',
                                paddingHorizontal: 20,
                                marginVertical: 10
                            }}
                        >
                            <Text style={{fontSize: 20, color: COLORS.black, fontWeight: 'bold'}}>{option}</Text>

                        </TouchableOpacity>
                    ))
                }
            </View>
        )
    }
    const renderNextButton = () => {
        if (currentOptionSelected != null) {
            console.log(currentOptionSelected);
            return (
                <TouchableOpacity
                    onPress={handleNext}
                    style={{
                        marginTop: 65,
                        width: '40%',
                        height: 30,
                        backgroundColor: COLORS.white,
                        padding: 20,
                        borderRadius: 16,
                        borderColor: COLORS.black,
                        borderWidth: 1.5,
                        justifyContent: 'center',
                        alignSelf: 'flex-end',
                    }}>
                    <Text
                        style={{fontSize: 18, color: COLORS.black, textAlign: 'center', fontWeight: "bold"}}>Next</Text>
                </TouchableOpacity>
            )
        } else {
            return null
        }
    }


    const [progress, setProgress] = useState(new Animated.Value(0));
    const progressAnim = progress.interpolate({
        inputRange: [0, allQuestions.length],
        outputRange: ['0%', '100%']
    })
    const renderProgressBar = () => {
        return (
            <View style={{
                width: '100%',
                height: 20,
                borderRadius: 20,
                backgroundColor: 'rgb(255,255,255)',
                borderColor: COLORS.black,
                borderWidth: 0.5

            }}>
                <Animated.View style={[{
                    height: 20,
                    borderRadius: 20,
                    backgroundColor: COLORS.black
                }, {
                    width: progressAnim
                }]}>

                </Animated.View>

            </View>
        )
    }


    return (
        <SafeAreaView style={{
            flex: 1,
            // padding: 20
        }}>
            <StatusBar barStyle="light-content" backgroundColor={COLORS.primary}/>
            <View style={{
                flex: 1,
                paddingVertical: 20,
                paddingHorizontal: 24,
                backgroundColor: COLORS.white,
                position: 'relative'
            }}>

                {/* ProgressBar */}
                {renderProgressBar()}

                {/* Question */}
                {renderQuestion()}

                {/* Options */}
                {renderOptions()}

                {/* Next Button */}
                {renderNextButton()}

                {/* Background Image */}
                <Image
                    source={{
                        uri: "https://media.giphy.com/media/69hWUKqJT4OA3jvupu/giphy.gif"
                    }}
                    style={{
                        width: 120,
                        height: 120,
                        zIndex: -2,
                        position: 'absolute',
                        bottom: 50,
                        left: 35,
                        right: 0,
                        opacity: 0.9
                    }}
                    resizeMode={'contain'}
                />

            </View>
        </SafeAreaView>
    )
}

export default Quiz
