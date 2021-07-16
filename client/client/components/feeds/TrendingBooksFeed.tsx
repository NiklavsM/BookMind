import * as React from 'react';
import { useEffect, useState } from 'react';
import { FlatList } from "react-native"
import TrendingBookCard from '../cards/TrendingBookCard';

const TrendingBooksFeed = () => {

    const [trendingBooks, setTrendingBooks] = useState<any[]>([]);
    const [firstMount,setFirstMount] = useState(true);

    useEffect(() => {
        if (firstMount) {
            getTrendingBooks().then(r => {
                 setTrendingBooks(r)
            })
        }
        setFirstMount(false)
    })

    const getTrendingBooks = async () => {
        let getTrendingBooksArr = []
        let trendingBook = {}

        trendingBook["name"] = "Follow me to the ground"
        getTrendingBooksArr.push(trendingBook)

        trendingBook = {}
        trendingBook["name"] = "cool popular book 2"
        getTrendingBooksArr.push(trendingBook)

        trendingBook = {}
        trendingBook["name"] = "cool popular book 3"
        getTrendingBooksArr.push(trendingBook)

        trendingBook = {}
        trendingBook["name"] = "cool popular book 4"
        getTrendingBooksArr.push(trendingBook)

        return getTrendingBooksArr;
    }

    const trendingBookRender = ({item}: any) => (
        <TrendingBookCard
            name={item.name}
        />
    )

    return (
        <FlatList
            horizontal={true}
            data={trendingBooks}
            keyExtractor={item => item.name.toString()}
            renderItem={trendingBookRender}
            showsHorizontalScrollIndicator={false}
        />
    )
}

export default TrendingBooksFeed;
