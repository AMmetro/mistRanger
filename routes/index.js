const Router = require('express');
const router = new Router();
const hrRouter = require('./hrRouter') 
const authRouter = require('./authRouter') 
const unitsRouter = require('./unit-routes') 



router.use('/hr', hrRouter)
router.use('/units', unitsRouter)
router.use('/auth', authRouter)


module.exports = router;