import * as React from "react";
import {useContext} from "react";
import {Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";

import * as Google from 'expo-google-app-auth';

import {NavigationInjectedProps} from "react-navigation";
import Context from '../context/context';
import {buttonHeight, headerFontSize} from "../assets/sizesConstants";


const LoginScreen = ({navigation}: NavigationInjectedProps) => {

    let value;
    const context = useContext(Context);

    const handleGoogleLogin = () => {
        const config = {
            androidClientId: "955311792911-n86n8jrrmi50j4mnbd10f7du83ulr2r1.apps.googleusercontent.com",
            scopes: ['profile', 'email']
        }

        Google.logInAsync(config).then((result: any) => {

            const {type, user} = result;
            if (type === 'success') {
                context.setName(user.name.split(" ")[0]);
                context.setProfileUrl(user.photoUrl);
                navigation.navigate('BottomNavigation')
            } else {
                console.log("Sing in was cancelled")
            }
        }).catch(error => {
            console.log(error)
        })
    }


    return (
        <View style={{justifyContent: "center", flex: 1, padding: 30, backgroundColor: "white"}}>
            <Image style={{alignSelf: "center", width:300, height:100}} source={require("../assets/BookMindLogo.png")}/>
            <Text style={styles.header}>Hi, there..</Text>
            <View>
                <Text style={{fontWeight: "bold"}}>Username</Text>
                <TextInput value={value}
                           autoCompleteType={'username'}
                           style={styles.textInput}
                />
                <Text style={{fontWeight: "bold"}}>Password</Text>
                <TextInput value={value}
                           autoCompleteType={'password'}
                           secureTextEntry={true}
                           style={styles.textInput}
                />
                <TouchableOpacity style={styles.buttons} onPress={handleGoogleLogin}>
                    <Text style={{fontWeight: "bold",}}>Log in</Text>
                </TouchableOpacity>
            </View>

            <View>
                <Text style={{alignSelf: 'center'}}>Or</Text>

            </View>
            <TouchableOpacity style={styles.buttons} onPress={handleGoogleLogin}>
                <Image style={{alignSelf: "center", width:30, height:30}} source={require("../assets/images/google.png")}/>
                <Text style={{fontWeight: "bold",}}>Login with Google</Text>
            </TouchableOpacity>
            <Text style={{alignSelf: "center"}}>Dont have an account? <Text style={{color: "#124BDD"}}>Sign up
                here</Text></Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        fontWeight: "bold",
        fontSize: headerFontSize,
        paddingBottom: 20,
        marginTop:50,
    },
    textInput: {
        borderWidth: 1,
        borderRadius: 10,
        height: 40,
        marginTop: 10,
        marginBottom: 20,
        paddingLeft: 5,
    },
    buttons: {
        height: buttonHeight,
        width: 160,
        backgroundColor: "#F5F9FF",
        borderColor: "#124BDD",
        borderWidth: 1,
        borderRadius: 6,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        margin: 15,
        flexDirection:"row",
    }
})

export default LoginScreen;