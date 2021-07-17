import * as React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import Screen from '../components/Screen';
import { NavigationInjectedProps } from 'react-navigation';

const AdventuresScreen = ({navigation}: NavigationInjectedProps) => {


    return (
        <>
            <ScrollView contentContainerStyle={{alignItems: 'center', paddingTop: 120, backgroundColor: 'white'}}
                        showsVerticalScrollIndicator={false}>
                <Image
                    source={require('../assets/line.png')}
                    resizeMode='cover'
                />
                    <Image
                        style={{position: 'absolute', width: 130, height: 130, left: 10, top: 80}}
                        source={{uri: "https://media.giphy.com/media/8ooqQ8q9qak3uyEeQA/giphy.gif"}}
                    />
                <Text style={{position: 'absolute', left: 120, top: 130, fontWeight: 'bold'}}>YOU JOINED BOOKREMIND YAY</Text>
                <Text style={{position: 'absolute', left: 120, top: 150}}>17th July 2021</Text>
                <Image
                    style={{position: 'absolute',  width: 110, height: 100, left: 200, top: 310}}
                    source={require('../assets/book.png')}

                />
                <Text style={{position: 'absolute', left: 230, top: 280, fontWeight: 'bold'}}>+10 science points</Text>
                <Text style={{position: 'absolute', left: 80, top: 350, fontWeight: 'bold'}}>CHEMISTRY FOR</Text>
                <Text style={{position: 'absolute', left: 80, top: 365, fontWeight: 'bold'}}>DUMMIES</Text>
                <Text style={{position: 'absolute', left: 80, top: 380}}>17th July</Text>


                <Image
                    style={{position: 'absolute', width: 110, height: 100, left: 260, top: 570}}
                    source={require('../assets/book.png')}
                />
                <Text style={{position: 'absolute', left: 170, top: 545, fontWeight: 'bold'}}>+10 history points</Text>
                <Text style={{position: 'absolute', left: 130, top: 610, fontWeight: 'bold'}}>21 LESSONS OF</Text>
                <Text style={{position: 'absolute', left: 130, top: 625, fontWeight: 'bold'}}>21 CENTURY</Text>
                <Text style={{position: 'absolute', left: 130, top: 640}}>19th July</Text>


                <Image
                    style={{position: 'absolute', width: 100, height: 100, left: 60, top: 770}}
                    source={{uri: "https://media.giphy.com/media/E2618yEh2TZA5Hnnws/giphy.gif"}}
                />

                <Text style={{position: 'absolute', left: 170, top: 800, fontWeight: 'bold'}}>LEVEL 1 HISTORY</Text>
                <Text style={{position: 'absolute', left: 170, top: 815, fontWeight: 'bold'}}>WOHOO</Text>

                <Image
                    style={{position: 'absolute', width: 100, height: 100, left: 45, top: 1000}}
                    source={{uri: "https://media.giphy.com/media/qCUNpDHj2LSmZDX5XB/giphy.gif"}}
                />
                <Text style={{position: 'absolute', left: 160, top: 1035, fontWeight: 'bold'}}>ADDED A QUESTION</Text>

                <Image
                    style={{position: 'absolute', width: 100, height: 80, left: 265, top: 1200}}
                    source={{uri: "https://media.giphy.com/media/Wy68XxjfQjwAoQYtFN/giphy.gif"}}
                />
                <Text style={{position: 'absolute', left: 120, top: 1225, fontWeight: 'bold'}}>YOUR QUESTION GOT</Text>
                <Text style={{position: 'absolute', left: 120, top: 1240, fontWeight: 'bold'}}>UPVOTED</Text>

                <Image
                    style={{position: 'absolute', width: 110, height: 100, left: 230, top: 1450}}
                    source={require('../assets/book.png')}
                />

                <Text style={{position: 'absolute', left: 110, top: 1420, fontWeight: 'bold'}}>+10 self development points</Text>
                <Text style={{position: 'absolute', left: 80, top: 1490, fontWeight: 'bold'}}>7 HABITS OF HIGHLY</Text>
                <Text style={{position: 'absolute', left: 80, top: 1505, fontWeight: 'bold'}}>EFFECTIVE PEOPLE</Text>


                <Image
                    style={{position: 'absolute', width: 100, height: 80, left: 30, top: 1630}}
                    source={{uri: "https://media.giphy.com/media/Wy68XxjfQjwAoQYtFN/giphy.gif"}}

                />

                <Text style={{position: 'absolute', left: 135, top: 1650, fontWeight: 'bold'}}>YOUR QUESTION GOT</Text>
                <Text style={{position: 'absolute', left: 135, top: 1665, fontWeight: 'bold'}}>UPVOTED</Text>

                <Image
                    style={{position: 'absolute', width: 100, height: 60, left: 50, top: 1850}}
                    source={require('../assets/handsbutton.png')}
                />

                <Image
                    style={{position: 'absolute', width: 100, height: 60, left: 250, top: 2000}}
                    source={require('../assets/handsbutton.png')}
                />
            </ScrollView>
        </>
    )
};

export default AdventuresScreen;
