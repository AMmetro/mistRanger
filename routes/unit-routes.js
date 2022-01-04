const express = require('express');
const router = express.Router();
const Unit=require('../models/unit')
const createPath=require('../helpers/create-path')

router.get('/', (req, res) => {
    res.sendFile(createPath('index'));
  });
  
  router.get('/contacts', (req, res) => {
    res.sendFile(createPath('contacts'));
  });
  
  router.get('/about-us', (req, res) => {
    res.redirect('/contacts');
  });
  
  router.get('/posts/', (req, res) => {
    // console.log(req.url);
    Unit
       .find()
       .sort({createdAt: -1})
       .then((units)=> res.send(units))
  });

  // router.get('/find/:id', (req, res) => {
  //   Unit
  //   .find({title: req.params.id}, {})
  //   // .then((res)=>{console.log(res)})
  //   .then((unit)=>{res.send(unit)})
  // });

  router.get('/posts/:id', (req, res) => {
    Unit
    .findById(req.params.id)
    .then((unit)=>{res.send(unit)})
  });
  
  router.delete('/posts/:id', (req, res) => {
    Unit
    .findByIdAndDelete(req.params.id)
    .then((res)=>{res.sendStatus(200)})
    .catch((error) => {console.log(error)
    res.send(error)
    });
  });

  router.put('/edit/', (req, res) => {
    const {title, author, text, id} = req.body
    Unit
    .findByIdAndUpdate(id, {title, author, text})  // третий передоваемый обект - вернуть обновленное значение
    // .then((result)=>{res.redirect(`/units/${id}`)})
    .then((result)=>{res.sendStatus(200)})
    .catch((error) => {console.log(error)
    res.send(error)
    });
  });
  
  router.post('/add-post/', (req, res) => {
     const {title, author, text} = req.body
  console.log(title, author, text)
  // ------------------------------------------------------------------------
    // const temp = { id: new Date(), date: (new Date()).toLocaleDateString(), text: "post post post", title:"new new", date:"05.05.2021", author:"Andron"}
    // const {title, author, text} = temp
  // ----------------------------------------------------------------------------
  const unit = new Unit ({title, author, text})
    unit
      .save()
      .then(result=>res.send(req.body))
      .catch((error)=> {console.log(error)
       res.send(createPath('error'))  }
      )
  });

  module.exports = router;