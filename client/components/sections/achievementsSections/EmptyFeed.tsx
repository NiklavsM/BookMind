import RatingCard from '../../cards/RatingCard';

const EmptyFeed = ({category}) => {

    const [users, setUsers] = useState([]);

    useEffect(() => {

        let chosenActivities = []

        if(category == "OVERALL") {
            chosenActivities.push({id: 1, name: "Marta Adamska", points: 534, pic: "https://scontent.fgla3-2.fna.fbcdn.net/v/t1.6435-9/82323220_2875625202477418_7344437622833414144_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=Odothq0jitgAX8-x05x&_nc_ht=scontent.fgla3-2.fna&oh=a06687a10c024fac649924d6e31ca1d1&oe=60F7ABF8"})
            chosenActivities.push({id: 2, name: "Niklavs Meiers", points: 454, pic: "https://scontent.fgla3-2.fna.fbcdn.net/v/t1.6435-9/126957106_3614177678648809_7651356183761113835_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=Agj2tcobAYkAX8058pu&tn=BN7oor94ARHOGM3e&_nc_ht=scontent.fgla3-2.fna&oh=a061fcef209f3c424c4c6e484bbee0cc&oe=60F79B5A"})
            chosenActivities.push({id: 3, name: "Ally Cally", points: 444, pic: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"})
            chosenActivities.push({id: 4, name: "Filip Trilipski", points: 444, pic: "https://www.rollingstone.com/wp-content/uploads/2021/06/jason-derulo-DVN_7095.jpg?resize=1800,1200&w=1800"})
            chosenActivities.push({id: 5, name: "Jess Davidson", points: 444, pic: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/lana-condor-attends-the-premiere-of-netflixs-to-all-the-news-photo-1615563787.?crop=0.84181xw:1xh;center,top&resize=480:*"})
        } else if(category == "POLITICS") {
            chosenActivities.push({id: 2, name: "Niklavs Meiers", points: 454, pic: "https://scontent.fgla3-2.fna.fbcdn.net/v/t1.6435-9/126957106_3614177678648809_7651356183761113835_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=Agj2tcobAYkAX8058pu&tn=BN7oor94ARHOGM3e&_nc_ht=scontent.fgla3-2.fna&oh=a061fcef209f3c424c4c6e484bbee0cc&oe=60F79B5A"})
            chosenActivities.push({id: 1, name: "Marta Adamska", points: 534, pic: "https://scontent.fgla3-2.fna.fbcdn.net/v/t1.6435-9/82323220_2875625202477418_7344437622833414144_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=Odothq0jitgAX8-x05x&_nc_ht=scontent.fgla3-2.fna&oh=a06687a10c024fac649924d6e31ca1d1&oe=60F7ABF8"})
            chosenActivities.push({id: 3, name: "Ally Cally", points: 444, pic: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"})
            chosenActivities.push({id: 4, name: "Filip Trilipski", points: 444, pic: "https://www.rollingstone.com/wp-content/uploads/2021/06/jason-derulo-DVN_7095.jpg?resize=1800,1200&w=1800"})
            chosenActivities.push({id: 5, name: "Jess Davidson", points: 444, pic: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/lana-condor-attends-the-premiere-of-netflixs-to-all-the-news-photo-1615563787.?crop=0.84181xw:1xh;center,top&resize=480:*"})
        }else if(category == "SCIENCE") {
            chosenActivities.push({id: 1, name: "Niklavs Meiers", points: 454, pic: "https://scontent.fgla3-2.fna.fbcdn.net/v/t1.6435-9/126957106_3614177678648809_7651356183761113835_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=Agj2tcobAYkAX8058pu&tn=BN7oor94ARHOGM3e&_nc_ht=scontent.fgla3-2.fna&oh=a061fcef209f3c424c4c6e484bbee0cc&oe=60F79B5A"})
            chosenActivities.push({id: 2, name: "Marta Adamska", points: 534, pic: "https://scontent.fgla3-2.fna.fbcdn.net/v/t1.6435-9/82323220_2875625202477418_7344437622833414144_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=Odothq0jitgAX8-x05x&_nc_ht=scontent.fgla3-2.fna&oh=a06687a10c024fac649924d6e31ca1d1&oe=60F7ABF8"})
            chosenActivities.push({id: 3, name: "Ally Cally", points: 444, pic: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"})
            chosenActivities.push({id: 4, name: "Jess Davidson", points: 444, pic: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/lana-condor-attends-the-premiere-of-netflixs-to-all-the-news-photo-1615563787.?crop=0.84181xw:1xh;center,top&resize=480:*"})
            chosenActivities.push({id: 5, name: "Filip Trilipski", points: 444, pic: "https://www.rollingstone.com/wp-content/uploads/2021/06/jason-derulo-DVN_7095.jpg?resize=1800,1200&w=1800"})
        }else if(category == "HISTORY") {
            chosenActivities.push({id: 1, name: "Filip Trilipski", points: 444, pic: "https://www.rollingstone.com/wp-content/uploads/2021/06/jason-derulo-DVN_7095.jpg?resize=1800,1200&w=1800"})
            chosenActivities.push({id: 2, name: "Niklavs Meiers", points: 454, pic: "https://scontent.fgla3-2.fna.fbcdn.net/v/t1.6435-9/126957106_3614177678648809_7651356183761113835_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=Agj2tcobAYkAX8058pu&tn=BN7oor94ARHOGM3e&_nc_ht=scontent.fgla3-2.fna&oh=a061fcef209f3c424c4c6e484bbee0cc&oe=60F79B5A"})
            chosenActivities.push({id: 3, name: "Marta Adamska", points: 534, pic: "https://scontent.fgla3-2.fna.fbcdn.net/v/t1.6435-9/82323220_2875625202477418_7344437622833414144_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=Odothq0jitgAX8-x05x&_nc_ht=scontent.fgla3-2.fna&oh=a06687a10c024fac649924d6e31ca1d1&oe=60F7ABF8"})
            chosenActivities.push({id: 4, name: "Ally Cally", points: 444, pic: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"})
            chosenActivities.push({id: 5, name: "Jess Davidson", points: 444, pic: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/lana-condor-attends-the-premiere-of-netflixs-to-all-the-news-photo-1615563787.?crop=0.84181xw:1xh;center,top&resize=480:*"})
        }else {
            chosenActivities.push({id: 1, name: "Marta Adamska", points: 534, pic: "https://scontent.fgla3-2.fna.fbcdn.net/v/t1.6435-9/82323220_2875625202477418_7344437622833414144_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=Odothq0jitgAX8-x05x&_nc_ht=scontent.fgla3-2.fna&oh=a06687a10c024fac649924d6e31ca1d1&oe=60F7ABF8"})
            chosenActivities.push({id: 2, name: "Niklavs Meiers", points: 454, pic: "https://scontent.fgla3-2.fna.fbcdn.net/v/t1.6435-9/126957106_3614177678648809_7651356183761113835_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=Agj2tcobAYkAX8058pu&tn=BN7oor94ARHOGM3e&_nc_ht=scontent.fgla3-2.fna&oh=a061fcef209f3c424c4c6e484bbee0cc&oe=60F79B5A"})
            chosenActivities.push({id: 3, name: "Ally Cally", points: 444, pic: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"})
            chosenActivities.push({id: 4, name: "Filip Trilipski", points: 444, pic: "https://www.rollingstone.com/wp-content/uploads/2021/06/jason-derulo-DVN_7095.jpg?resize=1800,1200&w=1800"})
            chosenActivities.push({id: 5, name: "Jess Davidson", points: 444, pic: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/lana-condor-attends-the-premiere-of-netflixs-to-all-the-news-photo-1615563787.?crop=0.84181xw:1xh;center,top&resize=480:*"})
        }

        setUsers(chosenActivities);

    }, [category])

    const activityRender = ({item}) => (
        <RatingCard
            url={item.pic}
            name={item.name}
            id={item.id}
            points={item.points}
        />
)

    return (
        <FlatList style={{flex: 1}} showsVerticalScrollIndicator={false}
                  data={users}
                  keyExtractor={item => item.id.toString()}
                  renderItem={activityRender}
        />

    )
}
import * as React from 'react';
import { Text, View, StyleSheet, FlatList } from "react-native"

import { useEffect, useState } from 'react';

export default EmptyFeed;
