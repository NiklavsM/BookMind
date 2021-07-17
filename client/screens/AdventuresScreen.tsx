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


                <Image
                    style={{position: 'absolute', width: 100, height: 60, left: 260, top: 570}}
                    source={require('../assets/handsbutton.png')}
                />

                <Image
                    style={{position: 'absolute', width: 100, height: 60, left: 60, top: 770}}
                    source={require('../assets/handsbutton.png')}
                />

                <Image
                    style={{position: 'absolute', width: 100, height: 60, left: 45, top: 1000}}
                    source={require('../assets/handsbutton.png')}
                />

                <Image
                    style={{position: 'absolute', width: 100, height: 60, left: 250, top: 1200}}
                    source={require('../assets/handsbutton.png')}
                />

                <Image
                    style={{position: 'absolute', width: 100, height: 60, left: 230, top: 1450}}
                    source={require('../assets/handsbutton.png')}
                />

                <Image
                    style={{position: 'absolute', width: 100, height: 60, left: 50, top: 1600}}
                    source={require('../assets/handsbutton.png')}
                />

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
