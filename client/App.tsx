import * as React from 'react';
import MainNavigator from "./navigation/MainNavigator";
import GlobalState from "./context/GlobalState";
import Toast from 'react-native-toast-message';

export default function App() {

    return (
        <GlobalState>
            {/*<StatusBar style="auto"/>*/}
            <MainNavigator/>
            {/*    <QuizScreen/>*/}
            <Toast ref={(ref) => Toast.setRef(ref)}/>
        </GlobalState>
    );
}

