const {Router} = require( 'express')
const {createOne,deleteOne,getAll,getOne,updateOne} = require('../controllers/ctrl.js')
// import {createOne} from './controllers/ctrl.js';
const router = Router()
router.get('/getAll',getAll);
router.post('/getOne',getOne);
router.post('/createOne',createOne)

router.get('/createOne',(req,res)=>{
  res.render('form')
})

router.post('/updateOne',updateOne)
router.post('/deleteOne',deleteOne)

module.exports = router