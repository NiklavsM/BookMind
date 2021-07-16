import * as React from "react";
import {Button, Text, TextInput, View} from "react-native";

import * as Google from 'expo-google-app-auth';

import {NavigationInjectedProps} from "react-navigation";


const LoginScreen = ({navigation}: NavigationInjectedProps) => {

    let value;

    const handleGoogleLogin = () => {
        const config = {
            androidClientId: "955311792911-n86n8jrrmi50j4mnbd10f7du83ulr2r1.apps.googleusercontent.com",
            scopes: ['profile', 'email']
        }

        Google.logInAsync(config).then((result) => {
            console.log(result)
            navigation.navigate('BottomNavigation')
        }).catch(error => {
            console.log(error)
        })
    }


    return (
        <View style={{justifyContent: "center", flex: 1, alignItems: "center"}}>
            <Text>Hi, please log in!</Text>
            <View>
                <TextInput value={value}
                           placeholder="Username"
                           autoCompleteType={'username'}
                />
                <TextInput value={value}
                           placeholder="Password"
                           autoCompleteType={'password'}
                />
                <Button title={"Log in"} onPress={() => {
                }}/>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={{flex: 1, height: 1, backgroundColor: 'black'}}/>
                <View>
                    <Text style={{width: 50, textAlign: 'center'}}>Or</Text>
                </View>
                <View style={{flex: 1, height: 1, backgroundColor: 'black'}}/>
            </View>
            <Button title={"Login with google"} onPress={handleGoogleLogin}/>
            <Text>Dont have an account? Sign up</Text>
        </View>
    )
}

export default LoginScreen;