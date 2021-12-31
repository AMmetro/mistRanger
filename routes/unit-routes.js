const express = require('express');
const router = express.Router();
const Unit=require('../models/unit')
const createPath=require('../helpers/create-path')

router.get('/', (req, res) => {
    res.sendFile(createPath('index'));
  });

router.get('/', (req, res) => {
    res.sendFile(createPath('index'));
  });
  
  router.get('/contacts', (req, res) => {
    res.sendFile(createPath('contacts'));
  });
  
  router.get('/about-us', (req, res) => {
    res.redirect('/contacts');
  });
  
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
  // --edit-------------
  router.put('/edit/:id', (req, res) => {
    // const {title, author, text} = req.body
    const {id}=req.params
      // ------------------------------------------------------------------------
      const temp = { id: new Date(), date: (new Date()).toLocaleDateString(), text: "edit edit", title:"edit edit", date:"05.05.2021", author:"Andron"}
      const {title, author, text} = temp
      // console.log(title)
      // console.log(author)
      // console.log(text)
      const unit = new Unit ({title, author, text})
    // ----------------------------------------------------------------------------
    Unit
    .findByIdAndUpdate(id, {title, author, text})
    .then((result)=>{res.redirect(`/units/${id}`)})
    // .then((result)=>{res.sendStatus(200)})
    .catch((error) => {console.log(error)
    res.send(error)
    });
  });
  
  router.get('/posts/', (req, res) => {
    // console.log(req.url);
    Unit
       .find()
       .sort({createdAt: -1})
       .then((units)=> res.send(units))
    // const posts = [
    //   {id:"1", text: "111111111", title:"post title", date:"05.05.2021", author:"Andron"},
    //   {id:"2", text: "22222222", title:"post title", date:"05.05.2021", author:"Andron"},
    //   {id:"3", text: "33333333", title:"post title", date:"05.05.2021", author:"Andron"},
    // ]
    // // res.sendFile(createPath('posts'));
    //  res.send(posts);
  });
  
  router.post('/add-post/', (req, res) => {
    // const {title, author, text} = req.body
    // console.log(req.body)
    
    // ------------------------------------------------------------------------
    const temp = { id: new Date(), date: (new Date()).toLocaleDateString(), text: "post post post", title:"new new", date:"05.05.2021", author:"Andron"}
    const {title, author, text} = temp
    // console.log(title)
    // console.log(author)
    // console.log(text)
    const unit = new Unit ({title, author, text})
  // ----------------------------------------------------------------------------
      // console.log("req.body is =");
      // console.log(req.body);
      // res.send(req.body);
      unit
      .save()
      .then(result=>res.send(req.body))
      .catch((error)=> {console.log(error)
       res.send(createPath('error'))  }
      )
  });

  module.exports = router;