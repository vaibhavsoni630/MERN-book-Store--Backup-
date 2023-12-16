const express = require('express')
const app = express()
const port = process.env.port || 3000
const cors = require("cors")

// middleware
app.use(cors());
app.use(express.json())

// mongodb configuration

const { MongoClient, ServerApiVersion,ObjectId } = require('mongodb');
const uri = "mongodb+srv://Books-Bar:uOwwnYVWmnn3EmUB@cluster0.qm63n01.mongodb.net/?retryWrites=true&w=majority";

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

    // create a collletion of documents
    const bookscollection = client.db("BookInventry").collection("books");

    // insert a book to the DB : post method
    app.post('/addbook', async(req,res)=>{
        const data =req.body;
        const result = await bookscollection.insertOne(data);
        res.send(result)
    })

    // get all the books from the database 
    // app.get("/all-books",async(req,res)=>{
    //     const books = bookscollection.find()
    //     const result = await books.toArray();
    //     res.send(result);
    // })

    // update a book data : patch or update methods
    app.patch("/book/:id",async(req,res)=>{
        const id =req.params.id;
        const updatebooks = req.body;
        const filter ={ _id:new ObjectId(id)}
        const updateDoc ={
          $set:{
            ...updatebooks
          }
        }
        const options ={upsert :true}; // is line ki need hoti hai ye mongodb ki site pr bhi likha hai
        const result = await bookscollection.updateOne(filter,updateDoc,options)
        res.send(result)
    })

    // delete a book
    app.delete("/book/:id",async(req,res)=>{
      const id = req.params.id
      const filter ={_id:new ObjectId(id)}
      const result=await bookscollection.deleteOne(filter)
      res.send(result)
    })

    // find books by category
    app.get("/all-books",async(req,res)=>{
      let query = {};
      if(req.query?.category){
        query = {category :req.query.category}
      }
      const result =await bookscollection.find(query).toArray()
      res.send(result)
    })

    // find a single book
    app.get("/book/:id", async(req,res)=>{
      const id = req.params.id;
      const filter = {_id: new ObjectId(id)};
      const result = await bookscollection.findOne(filter)
      res.send(result)
    })
    
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close(); // for now i am comment out it because this will ensure that when the code is finished the adtabase will be closed and we dont want to close the database now
  }
}
run().catch(console.dir);


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})