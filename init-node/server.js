//https://zellwk.com/blog/crud-express-mongodb/
const express = require('express')
const bodyParser= require('body-parser')
const app = express()
const MongoClient = require('mongodb').MongoClient
const connectionString = 'mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false';
MongoClient.connect(connectionString, { useUnifiedTopology: true })
  .then(client => {
    console.log('test');
    const db = client.db('admin')
    const quotesCollection = db.collection('quotes')
    // app.set('view engine', 'ejs')
    app.use(bodyParser.urlencoded({ extended: true }))
    app.get('/', (req, res) => {
      db.collection('quotes').find().toArray()
        .then(results => {
          console.log(results);
          res.render('index.ejs', { quotes: results })
        })
        .catch(/* ... */)
    })
    app.post('/quotes', (req, res) => {
      quotesCollection.insertOne(req.body)
        .then(result => {
          res.redirect('/')
        })
        .catch(error => console.error(error))
    })
    app.listen(5000, function() {
      console.log('listening on 3000')
    });
  })
  .catch(console.error)

  app.put('/quotes', (req, res) => {
    console.log(req.body)
  })
  app.use(express.static('public'))

  app.put('/quotes', (req, res) => {
    quotesCollection.findOneAndUpdate(
      { name: 'Yoda' },
      {
        $set: {
          name: req.body.name,
          quote: req.body.quote
        }
      },
      {
        upsert: true
      }
    )
    .then(result => {
      console.log(result)
      })
      .catch(error => console.error(error))
  }







