import React, {useState} from 'react'
import {Animated, Image, Modal, SafeAreaView, StatusBar, Text, TouchableOpacity, View} from 'react-native'
import {COLORS, SIZES} from '../constants';

const Quiz = ({allQuestions}) => {

    // const allQuestions = data;
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [currentOptionSelected, setCurrentOptionSelected] = useState(null);
    const [correctOption, setCorrectOption] = useState(null);
    const [isOptionsDisabled, setIsOptionsDisabled] = useState(false);
    const [score, setScore] = useState(0)
    const [showNextButton, setShowNextButton] = useState(false)
    const [showScoreModal, setShowScoreModal] = useState(false)

    const validateAnswer = (selectedOption) => {
        let correct_option = allQuestions[currentQuestionIndex]['correct_option'];
        setCurrentOptionSelected(selectedOption);
        setCorrectOption(correct_option);
        setIsOptionsDisabled(true);
        if (selectedOption == correct_option) {
            // Set Score
            setScore(score + 1)
        }
        // Show Next Button
        setShowNextButton(true)
    }
    const handleNext = () => {
        if (currentQuestionIndex == allQuestions.length - 1) {
            // Last Question
            // Show Score Modal
            setShowScoreModal(true)
        } else {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setCurrentOptionSelected(null);
            setCorrectOption(null);
            setIsOptionsDisabled(false);
            setShowNextButton(false);
        }
        Animated.timing(progress, {
            toValue: currentQuestionIndex + 1,
            duration: 1000,
            useNativeDriver: false
        }).start();
    }
    const restartQuiz = () => {
        setShowScoreModal(false);

        setCurrentQuestionIndex(0);
        setScore(0);

        setCurrentOptionSelected(null);
        setCorrectOption(null);
        setIsOptionsDisabled(false);
        setShowNextButton(false);
        Animated.timing(progress, {
            toValue: 0,
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
                    <Text style={{color: COLORS.black, fontSize: 18, opacity: 0.6, fontWeight: 'bold'}}>/ {allQuestions.length}</Text>
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
                            onPress={() => validateAnswer(option)}
                            disabled={isOptionsDisabled}
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
        if (showNextButton) {
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
                    <Text style={{fontSize: 18, color: COLORS.black, textAlign: 'center', fontWeight:"bold"}}>Next</Text>
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

                {/* Score Modal */}
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={showScoreModal}
                >
                    <View style={{
                        flex: 1,
                        backgroundColor: COLORS.primary,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <View style={{
                            backgroundColor: COLORS.white,
                            width: '90%',
                            borderRadius: 20,
                            padding: 20,
                            alignItems: 'center'
                        }}>
                            <Text style={{
                                fontSize: 30,
                                fontWeight: 'bold',
                            }}>{score > (allQuestions.length / 2) ? 'Congratulations!' : 'Oops!'}</Text>

                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'flex-start',
                                alignItems: 'center',
                                marginVertical: 20
                            }}>
                                <Text style={{
                                    fontSize: 30,
                                    color: score > (allQuestions.length / 2) ? COLORS.success : COLORS.error,
                                    fontWeight:"bold"
                                }}>{score}</Text>
                                <Text style={{
                                    fontSize: 20, color: COLORS.black, fontWeight:"bold"
                                }}>/ {allQuestions.length}</Text>
                            </View>
                            {/* Retry Quiz button */}
                            <TouchableOpacity
                                onPress={restartQuiz}
                                style={{
                                    backgroundColor: COLORS.accent,
                                    padding: 20, width: '100%', borderRadius: 20
                                }}>
                                <Text style={{
                                    textAlign: 'center', color: COLORS.white, fontSize: 20, fontWeight:"bold"
                                }}>Retry Quiz</Text>
                            </TouchableOpacity>

                        </View>

                    </View>
                </Modal>

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
