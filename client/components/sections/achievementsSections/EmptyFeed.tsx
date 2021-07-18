import * as React from 'react';
import { Text, View, StyleSheet, FlatList } from "react-native"
import { useEffect, useState } from 'react';

const EmptyFeed = ({category}) => {

    const [users, setUsers] = useState([]);

    useEffect(() => {

        let chosenActivities

        if(category == "OVERALL") {
            chosenActivities = ["user1", "user2", "user3"]
        } else {
            chosenActivities = ["user1", "user2"]
        }

        setUsers(chosenActivities);

    }, [category])

    const activityRender = ({item}) => (
        // <StickingOutCard
        //     activity={item.title}
        //     description={item.description}
        //     photo={item.image}
        // />
        <Text>{item}</Text>
    )

    return (
        <FlatList style={{flex: 1}} showsVerticalScrollIndicator={false}
                  data={users}
                  keyExtractor={item => item.toString()}
                  renderItem={activityRender}
        />

    )
}

export default EmptyFeed;
