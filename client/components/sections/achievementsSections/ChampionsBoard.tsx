import * as React from 'react';
import { useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native"
import EmptyFeed from './EmptyFeed';

const ChampionsBoard = () => {

    const [selected, changeSelected] = useState('0');
    const [cat, changeCat] = useState("OVERALL");

    const items = [
        {
            id: '0',
            name: 'OVERALL',
        },
        {
            id: '1',
            name: 'POLITICS',
        },
        {
            id: '2',
            name: 'SCIENCE',
        },
        {
            id: '3',
            name: 'HISTORY',
        },
        {
            id: '4',
            name: 'PERSONAL DEVELOPMENT',

        },
        {
            id: '5',
            name: 'FICTION',
        }]

    const renderCategories = ({item}) => {
        if (item.id === selected) {
            return (
                <TouchableWithoutFeedback onPress={() => switchCats(item)}>
                    <Text style={styles.optionSelected}>{item.name}</Text>
                </TouchableWithoutFeedback>
            );

        } else {
            return (
                <TouchableWithoutFeedback onPress={() => switchCats(item)}>
                    <Text style={styles.option}>{item.name}</Text>
                </TouchableWithoutFeedback>
            )

        }
    }

    const switchCats = (item) => {
        changeSelected(item.id);
        changeCat(item.name)
    };


    return (
        <View>
            <Text style={styles.headerText}>Bookworm Champions board</Text>
            <FlatList
                data={items}
                renderItem={renderCategories}
                keyExtractor={item => item.id}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            />
            <View style={{flex: 1}}>
                {<EmptyFeed category={cat}/>}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingBottom: 20
    },
    option: {
        color: 'black',
        fontSize: 15,
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderWidth: 1,
        margin: 7,
        borderRadius: 14,
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 'bold',
    },
    optionSelected: {
        color: "#000000",
        fontSize: 15,
        fontWeight: 'bold',
        paddingVertical: 10,
        paddingHorizontal: 15,
        backgroundColor: "#F5F9FF",
        borderWidth: 1,
        borderColor: "#124BDD",
        margin: 7,
        borderRadius: 14,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default ChampionsBoard;
