const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors')
const unitRouter = require('./routes/unit-routes') 
const createPath=require('./helpers/create-path')

const app = express();
app.use(cors())

const PORT = 3000;
const db="mongodb+srv://Andrei:VNPUAme6QBDJTLV@cluster0.0tsas.mongodb.net/CMSdata?retryWrites=true&w=majority"

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

app.use(unitRouter)
app.use((req, res) => {                               // error middleware - placed after routing  
  res
    .status(404)
    .sendFile(createPath('error'));
});
