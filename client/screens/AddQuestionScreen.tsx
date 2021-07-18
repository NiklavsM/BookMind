import * as React from "react";
import {useState} from "react";
import {StyleSheet, Text, TextInput, TouchableOpacity} from "react-native"
import Screen from "../components/Screen";
import {addQuestion} from "../api/questionApi";
import Toast from "react-native-toast-message";
import {NavigationInjectedProps} from "react-navigation";

const AddQuestionScreen = ({route, navigation} : NavigationInjectedProps & any) => {
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");
    const [optionTwo, setOptionTwo] = useState("");
    const [optionThree, setOptionThree] = useState("");
    const [optionFour, setOptionFour] = useState("");

    const onSave = () => {
        addQuestion({
            title: route.params.title,
            correct_option: answer,
            options: [answer, optionTwo, optionThree, optionFour],
            question,
        })
        Toast.show({
            type:'success',
            position:'bottom',
            text1: 'Question Added',
        });
        navigation.goBack();
    }

    return (
        <Screen>
            <Text style={styles.championText}>Question</Text>
            <TextInput
                maxLength={200}
                multiline numberOfLines={4}
                style={styles.multilineInput}
                value={question}
                onChangeText={setQuestion}
            />

            <Text style={styles.championText}>Correct answer</Text>
            <TextInput
                maxLength={40}
                style={styles.singleLineInput}
                value={answer}
                onChangeText={setAnswer}
            />

            <Text style={styles.championText}>Other options</Text>
            <TextInput
                maxLength={40}
                style={styles.singleLineInput}
                value={optionTwo}
                onChangeText={setOptionTwo}
            />
            <TextInput
                maxLength={40}
                style={styles.singleLineInput}
                value={optionThree}
                onChangeText={setOptionThree}
            />
            <TextInput
                maxLength={40}
                style={styles.singleLineInput}
                value={optionFour}
                onChangeText={setOptionFour}
            />
            <TouchableOpacity
                style={styles.saveButton}
                onPress={onSave}
            >
                <Text>Save</Text>
            </TouchableOpacity>
        </Screen>
    )
}

const styles = StyleSheet.create({
    championText: {
        fontWeight: "bold"
    },
    multilineInput: {
        height: 80,
        margin: 12,
        padding: 8,
        borderWidth: 1,
        borderRadius: 10,
        textAlignVertical: "top",
    },
    singleLineInput: {
        height: 40,
        margin: 12,
        padding: 8,
        borderWidth: 1,
        borderRadius: 10,
    },
    saveButton: {
        width: 100,
        height: 30,
        borderStyle: "solid",
        borderColor: "black",
        borderWidth: 1,
        alignContent: "center",
        alignItems: "center",
    }
});

export default AddQuestionScreen;
