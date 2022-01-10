require('dotenv').config()
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors')
// const unitRouter = require('./routes/unit-routes')  //- было
const router = require('./routes/index') 

const createPath=require('./helpers/create-path')

const app = express();
app.use(cors())
// app.use(express.json())
const PORT = process.env.PORT || 5000;
const db = process.env.db;

mongoose 
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((res) => console.log('Connected to DB'))
  .catch((error) => console.log(error));


app.listen(PORT, (error) => {
  error ? console.log(error) : console.log(`listening port ${PORT}`);
});


app.use(express.urlencoded({ extended: false }));    // - instead of body-parser (it is obsolete)
app.use(express.static('views'));                    // - acsses to static page for brouser  
app.use(morgan(':method :url :status :res[content-length] - :response-time ms')); // - logger

 app.use('/', router)

// app.use(unitRouter)  //- было
app.use((req, res) => {                               // error middleware - placed after routing  
  res
    .status(404)
    .sendFile(createPath('error'));
});
