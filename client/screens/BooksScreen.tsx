import * as React from "react";
import {Text, View} from "react-native"
import {NavigationInjectedProps} from "react-navigation";
import Screen from "../components/Screen";
import {defaultStyles} from "../styles/styles";


const BooksScreen = ({navigation}: NavigationInjectedProps) => {

    return (
        <Screen>
            <View style={defaultStyles.container}>
                <Text>Hi</Text>
            </View>
        </Screen>
    )
}

export default BooksScreen;