const {Router} = require( 'express')
const {createOne,deleteOne,getAll,getOne,updateOne} = require('../controllers/ctrl.js')
// import {createOne} from './controllers/ctrl.js';
const router = Router()
router.get('/getAll',getAll);
router.get('/getOne/:id',getOne);
router.post('/createOne',createOne)
router.get('/createOne',(req,res)=>{
  res.render('form')
})

router.post('/updateOne',(req,res)=>{
  res.render('form')
  
})
router.put('/updateOne/:id',updateOne)
router.post('/deleteOne',deleteOne)

module.exports = router