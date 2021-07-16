const { MongoClient } = require("mongodb");

const uri = "mongodb+srv://AlinaVarkki:LevelUpSociety@cluster0.wn3kg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

async function run() {
    try {
        await client.connect();
        const database = client.db('bookApp');
        const books = database.collection('questions');
        const query = { name: 'Harry Potter' };
        const book = await books.findOne(query);
        console.log(book);
    } finally {
        await client.close();
    }
}
run().catch(console.dir);
