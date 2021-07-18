import * as React from 'react';
import {FlatList} from "react-native"
import TrendingBookCard from '../cards/TrendingBookCard';

const trendingBooksData = [{
    title: "Sapiens",
    author: "Yuval Noah Harari",
    imgUrl: "http://books.google.com/books/content?id=1EiJAwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    category: "Social Science",
    description: "**THE MILLION COPY BESTSELLER** Sapiens showed us where we came from. In uncertain times, Homo Deus shows us where we're going. 'Ho\n" +
        "mo Deus will shock you. It will entertain you. It will make you think in ways you had not thought before' Daniel Kahneman, bestselling author of Thinking\n" +
        ", Fast and Slow Yuval Noah Harari envisions a near future in which we face a new set of challenges. Homo Deus explores the projects, dreams and nightmare\n" +
        "s that will shape the twenty-first century and beyond - from overcoming death to creating artificial life. It asks the fundamental questions: how can we\n" +
        "protect this fragile world from our own destructive power? And what does our future hold?"
}, {
    title: "Master Your Focus",
    author: "Thibaut Meurisse",
    imgUrl: "http://books.google.com/books/content?id=Ic1czgEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api\"",
    category: "Psychology",
    description: "Do you keep flitting from one goal to another? Do you hustle without having much to show for your efforts? If so, Master Your Focus\n" +
        " is for you. In Master Your Focus, you'll discover: What true productivity really is (and how to master it) The 3 types of focus and how exactly you can\n" +
        "develop each of them How to stop jumping from one thing to the next and finally complete your key tasks (and why this is so critical) How to achieve more\n" +
        " by doing less The 17 simple strategies to boost your focus And much more. Or perhaps you're tired of settling for less than you can be? If so, Master Yo\n" +
        "ur Destiny is for you. In Master Your Destiny, you'll discover: How the story you tell yourself prevents you from living the life you want Why your curre\n" +
        "nt story is fiction (and how to replace it with a better one) Five powerful models of reality that will transform your outlook on life How to design an e\n" +
        "mpowering environment that brings the best out of you And much more. If you like easy-to-understand strategies, practical exercises, and no-nonsense teac\n" +
        "hing, you will love this 2-book bundle. Grab your copy of Master Your Focus & Destiny: 2 books in 1 today to develop laser-sharp focus and take control o\n" +
        "f your destiny."
}, {
    title: "Steve Jobs",
    author: "Walter Isaacson",
    imgUrl: "http://books.google.com/books/content?id=JT6FCgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    category: "Chief executive officers",
    description: "Walter Isaacson’s “enthralling” (The New Yorker) worldwide bestselling biography of Apple cofounder Steve Jobs. Based on more than\n" +
        "forty interviews with Steve Jobs conducted over two years—as well as interviews with more than 100 family members, friends, adversaries, competitors, and\n" +
        " colleagues—Walter Isaacson has written a riveting story of the roller-coaster life and searingly intense personality of a creative entrepreneur whose pa\n" +
        "ssion for perfection and ferocious drive revolutionized six industries: personal computers, animated movies, music, phones, tablet computing, and digital\n" +
        " publishing. Isaacson’s portrait touched millions of readers. At a time when America is seeking ways to sustain its innovative edge, Jobs stands as the u\n" +
        "ltimate icon of inventiveness and applied imagination. He knew that the best way to create value in the twenty-first century was to connect creativity wi\n" +
        "th technology. He built a company where leaps of the imagination were combined with remarkable feats of engineering. Although Jobs cooperated with the au\n" +
        "thor, he asked for no control over what was written. He put nothing off-limits. He encouraged the people he knew to speak honestly. He himself spoke cand\n" +
        "idly about the people he worked with and competed against. His friends, foes, and colleagues offer an unvarnished view of the passions, perfectionism, ob\n" +
        "sessions, artistry, devilry, and compulsion for control that shaped his approach to business and the innovative products that resulted. His tale is instr\n" +
        "uctive and cautionary, filled with lessons about innovation, character, leadership, and values. Steve Jobs is the inspiration for the movie of the same n\n" +
        "ame starring Michael Fassbender, Kate Winslet, Seth Rogen, and Jeff Daniels, directed by Danny Boyle with a screenplay by Aaron Sorkin."
}]

const TrendingBooksFeed = ({navigation}) => {

    const trendingBookRender = ({item}: any) => (

        <TrendingBookCard
            onClick={() => {
                navigation.navigate("Book", {...item})
            }}
            name={item.title}
            url={item.imgUrl}
        />
    )

    return (
        <FlatList
            horizontal={true}
            data={trendingBooksData}
            keyExtractor={item => item.title}
            renderItem={trendingBookRender}
            showsHorizontalScrollIndicator={false}
        />
    )
}

export default TrendingBooksFeed;
