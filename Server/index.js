const express = require('express');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const cors = require('cors');
require('dotenv').config()
const app = express();
const port = process.env.PORT || 5000;

// ! middle ware 
app.use(cors());
app.use(express.json());

// ebX72ybJzrXsdhPT
// coffeeShop
// console.log(process.env.DB_USER)


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.zioaowq.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        const coffees = client.db('coffeeDB').collection('coffees')

        //  ! send data to mongodb 
        app.post('/coffees', async (req, res) => {
            const doc = req.body;
            const result = await coffees.insertOne(doc);
            res.send(result)
            // console.log(doc)
        })

        //  * get data from mongodb 
        app.get('/coffees', async (req, res) => {
            const cursor = coffees.find();
            const result = await cursor.toArray();
            res.send(result)
        })
        // * delete item 
        app.delete('/coffees/:id', async (req, res) => {
            let id = req.params.id;
            const query = { _id: new ObjectId(id) }
            const result = await coffees.deleteOne(query);
            res.send(result);
        })
        // * get a single data
        app.get('/coffees/:id' , async(req , res)=> { 
            const id = req.params.id ;
            const query = {_id : new ObjectId(id)}
            const result = await  coffees.findOne(query); 
            res.send(result)

        })
        // * Update a data  
        app.put('/coffees/:id', async (req, res) => {
            let id = req.params.id;
            const updatedDoc = req.body;
            const query = { _id: new ObjectId(id) }
            const options = { upsert: true };
            const updateOPT = {
                $set: {
                    name : updatedDoc.name , 
                    chef_name : updatedDoc.chef_name , 
                    supplier : updatedDoc.supplier , 
                    taste : updatedDoc.taste, 
                    category : updatedDoc.category, 
                    details : updatedDoc.details , 
                    img : updatedDoc.img 
                 }
            };
            const result = await coffees.updateOne(query , updateOPT , options) ; 
            res.send(result); 
        })

        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);
app.get('/', (req, res) => {
    res.send('Coffee shop ')
})
app.listen(port, () => {
    console.log(`Server is started at PORT ${port}`)
}) 