const Express = require("express");
const { MongoClient } = require('mongodb')

var app = Express();


const connectionUrl = 'mongodb://127.0.0.1:27017'
const dbName = 'peliculas'

let db

const init = () =>
  MongoClient.connect(connectionUrl, { useNewUrlParser: true }).then((client) => {
    db = client.db(dbName);
    console.log("Conectado >> "+dbName);
  })

  const getStarWars = () => {
    // hardcodeado: peliculas con "Star Wars" en el titulo
    const filter = {
     'title':{$regex: /Star Wars/}
    };
    const projection = {
      'title': 1, 
      '_id': 0
    };
    const coll = db.collection('movies');
    const cursor = coll.find(filter, { projection });
    const result = cursor.toArray();
    return result;
  }
  

app.get("/starwars", (req,res)=>{
getStarWars()
.then((items) => {
    items = items.map((item) => ({
      title: item.title
    }))
    res.json(items)
  })
  .catch((err) => {
    console.log(err)
    res.status(500).end()
  })

})


app.listen(3000, ()=> { 
    init();
    console.log("Up 3000")});
