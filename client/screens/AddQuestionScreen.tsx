import * as React from "react";
import {useState} from "react";
import {Image, StyleSheet, Text, TextInput, TouchableOpacity} from "react-native"
import Screen from "../components/Screen";
import {addQuestion} from "../api/questionApi";
import Toast from "react-native-toast-message";
import {NavigationInjectedProps} from "react-navigation";
import {buttonHeight} from "../assets/sizesConstants";

const AddQuestionScreen = ({route, navigation}: NavigationInjectedProps & any) => {
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");
    const [optionTwo, setOptionTwo] = useState("");
    const [optionThree, setOptionThree] = useState("");
    // const [optionFour, setOptionFour] = useState("");

    const onSave = () => {
        addQuestion({
            title: route.params.title,
            correct_option: answer,
            options: [answer, optionTwo, optionThree],
            question,
        })
        Toast.show({
            type: 'success',
            position: 'bottom',
            text1: 'Question Added',
        });
        navigation.goBack();
    }

    return (
        <Screen>
            <Text style={styles.championText}>Your question</Text>
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
            {/*<TextInput*/}
            {/*    maxLength={40}*/}
            {/*    style={styles.singleLineInput}*/}
            {/*    value={optionFour}*/}
            {/*    onChangeText={setOptionFour}*/}
            {/*/>*/}

            <TouchableOpacity
                style={styles.saveButton}
                onPress={onSave}
            >
                <Text style={{fontWeight: "bold"}}>Done</Text>
            </TouchableOpacity>
            <Image source={require("../assets/images/dcasd.png")}/>
        </Screen>
    )
}

const styles = StyleSheet.create({
    championText: {
        fontSize:18,
        fontWeight: "bold",
        marginLeft: 12,
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
        marginTop: 50,
        marginRight: 15,
        width: 90,
        height: buttonHeight,
        borderStyle: "solid",
        borderRadius: 10,
        borderColor: "black",
        borderWidth: 1,
        alignContent: "center",
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "flex-end",
    }
});

export default AddQuestionScreen;
