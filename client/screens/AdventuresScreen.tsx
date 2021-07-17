import * as React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import Screen from '../components/Screen';
import { NavigationInjectedProps } from 'react-navigation';
import { useContext } from 'react';
import Context from "../context/context";

const AdventuresScreen = ({navigation}: NavigationInjectedProps) => {
    const context = useContext(Context);

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
                <Text style={{position: 'absolute', left: 170, top: 830}}>19th July</Text>

                <Image
                    style={{position: 'absolute', width: 100, height: 100, left: 45, top: 1000}}
                    source={{uri: "https://media.giphy.com/media/qCUNpDHj2LSmZDX5XB/giphy.gif"}}
                />
                <Text style={{position: 'absolute', left: 160, top: 1035, fontWeight: 'bold'}}>ADDED A QUESTION</Text>
                <Text style={{position: 'absolute', left: 160, top: 1050}}>21st July</Text>

                <Image
                    style={{position: 'absolute', width: 100, height: 80, left: 265, top: 1200}}
                    source={{uri: "https://media.giphy.com/media/Wy68XxjfQjwAoQYtFN/giphy.gif"}}
                />
                <Text style={{position: 'absolute', left: 120, top: 1225, fontWeight: 'bold'}}>YOUR QUESTION GOT</Text>
                <Text style={{position: 'absolute', left: 120, top: 1240, fontWeight: 'bold'}}>UPVOTED</Text>
                <Text style={{position: 'absolute', left: 120, top: 1255}}>22nd July</Text>

                <Image
                    style={{position: 'absolute', width: 110, height: 100, left: 230, top: 1450}}
                    source={require('../assets/book.png')}
                />

                <Text style={{position: 'absolute', left: 110, top: 1420, fontWeight: 'bold'}}>+10 self development points</Text>
                <Text style={{position: 'absolute', left: 80, top: 1490, fontWeight: 'bold'}}>7 HABITS OF HIGHLY</Text>
                <Text style={{position: 'absolute', left: 80, top: 1505, fontWeight: 'bold'}}>EFFECTIVE PEOPLE</Text>
                <Text style={{position: 'absolute', left: 80, top: 1520}}>25th July</Text>


                <Image
                    style={{position: 'absolute', width: 100, height: 80, left: 30, top: 1630}}
                    source={{uri: "https://media.giphy.com/media/Wy68XxjfQjwAoQYtFN/giphy.gif"}}

                />

                <Text style={{position: 'absolute', left: 135, top: 1650, fontWeight: 'bold'}}>YOUR QUESTION GOT</Text>
                <Text style={{position: 'absolute', left: 135, top: 1665, fontWeight: 'bold'}}>UPVOTED</Text>
                <Text style={{position: 'absolute', left: 135, top: 1680}}>25th July</Text>

                <Image
                    style={{position: 'absolute',  width: 100, height: 100, left: 75, top: 1850}}
                    source={{uri: "https://media.giphy.com/media/TjcVp401T4bP3Dkz7t/giphy.gif"}}
                />

                <Text style={{position: 'absolute', left: 180, top: 1870, fontWeight: 'bold'}}>BOOK CO HERO BADGE</Text>
                <Text style={{position: 'absolute', left: 180, top: 1885, fontWeight: 'bold'}}>Your question is liked by many</Text>
                <Text style={{position: 'absolute', left: 180, top: 1900}}>25th July</Text>

                <Image
                    style={{position: 'absolute', width: 110, height: 100, left: 250, top: 2000}}
                    source={require('../assets/book.png')}
                />
                <Text style={{position: 'absolute', left: 280, top: 1970, fontWeight: 'bold'}}>+10 History points</Text>
                <Text style={{position: 'absolute', left: 160, top: 2070, fontWeight: 'bold'}}>SAPIENS</Text>
                <Text style={{position: 'absolute', left: 160, top: 2085}}>19th July</Text>

                <Image style={{width: 130, height: 130}} source={{uri:context.profileUrl}}/>
                <Text style={{position: 'absolute', left: 290, top: 2170, fontWeight: 'bold'}}>YOU ARE HERE!</Text>
                <Text style={{position: 'absolute', left: 290, top: 2185}}>What is next in</Text>
                <Text style={{position: 'absolute', left: 290, top: 2200}}>your adventure?</Text>
                <Image style={{width: 40, height: 40}} source={{uri:'https://static.hillarys.co.uk/asset/media/9636/silk-white.jpg?mcb=5f884e47a7424cfe86340315ccaafed0&width=272&height=312&mode=Crop'}}/>


            </ScrollView>
        </>
    )
};

export default AdventuresScreen;
