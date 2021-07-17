require('dotenv').config()
const {MongoClient} = require("mongodb");
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json())

app.listen(3000, () => {
    console.log("Listening")
})

const uri = "mongodb+srv://" + process.env.databaseName + ":" + process.env.databasePassword + "@cluster0.wn3kg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

MongoClient.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(client => {
    const db = client.db('bookApp')
    const questionsCollection = db.collection('questions');
    const booksCollection = db.collection('books');
    const usersCollection = db.collection('users');

    app.post('/addBookQuestion', (req, res) => {
        console.log(req.body)
        questionsCollection.insertOne(req.body)
            .then(result => {
                // console.log(result)
                res.json("Question added")
            })
            .catch(error => console.error(error))
    })


    app.post('/getBookQuestions', (req, res) => {
        const database = client.db('bookApp');
        const questions = database.collection('questions');
        const query = { title: req.body.title };

        // getBook(client, database, questions, query)
            questions.findOne(query).then(book=>{
                if(book != null) console.log(book.questions);
            })

        console.log("QUESTIONS REQUESTED")
        console.log(req.body)
    })

})


async function getBook(client, database, collection, query) {
    try {
        await client.connect().then(client => {

        });
        const book = await collection.findOne(query);
        console.log(book.questions);
    } finally {
        await client.close();
    }
}


// async function run() {
//     try {
//         await client.connect().then(client => {
//
//         });
//         const database = client.db('bookApp');
//         const questions = database.collection('users');
//         const query = { googleId: '1' };
//         //find document
//         // const book = await books.findOne(query);
//         // console.log(book);
//         //update document
//         // const book = await questions.updateOne(query, {$set: {field: "info"}})
//         //add to array
//         const book = await questions.updateOne(query, {$addToSet: {"stats.badges": "thisIsNew"}})
//         // console.log(book)
//     } finally {
//         await client.close();
//     }
// }
// run().catch(console.dir);
