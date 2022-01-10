const Router = require('express');
const router = new Router;
const userController = require ('../controllers/userController')

 
  router.post ('/login', userController.login)
  router.post ('/registration', userController.registration)


// router.get ('/', (req, res) => {
//     //  res.send(req.headers)
//     //  res.send(req.headers['cookie'])
//     //  res.send(req.body)
//     //  res.status(200).json({message:'cookies router working'})
//   })

//   router.post ('/', (req, res) => {

//        res.setHeader('Set-Coocie', ['value1=value2'])
//        console.log(res.setHeader('Set-Coocie', 'TestHeader=HeaderValue'))
//        res.send(req.headers)

//   }) 

module.exports = router