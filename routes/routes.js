import { Router } from 'express' 
import {deleteOne,updateOne,createOne,getOne,getAll} from '../controllers/articleController.js'
const router  = Router()
router.get('/getAll' ,getAll)
router.post('/getOne' ,getOne)
router.post('/createOne', createOne)

router.get('/createOne',(req,res)=>{
res.render('addArticle')})

router.post('/updateOne' ,updateOne)
router.post('/deleteOne',deleteOne)


export default router